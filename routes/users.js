const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Define routes
router.post('/register', UserController.register);
router.post('/login', UserController.login);
// Add more routes as needed

module.exports = router;
