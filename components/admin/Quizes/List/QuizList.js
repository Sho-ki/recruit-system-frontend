import { useContext } from "react";
import QuizContext from "../../../../store/QuizContext";
import Quiz from "./Quiz";

function QuizList() {
  const ctx = useContext(QuizContext);

  const allQuizes = ctx.quizes;

  return (
    <>
      {allQuizes &&
        allQuizes.map((quiz) => <Quiz key={quiz.id} quizInfo={quiz} />)}
    </>
  );
}

export default QuizList;
