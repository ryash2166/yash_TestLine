import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white'
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className='text-5xl font-bold mb-8 text-center px-4'
      >
        Welcome to the Quiz Game!
      </motion.h1>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to='/quiz'
          className='px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
        >
          Start Quiz
        </Link>
      </motion.div>
    </motion.div>
  );
}