import Head from "next/head";
import Category from "../../../components/admin/Quizes/FormElement/Category";
import IsActive from "../../../components/admin/Quizes/FormElement/IsActive";
import QuizText from "../../../components/admin/Quizes/FormElement/QuizText";
import Options from "../../../components/admin/Quizes/FormElement/Options";
import IndexNumber from "../../../components/admin/Quizes/FormElement/IndexNumber";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";
import styles from "../../../styles/admin/Form.module.css";
import { Button } from "@material-ui/core";
import useQuiz from "../../../hooks/useQuiz";

function AddForm() {
  const methods = useForm({
    defaultValues: {
      options: [
        { options: "" },
        { options: "" },
        { options: "" },
        { options: "" },
      ],
    },
  });

  const { onAddSubmit } = useQuiz();

  return (
    <>
      <Head>
        <title>Recruite Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <FormProvider {...methods}>
        <div className={`container ${styles.formField}`}>
          <form onSubmit={methods.handleSubmit(onAddSubmit)}>
            <h1 className="pageTitle">Create New Quiz</h1>
            <Category />
            <IsActive />
            <QuizText isValidEdit={true} />
            <Options isValidEdit={true} />
            <IndexNumber />

            <div className={`d-flex justify-content-between mb-5`}>
              <Link href="/admin/home" className="col-2">
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  className="col-3 m-3"
                >
                  Cancel
                </Button>
              </Link>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="col-4 m-3"
              >
                Add
              </Button>
            </div>
          </form>
        </div>
      </FormProvider>
    </>
  );
}

export default AddForm;
