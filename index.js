const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.PORT);

app.get('/', (req, res) => {
    res.send('Hello World.!');
});

app.get('/twitter', (req, res) => {
    res.send('Welcome to Twitter.!');
});

app.get('/login', (req, res) => {
    res.send('<h1>This is a Login page.!</h1>');
});

app.get('/youtube', (req, res) => {
    res.send('<h1>Welcome to Youtube.</h1>');
});


app.listen(1234, () => {
    console.log('Example app listening on port 1234');
});