# 🏗️ Etapa 1: Construcción
FROM node:20 AS build

WORKDIR /app

# Copiar dependencias y luego instalar (para aprovechar cache)
COPY package*.json ./
RUN npm install

# Copiar todo el código y generar la build
COPY . .
RUN npm run build


# 🚀 Etapa 2: Ejecución (solo el servidor y archivos construidos)
FROM node:20-slim

WORKDIR /app

# Copiar únicamente lo necesario desde la etapa anterior
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js ./server.js
COPY --from=build /app/package*.json ./

RUN npm install --only=production

# Puerto en el que correrá la app
ENV PORT=3000
EXPOSE 3000

# Comando de inicio
CMD ["node", "server.js"]
