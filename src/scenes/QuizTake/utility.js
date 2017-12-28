export const initialQuizState = (quiz) => ({
  ...quiz,
  questions: quiz.questions.map((question) => ({
    ...question,
    selected: null,
  }))
})
