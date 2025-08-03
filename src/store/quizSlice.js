import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  isQuizCompleted: false,
  score: 0,
  timeLeft: 120,
  isTimeActive: false,
  showExplanation: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },

    startQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.isQuizCompleted = false;
      state.answers = [];
      state.score = 0;
      state.timeLeft = 120;
      state.showExplanation = false;
      state.isTimeActive = true;
    },

    decrementTimer: (state) => {
      if (state.timeLeft > 0 && state.isTimeActive) {
        state.timeLeft -= 1;
      } else if (state.timeLeft === 0) {
        state.isQuizCompleted = true;
        state.isTimeActive = false;
      }
    },

    answerQuestions: (state, action) => {
      const currentQuestion = state.questions[state.currentQuestionIndex];

      const isCorrect =
        action.payload.selectedOption === currentQuestion.correctAnswer;

      const answer = {
        questionId: currentQuestion.id,
        selectedOption: action.payload.selectedOption,
        isCorrect,
      };

      state.answers.push(answer);

      if (isCorrect) {
        state.score += 1;
      }

      state.showExplanation = true;
    },

    nextQuestion: (state) => {
      state.showExplanation = false;

      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.isQuizCompleted = true;
        state.isTimeActive = false;
      }
    },

    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
      state.showExplanation = false;

      // remove the answer for the current question if going back
      state.answers = state.answers.filter(
        (answer) =>
          answer.questionId !== state.questions[state.currentQuestionIndex].id
      );
      state.showExplanation = false;

      // recalculate score
      state.score = state.answers.filter((answer) => answer.isCorrect).length;
    },

    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.isQuizCompleted = false;
      state.answers = [];
      state.score = 0;
      state.timeLeft = 120;
      state.showExplanation = false;
      state.isTimeActive = false;
    },
  },
});

export const {
  setQuestions,
  startQuiz,
  decrementTimer,
  answerQuestions,
  nextQuestion,
  previousQuestion,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
