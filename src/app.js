const express = require('express');
const dotenv = require('dotenv');
dotenv.config()

const app = express();

const {PORT} = process.env;

// MAIN ENTRY POINT
app.get('/', (req, res) => {
    res.send('This is the main application entry point');
})

app.listen(PORT, () => {
    console.log(`The app is running at ${PORT}`)
})
