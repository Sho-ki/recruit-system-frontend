import styles from '../../../../styles/admin/Home.module.css';
import ShowMoreText from 'react-show-more-text';
import { useContext } from 'react';
import quizContext from '../../../../store/QuizContext';
import Router from 'next/router';

function Quiz({ quizInfo }) {
  const quizCtx = useContext(quizContext);
  const handler = () => {
    Router.push({
      pathname: 'editForm',
      query: quizInfo,
    });
  };

  return (
    <li
      className={[
        `row ${styles.quizList} ${
          quizInfo.is_active === 1 ? '' : styles.inactive
        }`,
      ]}
    >
      <div className='col-2'>
        <ShowMoreText
          lines={2}
          more='Show more'
          less='Show less'
          truncatedEndingComponent={'... '}
        >
          {quizInfo.category}
        </ShowMoreText>
      </div>

      <div className='col-5'>
        <ShowMoreText
          lines={2}
          more='Show more'
          less='Show less'
          truncatedEndingComponent={'... '}
        >
          <p>{quizInfo.quiz_text}</p>
        </ShowMoreText>
      </div>

      <div className='col m-0 row'>
        <div className={[`col-8`]}>
          <ShowMoreText
            lines={2}
            more='Show more'
            less='Show less'
            truncatedEndingComponent={'... '}
          >
            {quizInfo.choices}
          </ShowMoreText>
        </div>

        <div className={[`col-4 ${styles.icons}`]}>
          <div onClick={handler}>
            <i className={[`far fa-edit ${styles.edit}`]}></i>
          </div>

          <i
            className={[`fa fa-trash ${styles.delete}`]}
            onClick={async () => {
              const { isValidDelete, candidatesUsingQuiz } =
                await quizCtx.deleteQuizHandler(quizInfo.id);

              if (!isValidDelete) {
                alert(
                  `Cannot delete. This quiz is being used by candidate ID ${candidatesUsingQuiz}`
                );
              }
            }}
          ></i>
        </div>
      </div>
    </li>
  );
}

export default Quiz;
