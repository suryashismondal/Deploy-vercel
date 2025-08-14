const express = require('express');
const router = express.Router();
const Result = require('../models/ResultData');

router.post('/', async (req, res) => {
  const { score, total } = req.body;
  console.log('Saving result:', score, total);

  try {
    const newResult = new Result({ score, total });
    await newResult.save();
    res.status(201).json({ message: 'Result saved' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save result' });
  }
});

module.exports = router;