const express = require('express');
const User = require('../models/User');
const router = express.Router();
const UserController = require('../controllers/userController');
const bcrypt = require('bcrypt');


// get a user
router.get('/:User123', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      // User with the specified ID was not found
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json({ status: 'success', data: other });
  } catch (err) {
    // Handle other errors (e.g., database errors)
    res.status(500).json({ status: 'error', error: err.message });
  }
});


router.post('/register', UserController.register);
router.post('/login', UserController.login);

// update user
router.put('/:User123', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json({ status: 'error', error: err.message });
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json({ status: 'success', message: 'Account has been updated' });
    } catch (err) {
      return res.status(500).json({ status: 'error', error: err.message });
    }
  } else {
    return res.status(403).json({ status: 'error', message: 'You can update only your account!' });
  }
});

// delete user
router.delete('/:User123', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ status: 'success', message: 'Account has been deleted' });
    } catch (err) {
      return res.status(500).json({ status: 'error', error: err.message });
    }
  } else {
    return res.status(403).json({ status: 'error', message: 'You can delete only your account!' });
  }
});



module.exports = router;
