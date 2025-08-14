const express = require('express');
const router = express.Router(); 
const Question = require('../models/Question');

// GET all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new question
router.post('/', async (req, res) => {
  const { question, option, correctAnswer } = req.body;

  // Simple validation
  if (!question || !option || !correctAnswer) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newQuestion = new Question({ question, option, correctAnswer });
    await newQuestion.save();
    res.status(201).json({ message: "Question added" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;