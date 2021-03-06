import Head from 'next/head';
import styles from '../../../styles/admin/Detail.module.css';
import SideBarMenu from '../../../components/admin/SideBarMenu';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import { useEffectOnce } from 'react-use';
import axios from 'axios';
import ShowMoreText from 'react-show-more-text';
import { Button } from '@material-ui/core';

export default function Home() {
  const router = useRouter();
  const id = router.query.id;
  const [detailsData, setDetailsData] = useState();

  useEffectOnce(() => {
    const getDetails = async () => {
      await axios
        .get('https://recruit-system.herokuapp.com/candidate-api/' + id)
        .then((response) => {
          setDetailsData(response.data);
        })
        .catch(() => {
          alert('Something went wrong');
          window.location.href = '/admin/results';
        });
    };
    getDetails();
  });

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
      <SideBarMenu />
      {detailsData && (
        <div className={styles.mainBlock}>
          <h1 className='pageTitle'>DETAILS</h1>
          <div className={styles.candidateInfoArea}>
            <p>Test Date : {detailsData.candidateAnswers[0].test_date}</p>
            <p>First Name : {detailsData.candidateAnswers[0].firstname}</p>
            <p>Last Name : {detailsData.candidateAnswers[0].lastname}</p>
            <p>
              Email :{' '}
              <a href={`mailto:${detailsData.candidateAnswers[0].email}`}>
                {detailsData.candidateAnswers[0].email}
              </a>
            </p>
            <p>
              Score : {detailsData.candidateAnswers[0].score} /{' '}
              {detailsData.candidateAnswers.length} Points
            </p>
          </div>
          <ul className={styles.resultArea}>
            <li className={[`row ` + styles.itemTitles]}>
              <div className='col-2'>Category</div>
              <div className='col-3'>Quiz</div>
              <div className='col-3'>Candidate Answer</div>
              <div className='col-3'>Correct Answer</div>
            </li>
            {detailsData.candidateAnswers.map((item, i) => (
              <li
                key={i}
                className={[
                  `row ` +
                    (item.is_correct === 'true'
                      ? styles.correctAns
                      : styles.wrongAns),
                ]}
              >
                <div className='col-2'>{item.category}</div>

                <div className='col-3'>
                  <ShowMoreText
                    lines={2}
                    more='Show more'
                    less='Show less'
                    truncatedEndingComponent={'... '}
                  >
                    {item.quiz_text}
                  </ShowMoreText>
                </div>
                <div className='col-3'>
                  <ShowMoreText
                    lines={2}
                    more='Show more'
                    less='Show less'
                    truncatedEndingComponent={'... '}
                  >
                    {item.choice}{' '}
                  </ShowMoreText>
                </div>
                <div className='col-3'>
                  {' '}
                  <ShowMoreText
                    lines={2}
                    more='Show more'
                    less='Show less'
                    truncatedEndingComponent={'... '}
                  >
                    {detailsData.correctAnswers[i].choice}{' '}
                  </ShowMoreText>
                </div>
              </li>
            ))}
          </ul>

          <Link href='../results'>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className='col-3 m-3'
            >
              BACK
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
