import { Award, Clock, RefreshCw, Target, Trophy } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Results() {
  const dispatch = useDispatch();
  const { answers, questions, score, timeLeft } = useSelector(
    (state) => state.quiz
  );

  const totalQuestions = questions.length;
  const percentage = ((score / totalQuestions) * 100).toFixed(2);
  const timeUsed = 120 - timeLeft; // Assuming the quiz starts with 120 seconds
  const timeUsedMinutes = Math.floor(timeUsed / 60);
  const timeUsedSeconds = timeUsed % 60;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* header */}
        <div className="mb-8">
          <div
            className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6`}
          >
            <Trophy className="w-12 h-12" />
          </div>

          <h1 className="text-4xl font-bold text-gray-800">Quiz Complete</h1>

          <p className="text-2xl font-semibold mb-6">Performance Message</p>
        </div>
        {/* header */}

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl transform hover:scale-102 transition-transform duration-200">
            <div className="flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>

            <div className="text-3xl font-bold text-blue-800 mb-2">
              {score} / {totalQuestions}
            </div>

            <div className="text-blue-600 font-medium">Question Correct</div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl transform hover:scale-102 transition-transform duration-200">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>

            <div className="text-3xl font-bold text-purple-800 mb-2">
              {percentage}%
            </div>

            <div className="text-purple-600 font-medium">score percentage</div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl transform hover:scale-102 transition-transform duration-200">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-green-600" />
            </div>

            <div className="text-3xl font-bold text-green-800 mb-2">
              {timeUsedMinutes.toString().padStart(2, "0")}:
              {timeUsedSeconds.toString().padStart(2, "0")}
            </div>

            <div className="text-green-600 font-medium">Time Used</div>
          </div>
        </div>
        {/* cards */}

        {/* result */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Question Review
          </h3>
          {/* displaying dynamic question */}
          <div className="grid gap-4 max-h-64 overflow-y-auto"></div>
          {/* displaying dynamic question */}

          <button className="inline-flex items-center px-8 py-4 space-x-3 text-lg font-semibold rounded-xl shadow-lg text-white cursor-pointer  bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200">
            <RefreshCw size={24} className="pr-2" />
            Take Quiz Again
          </button>
        </div>
        {/* result */}
      </div>
    </div>
  );
}

export default Results;
