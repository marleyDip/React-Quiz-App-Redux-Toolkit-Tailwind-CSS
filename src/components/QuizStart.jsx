import { BookOpen, Clock, Play, Trophy } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { startQuiz } from "../store/quizSlice";

function QuizStart() {
  const dispatch = useDispatch();

  const { questions, timeLeft } = useSelector((state) => state.quiz);

  const handleStartQuiz = () => {
    dispatch(startQuiz());
  };

  //formate time
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${min.toString().padStart(2, 0)}:${secs.toString().padStart(2, 0)}`;
  };

  return (
    <div className="max-w-4xl mx-auto py-5">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* info */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-8">
            <BookOpen className="w-12 h-12" />
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            React Knowledge Quiz
          </h1>

          <p className="text-xl font-medium  text-gray-600 mb-8 max-w-2xl mx-auto">
            Test your Knowledge of React, JavaScript, and web development.
            Answer multiple choice questions and see how well you know the
            fundamentals!
          </p>
        </div>
        {/* info */}

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl transform transition-transform hover:translate-x-2 shadow-2xs">
            <div className="grid place-items-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>

            <div className="text-2xl font-bold text-blue-800 mb-2">
              {questions.length}
            </div>
            <div className="text-2xl font-medium">Questions</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl transform transition-transform hover:translate-x-2 shadow-2xs">
            <div className="grid place-items-center mb-4">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>

            <div className="text-2xl font-bold text-purple-800 mb-2">
              {formatTime(timeLeft)}
            </div>
            <div className="text-2xl font-medium">Minutes</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl transform transition-transform hover:translate-x-2 shadow-2xs">
            <div className="grid place-items-center mb-4">
              <Trophy className="w-8 h-8 text-green-600" />
            </div>

            <div className="text-2xl font-bold text-green-800 mb-2">100%</div>
            <div className="text-2xl font-medium">Max Score</div>
          </div>
        </div>
        {/* cards */}

        {/* rules */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Quiz Rules
          </h3>

          <div className="text-left bg-gray-50 p-6 rounded-xl max-w-2xl mx-auto">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 grid place-items-center mr-3 mt-0.5 text-sm font-semibold bg-blue-100 text-blue-600 rounded-full">
                  1
                </span>

                <span>Each question has multiple choice answer</span>
              </li>

              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 grid place-items-center mr-3 mt-0.5 text-sm font-semibold bg-blue-100 text-blue-600 rounded-full">
                  2
                </span>

                <span>You have 5 minutes to complete all questions</span>
              </li>

              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 grid place-items-center mr-3 mt-0.5 text-sm font-semibold bg-blue-100 text-blue-600 rounded-full">
                  3
                </span>

                <span>
                  Once you select an answer, you'll see the explanation
                </span>
              </li>

              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 grid place-items-center mr-3 mt-0.5 text-sm font-semibold bg-blue-100 text-blue-600 rounded-full">
                  4
                </span>

                <span>You can navigate back to previous questions</span>
              </li>
            </ul>
          </div>
        </div>
        {/* rules */}

        {/* btn */}
        <button
          className="inline-flex items-center px-8 py-4 space-x-3 text-white font-semibold rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform  hover:scale-105 transition-all duration-200 cursor-pointer"
          onClick={handleStartQuiz}
        >
          <Play size={24} />
          <span>Start Quiz</span>
        </button>
        {/* btn */}
      </div>
    </div>
  );
}

export default QuizStart;
