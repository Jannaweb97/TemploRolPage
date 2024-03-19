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

// Ruta para la página del dashboard y redirección después de iniciar sesión
app.get('/auth/discord', (req, res) => {
    // Extrae el token de acceso de la URL de consulta
    const accessToken = req.query.access_token;
    if (accessToken) {
        // Redirige a la URL del dashboard en GitHub Pages
        res.redirect('https://jannaweb97.github.io/TemploRolPage/Inicio');
    } else {
        // Si no hay token de acceso, redirige a la página de inicio
        res.redirect('/');
    }
});

// Escucha en el puerto 53134
const port = 53134;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
