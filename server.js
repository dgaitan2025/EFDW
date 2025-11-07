// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Obtener __dirname en entorno ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde /dist
app.use(express.static(path.join(__dirname, "dist")));

// ✅ Corrección: usar '/*' en lugar de '*'
// para compatibilidad con Express 5 y evitar PathError
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor iniciado en puerto ${PORT}`);
});
