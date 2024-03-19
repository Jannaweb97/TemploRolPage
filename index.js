const express = require('express');
const path = require('path');

const app = express();

// Middleware para servir archivos estáticos desde la raíz del proyecto
app.use(express.static(path.join(__dirname)));

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para servir el archivo CSS de la página de inicio
app.get('/index.css', (req, res) => {
    res.type('text/css');
    res.sendFile(path.join(__dirname, 'index.css'));
});

// Ruta para servir el archivo CSS del dashboard (si lo mantienes separado)
app.get('/dashboard.css', (req, res) => {
    // Configura el tipo MIME del archivo CSS
    res.type('text/css');
    res.sendFile(path.join(__dirname, 'dashboard.css'));
});

// Ruta para la autenticación con Discord
app.get('/auth/discord', (req, res) => {
    // Extraer el token de acceso de la URL de consulta
    const accessToken = req.query.access_token;
    if (accessToken) {
        // Redirigir a la página del dashboard después de la autenticación exitosa
        res.redirect(302, '/');
    } else {
        // Si no hay token de acceso, redirigir a la página de inicio
        res.redirect('/');
    }
});

// Escucha en el puerto 53134
const port = 53134;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
