import { createContext, useState, useEffect } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(10); // Timer for each question
  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/quiz");
        if (!response.ok) throw new Error("Failed to fetch quiz data");
        const data = await response.json();
        setQuestions(data.questions);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);
  
  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeout();
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleTimeout = () => {
    setCurrentQuestion((prev) => prev + 1);
    setTimeLeft(10); // Reset timer for the next question
  };
  
  return (
    <QuizContext.Provider value={{ questions, score, setScore, currentQuestion, setCurrentQuestion, loading, timeLeft, setTimeLeft }}>
      {children}
    </QuizContext.Provider>
  );
};