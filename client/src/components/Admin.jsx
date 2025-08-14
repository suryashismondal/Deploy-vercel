import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [question, setQuestion] = useState('');
  const [option, setOption] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post('https://deploy-vercel-snowy-nine.vercel.app/api/questions', {
      question,
      option: option.split(',').map(opt => opt.trim()),
      correctAnswer
    });
    alert('Question added successfully!');
    setQuestion('');
    setOption('');
    setCorrectAnswer('');
  } catch (err) {
    console.error(err);
    alert('Failed to add question');
  }
};


  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Add Quiz Question</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Options (comma separated)"
          value={option}
          onChange={(e) => setOption(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Correct Answer"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Question
        </button>
      </form>
    </div>
  );
};

export default Admin;