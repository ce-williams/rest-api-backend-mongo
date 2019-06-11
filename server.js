// Dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection

db.on('error', (error) => console.log(error));
db.once('open', () => console.log("Connected to database"));

app.use(express.json())

const testUsers = require('./routes/testUsers');

app.use('/testUsers', testUsers);


app.listen(3000, () => console.log('api is running on port 3000'));

