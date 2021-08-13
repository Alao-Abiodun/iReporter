const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config()

const app = express();

const {PORT} = process.env;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRoute = require('./routes/user.route');
const incidentRoute = require('./routes/incident.route');
const documentationRoute = require('./routes/documentations.route');

// MAIN ENTRY POINT
app.get('/', (req, res) => {
    res.send('This is the main application entry point');
})

app.use('/api/v1', userRoute);
app.use('/api/v1', incidentRoute);
app.use('/api/v1', documentationRoute);

app.listen(PORT, () => {
    console.log(`The app is running at ${PORT}`)
});

module.exports = app;
