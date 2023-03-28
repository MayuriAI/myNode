const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('I have completed Master in Computer Application and BSC-IT');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
