import React from "react";
import { useFormContext } from "react-hook-form";
import Radio from "@mui/material/radio";

import FormControlLabel from "@mui/material/FormControlLabel";

function CandidatesQuiz({ quizText, optionsList, quizId }) {
  const { register } = useFormContext();

  optionsList = optionsList.split("  /  ");
  return (
    <>
      <h4>{quizText}</h4>

      {optionsList.map((option, i) => (
        <FormControlLabel
          {...register(`${quizId}`, { required: true })}
          control={<Radio />}
          value={i}
          label={option}
          key={i}
        />
      ))}
    </>
  );
}

export default CandidatesQuiz;
