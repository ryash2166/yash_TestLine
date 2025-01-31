import { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../context/QuizContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';

export default function Quiz() {
  const { questions, currentQuestion, setCurrentQuestion, score, setScore, timeLeft, setTimeLeft } = useContext(QuizContext);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (!questions || questions.length === 0) navigate('/');
  }, [questions, navigate]);

  const handleAnswer = (isCorrect, index) => {
    if (isAnswerSelected) return;
    setSelectedOption(index);
    setIsAnswerSelected(true);

    if (isCorrect) {
      setScore(score + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setIsAnswerSelected(false);
        setTimeLeft(10);
      } else {
        navigate('/result');
      }
    }, 1500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [currentQuestion, setTimeLeft]);

  if (!questions || !questions.length) return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
    </div>
  );

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4'>
      {showConfetti && <Confetti recycle={false} numberOfPieces={1200} />}
      
      {/* Progress Bar */}
      <div className='w-full max-w-2xl mb-8 bg-gray-700 rounded-full h-3'>
        <motion.div
          className='h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full'
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Timer */}
      <motion.div
        key={timeLeft}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        className='mb-6 text-2xl font-bold text-blue-400'
      >
        ⏳ {timeLeft}s
      </motion.div>

      <AnimatePresence mode='wait'>
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className='w-full max-w-2xl'
        >
          <h2 className='text-3xl font-bold text-center mb-8'>
            {questions[currentQuestion]?.description}
          </h2>

          <div className='grid md:grid-cols-2 gap-4'>
            {questions[currentQuestion]?.options?.map((option, index) => (
              <motion.button
                key={index}
                whileHover={!isAnswerSelected ? { scale: 1.02 } : {}}
                whileTap={!isAnswerSelected ? { scale: 0.98 } : {}}
                onClick={() => handleAnswer(option.is_correct, index)}
                className={`p-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                  selectedOption === index
                    ? option.is_correct
                      ? 'bg-green-500 shadow-lg'
                      : 'bg-red-500 shadow-lg'
                    : 'bg-gray-700 hover:bg-gray-600'
                } ${isAnswerSelected ? 'cursor-not-allowed' : ''}`}
                disabled={isAnswerSelected}
              >
                <div className='flex items-center justify-between'>
                  <span>{option.description}</span>
                  {selectedOption === index && (
                    <span className='ml-2 text-xl'>
                      {option.is_correct ? '🎉' : '❌'}
                    </span>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}