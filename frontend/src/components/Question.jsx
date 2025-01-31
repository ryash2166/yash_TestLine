import React from "react";

const Question = ({ question, handleAnswerClick }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{question.question}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option.isCorrect)}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;