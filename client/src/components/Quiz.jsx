import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/api/questions')
      .then((res) => setQuestions(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleNext = () => {
    const current = questions[index];
    const correct = current.correctAnswer.trim().toLowerCase();
    const chosen = selected.trim().toLowerCase();

    if (chosen === correct) {
      setScore(score + 1);
    }

    setSelected('');
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      navigate('/result', {
        state: {
          score: score + (chosen === correct ? 1 : 0),
          total: questions.length
        }
      });
    }
  };

  if (questions.length === 0) return <p>Loading...</p>;

  const currentQuestion = questions[index];

  return (
    <div className="p-6 max-w-full mx-auto bg-slate-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">{currentQuestion.question}</h2>
      {currentQuestion.option.map((opt, i) => (
        <div key={i} className="mb-2 bg-gray-200 p-3 rounded-md cursor-pointer">
            <label className="inline-flex items-center cursor-pointer">
                <input type="radio" name="option" value={opt.trim()} checked={selected === opt.trim()} onChange={(e) => setSelected(e.target.value)} className="mr-2"/>{opt.trim()}
            </label>
        </div>
    ))}

      <button onClick={handleNext} disabled={!selected} className="mt-4 bg-green-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-green-700">{index + 1 === questions.length ? 'Finish' : 'Next'}</button>
    </div>
  );
};

export default Quiz;