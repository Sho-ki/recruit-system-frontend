import Head from 'next/head';
import Category from '../../../components/admin/Quizes/FormElement/Category';
import IsActive from '../../../components/admin/Quizes/FormElement/IsActive';
import QuizText from '../../../components/admin/Quizes/FormElement/QuizText';
import Options from '../../../components/admin/Quizes/FormElement/Options';
import IndexNumber from '../../../components/admin/Quizes/FormElement/IndexNumber';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLocation } from 'react-use';
import { useState } from 'react';
import axios from 'axios';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffectOnce } from 'react-use';
import styles from '../../../styles/admin/Form.module.css';
import { Button } from '@material-ui/core';

import useQuiz from '../../../hooks/useQuiz';

function EditForm() {
  const router = useRouter();
  const quizInfo = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [isValidEdit, setIsValidEdit] = useState();
  const [candidatesUsingQuiz, setCandidatesUsingQuiz] = useState();

  let defaultValueArr = String(quizInfo.choices)
    .split('  /  ')
    .map((option) => {
      return { options: option };
    });

  useEffectOnce(async () => {
    try {
      const res = await axios.get(
        'https://recruit-system.herokuapp.com/quiz-api/' + quizInfo.id
      );
      const data = res.data;

      setIsValidEdit(data.isValidEdit);
      setCandidatesUsingQuiz(data.candidatesUsingQuiz);
      setIsLoading(false);
    } catch (e) {
      alert('Something went wrong');
      window.location.href = '/admin/home';
    }
  });

  const methods = useForm({
    defaultValues: {
      options: defaultValueArr,
    },
  });

  const { onEditSubmit } = useQuiz({ editQuizId: quizInfo.id });

  return (
    <>
      <Head>
        <title>Recruit Test</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css'
          integrity='sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
          integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
          crossOrigin='anonymous'
        />
      </Head>
      {isLoading && <p>Loading...</p>}
      {!isLoading && defaultValueArr.length > 0 && (
        <FormProvider {...methods}>
          <div className={`container ${styles.formField}`}>
            <form onSubmit={methods.handleSubmit(onEditSubmit)}>
              <h1 className='pageTitle'>Update Quiz</h1>
              {candidatesUsingQuiz.length > 0 && (
                <p style={{ color: 'red' }}>
                  This quiz is being used by candidate ID{' '}
                  {candidatesUsingQuiz.join(',')}
                </p>
              )}

              <>
                <Category category={quizInfo.category} />
                <IsActive isActive={quizInfo.is_active} />
                <QuizText
                  quizText={quizInfo.quiz_text}
                  isValidEdit={isValidEdit}
                />
                <Options
                  isCorrect={quizInfo.is_correct}
                  isValidEdit={isValidEdit}
                />
                <IndexNumber indexNumber={quizInfo.index_number} />
              </>

              <div className={`d-flex justify-content-between mb-5`}>
                <Link href='/admin/home' className='col-2'>
                  <Button
                    type='submit'
                    variant='outlined'
                    color='primary'
                    className='col-3 m-3'
                  >
                    Cancel
                  </Button>
                </Link>

                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  className='col-4 m-3'
                >
                  Update
                </Button>
              </div>
            </form>
          </div>
        </FormProvider>
      )}
    </>
  );
}

export default EditForm;
