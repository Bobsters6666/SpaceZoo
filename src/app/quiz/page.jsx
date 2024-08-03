// "use client"
// import React from "react";
// import { QuizModal } from "@/components/quizModal/quizModal";
// import { QuizModal2 } from "@/components/quizModal/quizModal2";
// import '.app.css';

// export default function page() {
//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//     return (
//         <div className="App">
//           <QuizModal />
//           {/* <QuizModal2 /> */}
//         </div>
//       );
// }

"use client";
import React, { useState } from "react";
import { QuizModal } from "../../components/quizModal/quizModal";
import { QuizModal2 } from "../../components/quizModal/quizModal2";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="app-container">
      {currentQuestion === 1 && (
        <QuizModal onNextQuestion={handleNextQuestion} />
      )}
      {currentQuestion === 2 && (
        <QuizModal2 onNextQuestion={handleNextQuestion} />
      )}
    </div>
  );
}
