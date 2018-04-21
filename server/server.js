const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public'); // combines pieces in () to create path to folder. 
// '..' for du dir, 'public' for directory name
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('server is up and listening');
});