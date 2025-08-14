const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  score: Number,
  total: Number,
  createdAt: { type: Date, default: Date.now }
});

const Result = mongoose.model('Result', ResultSchema);
module.exports = Result