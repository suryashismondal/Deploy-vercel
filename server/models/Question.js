const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
    
  question: {
    type: String,
    required: true,
  },
  option: {
    type: [String],  // Array of options
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Question = mongoose.model('questions', questionSchema);
module.exports = Question;