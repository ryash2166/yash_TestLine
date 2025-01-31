import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

export default function Result() {
  const { score, questions, setScore, setCurrentQuestion } = useContext(QuizContext);
  
  const getBadge = () => {
    if (score === questions.length) return "🏆 Perfect Score!";
    if (score >= questions.length / 2) return "🎖️ Great Job!";
    return "💡 Keep Practicing!";
  };

  const Restart = () => {
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4'
    >
      <Confetti recycle={false} numberOfPieces={400} />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className='text-center'
      >
        <h2 className='text-4xl font-bold mb-6'>Quiz Completed! 🎉</h2>
        
        <div className='relative inline-block mb-8'>
          <div className='absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-30'></div>
          <div className='relative text-6xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text'>
            {score}/{questions.length}
          </div>
        </div>

        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className='text-2xl mb-8 text-blue-300'
        >
          {getBadge()}
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to='/'
            onClick={Restart}
            className='inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
          >
            Play Again
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}