// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./config/db'); 

require('dotenv').config();

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());
app.use(cors());

// Define your API routes
const usersRoutes = require('./routes/users'); 
const thoughtsRoutes = require('./routes/thoughts'); 

app.use('/users', usersRoutes); 
app.use('/thoughts', thoughtsRoutes);

// Error handling middleware (not shown in this example, but you should include it)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
