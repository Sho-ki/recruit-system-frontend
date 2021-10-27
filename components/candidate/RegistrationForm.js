import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { Button, Paper } from "@material-ui/core";

function Registration({ onSubmitCandidateInfo, isSubmitCandidateInfo }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmitCandidateInfo)}>
      <Paper className="d-flex flex-column p-5 align-items-center">
        <h2>Your Information</h2>
        <TextField
          label="First Name"
          variant="standard"
          {...register("firstname", {
            required: true,
            max: 0,
            min: 1,
            maxLength: 30,
          })}
          InputProps={{
            readOnly: isSubmitCandidateInfo ? true : false,
          }}
          className="col-4 m-3"
        />
        <TextField
          label="Last Name"
          variant="standard"
          {...register("lastname", {
            required: true,
            max: 0,
            min: 1,
            maxLength: 30,
          })}
          InputProps={{
            readOnly: isSubmitCandidateInfo ? true : false,
          }}
          className="col-4 m-3"
        />
        <TextField
          type="email"
          label="Email"
          variant="standard"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          InputProps={{
            readOnly: isSubmitCandidateInfo ? true : false,
          }}
          className="col-4 m-3"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitCandidateInfo}
          className="col-4 m-3"
        >
          Start Quiz
        </Button>
      </Paper>
    </form>
  );
}

export default Registration;
