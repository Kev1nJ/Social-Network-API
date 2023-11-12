

  const mongoose = require('mongoose');

const dbUrl = 'mongodb://127.0.0.1:27017/mynewdatabase';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Connected to MongoDB at ${dbUrl}`);
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose connection closed through app termination');
    process.exit(0);
  });
});

module.exports = db;
