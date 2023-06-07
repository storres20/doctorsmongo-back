require('dotenv').config();

const express = require('express'); // Server
const cors = require("cors");

const doctors = require('./routes/doctor.routes');
const users = require('./routes/user.routes');
const appointments = require('./routes/appointment.routes');

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;


// Database connection - mongodb
mongoose.set("strictQuery", false);

mongoose.connect(mongoString, { dbName: "doctors" });
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
// ****

// Server
const app = express();

app.use(express.json());

// Cors
var corsOptions = {
    //origin: "http://localhost:3000" //frontend
    origin: "https://doctorsfinal.netlify.app" //frontend
};

app.use(cors(corsOptions));

// simple route
app.get("/", async (req, res) => {
    res.json({ message: "Welcome to Doctor's appointment Back-End application." });
});

// Routes
app.use('/api/v1/doctors', doctors)
app.use('/api/v1/users', users)
app.use('/api/v1/appointments', appointments)

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})