import React, { useEffect } from "react";

const Timer = ({ timeLeft, setTimeLeft, setShowResult }) => {
  useEffect(() => {
    if (timeLeft === 0) {
      setShowResult(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, setTimeLeft, setShowResult]);

  return (
    <div className="text-right mb-4">
      <span className="text-lg font-bold">Time Left: {timeLeft}s</span>
    </div>
  );
};

export default Timer;