import axios from "axios";
export async function getHistoryQuestion() {
  try {
    const response = await axios.get(
      "https://the-trivia-api.com/api/questions?categories=history&limit=5&difficulty=easy"
    );
    const questions = response.data.map(
      ({ question, correctAnswer, incorrectAnswers }) => ({
        question,
        answers: incorrectAnswers.concat(correctAnswer),
      })
    );

    return questions;
  } catch (error) {
    console.log(error);
  }
}
