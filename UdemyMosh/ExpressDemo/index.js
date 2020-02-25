const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!!')
});

app.get('/api/course', (req, res) => {
    res.send([1, 2, 3,4]);
});

app.listen(port, () => console.log(`Server is running on Port ${port}`));