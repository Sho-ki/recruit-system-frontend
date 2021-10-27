import Head from 'next/head';
import { Button, Paper } from '@material-ui/core';
import styles from '../../../styles/admin/Home.module.css';
import SideBarMenu from '../../../components/admin/SideBarMenu';
import Link from 'next/link';
import Quizes from '../../../components/admin/Quizes/List/Quizes';
import useQuiz from '../../../hooks/useQuiz';
import QuizContext from '../../../store/QuizContext';

export default function Home() {
  const { quizes, deleteQuizHandler } = useQuiz();

  return (
    <QuizContext.Provider value={{ quizes, deleteQuizHandler }}>
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
      <SideBarMenu />

      <div className={styles.mainBlock}>
        <h1 className='pageTitle'>HOME</h1>
        <Link href='addForm'>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className='col-3 m-3'
          >
            Add
          </Button>
        </Link>

        <Quizes />
      </div>
    </QuizContext.Provider>
  );
}
