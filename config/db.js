
const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost/SocialAPI'; // Update with your actual database name

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
