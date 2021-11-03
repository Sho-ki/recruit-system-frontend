import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Radio } from '@material-ui/core';

import FormControlLabel from '@mui/material/FormControlLabel';

function CandidatesQuiz({ quizText, optionsList, quizId }) {
  const { register } = useFormContext();
  const [checkNum, setCheckNum] = useState();

  optionsList = optionsList.split('  /  ');

  const onChangeHandler = (e) => {
    setCheckNum(Number(e.target.value));
  };
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
          onChange={onChangeHandler}
          checked={checkNum === i}
        />
      ))}
    </>
  );
}

export default CandidatesQuiz;
