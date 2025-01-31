import React from "react";

const Result = ({ score, totalQuestions, restartQuiz }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-lg mb-6">
        Your Score: {score} / {totalQuestions}
      </p>
      {score === totalQuestions && (
        <div className="bg-yellow-200 p-4 rounded-lg mb-6">
          🎉 Congratulations! You earned a Gold Badge!
        </div>
      )}
      <button
        onClick={restartQuiz}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;