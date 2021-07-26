const express = require('express');
const dotenv = require('dotenv');
dotenv.config()

const app = express();

const {PORT} = process.env;

app.use(express.json());

const userRoute = require('./routes/user.route');

// MAIN ENTRY POINT
app.get('/', (req, res) => {
    res.send('This is the main application entry point');
})

app.use('/api/v1', userRoute);

app.listen(PORT, () => {
    console.log(`The app is running at ${PORT}`)
});

module.exports = app;
