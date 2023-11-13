// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require('dotenv').config();

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

  app.use((req, res, next) => {
    console.log(`Received ${req.method} request to ${req.url}`);
    next();
  });
  
app.use(bodyParser.json());
app.use(cors());

// API routes
const usersRoutes = require('./routes/users'); 
const thoughtsRoutes = require('./routes/thoughts'); 

app.use('/users', usersRoutes); 
app.use('/thoughts', thoughtsRoutes);

// Root route handler
app.get('/', (req, res) => {
  res.send('Social Network API!');
});


// Error handling middleware 
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
