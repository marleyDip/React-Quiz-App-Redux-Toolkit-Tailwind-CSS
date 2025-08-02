import { useEffect } from "react";

import QuizStart from "./QuizStart";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";
import Questions from "./Questions";
import Results from "./Results";

import { useDispatch, useSelector } from "react-redux";
import { setQuestions } from "../store/quizSlice";

import { sampleQuestions } from "../data/questions.js";

function Quiz() {
  const dispatch = useDispatch();

  //load the questions
  useEffect(() => {
    dispatch(setQuestions());
  }, [dispatch]);

  const {
    questions,
    currentQuestionIndex,
    answers,
    isQuizCompleted,
    isTimeActive,
  } = useSelector((state) => state.quiz);

  //loading quiz
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 grid place-items-center">
        <div className="text-center">
          <div className="animate-spin  rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto "></div>

          <p className="mt-4 font-bold  text-gray-600">Loading</p>
        </div>
      </div>
    );
  }

  // complete quiz
  if (isQuizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8 grid place-items-center">
        <Results />
      </div>
    );
  }

  //quiz start
  if (!isTimeActive && answers.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8 grid place-items-center">
        <QuizStart />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-8 px-4">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex-1">
              <ProgressBar />
            </div>

            <div className="md:ml-6">
              <Timer />
            </div>
          </div>
        </div>
      </div>

      <Questions />
    </div>
  );
}

export default Quiz;
