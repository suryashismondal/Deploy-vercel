import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function Result  () {
  const location = useLocation();
  const navigate = useNavigate();
  const { score = 0, total = 0 } = location.state || {};

  const percentage = (score / total) * 100;

  useEffect(() => {
    axios.post('http://localhost:3001/api/results', {
      score,
      total
    }).then(() => {
      console.log('Result saved successfully');
    }).catch((err) => {
      console.error('Error saving result:', err);
    });
  }, [score, total]);

  return (
    <div className="p-6 max-w-md mx-auto text-center bg-slate-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Quiz Result</h2>
      <p className="text-lg mb-2">Score: {score} / {total}</p>
      <p className="text-lg text-blue-600">Percentage: {percentage.toFixed(2)}%</p>
      <button onClick={() => navigate('/quiz')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700">Try Again</button>
    </div>
  );
};

export default Result