const express = require('express');
const path = require('path');

const app = express();

// Middleware para servir archivos estáticos desde la raíz del proyecto
app.use(express.static(path.join(__dirname)));

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para servir el archivo CSS
app.get('/index.css', (req, res) => {
    // Configura el tipo MIME del archivo CSS
    res.type('text/css');
    res.sendFile(path.join(__dirname, 'index.css'));
});

// Ruta para la página del dashboard
app.get('/auth/discord', (req, res) => {
    // Redirige a la URL de tu página de GitHub Pages después de iniciar sesión
    res.redirect('https://jannaweb97.github.io/TemploRolPage/');
});

// Escucha en el puerto 53134
const port = 53134;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
