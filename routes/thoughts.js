const router = require("express").Router();
const Thought = require("../models/Thought");
const User = require("../models/User");

// create a thought
router.post("/", async (req, res) => {
  const newThought = new Thought(req.body);
  try {
    const savedThought = await newThought.save();
    res.status(200).json({ status: 'success', message: 'Thought created successfully', data: savedThought });
  } catch (err) {
    res.status(500).json({ status: 'error', message: 'Failed to create thought', error: err.message });
  }
});

// update a thought
router.put("/:id", async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (thought.userId === req.body.userId) {
      await thought.updateOne({ $set: req.body });
      res.status(200).json({ status: 'success', message: 'Thought updated successfully' });
    } else {
      res.status(403).json({ status: 'error', message: 'You can update only your thought' });
    }
  } catch (err) {
    res.status(500).json({ status: 'error', message: 'Failed to update thought', error: err.message });
  }
});

// delete a thought
router.delete("/:id", async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (thought.userId === req.body.userId) {
      await thought.deleteOne();
      res.status(200).json({ status: 'success', message: 'Thought deleted successfully' });
    } else {
      res.status(403).json({ status: 'error', message: 'You can delete only your thought' });
    }
  } catch (err) {
    res.status(500).json({ status: 'error', message: 'Failed to delete thought', error: err.message });
  }
});



// get a thought
router.get("/:id", async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    res.status(200).json({ status: 'success', data: thought });
  } catch (err) {
    res.status(500).json({ status: 'error', message: 'Failed to get thought', error: err.message });
  }
});


module.exports = router;
