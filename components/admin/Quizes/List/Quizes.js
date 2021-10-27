import QuizList from "./QuizList";
import styles from "../../../../styles/admin/Home.module.css";

function Quizes() {
  return (
    <ul className={styles.quizArea}>
      <li className={[`row ${styles.itemTitles}`]}>
        <div className="col-2">Category</div>
        <div className="col-5">Quiz</div>
        <div className="col">Options</div>
      </li>
      <QuizList />
    </ul>
  );
}

export default Quizes;
