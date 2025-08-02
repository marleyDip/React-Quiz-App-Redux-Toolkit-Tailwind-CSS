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
      state.timeLeft = 300;
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
  },
});

export const { setQuestions, startQuiz, decrementTimer } = quizSlice.actions;

export default quizSlice.reducer;
