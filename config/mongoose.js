const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://manii:123@cluster0.trz5bjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', () => {
    console.log('Connected to Database : MongoDB');
});

module.exports = db;