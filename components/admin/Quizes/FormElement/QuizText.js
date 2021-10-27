import { useState } from "react";
import { useFormContext } from "react-hook-form";

function QuizText({ quizText, isValidEdit }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [inputValue, setInputValue] = useState(quizText ? quizText : "");

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="form-group">
      <h3>
        <label className="col-md-4 control-label" htmlFor="quiz_text">
          Quiz
        </label>
      </h3>
      <div className="col-md-10">
        {errors.quizText?.message}
        <input
          id="quiz_text"
          className="form-control input-md mb-4"
          type="text"
          placeholder="Quiz"
          {...register("quizText", { required: "Required" })}
          value={inputValue}
          onChange={onChangeHandler}
          readOnly={!isValidEdit}
        />
      </div>
    </div>
  );
}

export default QuizText;
