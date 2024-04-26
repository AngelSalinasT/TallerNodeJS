const express = require('express');
const app = express(); // server 
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/Angel', (req, res) => {
    const name = 'Angel'; // Reemplaza 'Tu nombre aquí' con tu nombre real
    res.send(`Hello World! My name is ${name}`);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});