import CandidatesQuiz from "../../components/candidate/CandidatesQuizForm";
import { useForm, FormProvider } from "react-hook-form";
import styles from "../../styles/candidate/Test.module.css";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { Button, Paper } from "@material-ui/core";

function QuizForm({ activeQuizes, onSubmit }) {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Paper>
        <form
          className={styles.quizForm}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {activeQuizes.map((quiz, i) => (
            <FormControl component="fieldset" key={i} className="col">
              <h5>Quiz {i + 1}.</h5>
              <RadioGroup name="radio-buttons-group">
                <CandidatesQuiz
                  key={i}
                  idx={i}
                  quizId={quiz.id}
                  quizText={quiz.quiz_text}
                  optionsList={quiz.options_list}
                  isCorrectList={quiz.is_correct_list}
                />
              </RadioGroup>
            </FormControl>
          ))}
          <div className="text-right">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className="col-3 mb-5"
            >
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    </FormProvider>
  );
}

export default QuizForm;
