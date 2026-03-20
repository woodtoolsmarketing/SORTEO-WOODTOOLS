const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Le decimos al servidor que la carpeta 'public' contiene nuestros archivos estáticos (HTML, CSS, JS, Imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor de sorteos corriendo en http://localhost:${PORT}`);
});