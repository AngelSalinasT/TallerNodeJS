const express = require('express');
const app = express(); // server 

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});
