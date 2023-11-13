// controllers/userController.js

const User = require('../models/User');
const bcrypt = require('bcrypt');

const UserController = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ status: 'error', message: 'User with this email already exists' });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      // Save the user to the database
      const savedUser = await newUser.save();

      res.status(201).json({ status: 'success', message: 'User registered successfully', data: savedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Registration failed', error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ status: 'error', message: 'User not found' });
      }

      // Check if the password is correct
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ status: 'error', message: 'Invalid password' });
      }

      res.status(200).json({ status: 'success', message: 'Login successful', data: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Login failed', error: error.message });
    }
  },
};

module.exports = UserController;
