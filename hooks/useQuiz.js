import axios from 'axios';
import { useState } from 'react';
import { useEffectOnce } from 'react-use';

function useQuiz(props) {
  const [quizes, setQuizes] = useState();

  useEffectOnce(async () => {
    await axios
      .get('https://recruit-system.herokuapp.com/quiz-api')
      .then((res) => {
        setQuizes(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  const deleteQuizHandler = async (id) => {
    let isValidDelete = true;
    let candidatesUsingQuiz = [];
    await axios
      .delete('https://recruit-system.herokuapp.com/quiz-api/' + id)
      .then((res) => {
        if (!res.data.isValidDelete) {
          isValidDelete = false;
          candidatesUsingQuiz = res.data.candidatesUsingQuiz;
          return;
        }

        setQuizes(
          quizes.filter((item) => {
            return item.id !== id;
          })
        );
      })
      .catch((e) => {
        console.log(e);
      });
    return { isValidDelete, candidatesUsingQuiz };
  };

  const onAddSubmit = async (data) => {
    await axios
      .post('https://recruit-system.herokuapp.com/quiz-api', {
        category: data.category,
        quizText: data.quizText,
        isActive: data.isActive,
        isCorrect: data.isCorrect,
        options: data.options,
        indexNumber: data.indexNumber,
      })
      .then((res) => {
        window.location = '/admin/home';
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onEditSubmit = async (data) => {
    await axios
      .put(
        'https://recruit-system.herokuapp.com/quiz-api/' + props.editQuizId,
        {
          category: data.category,
          quizText: data.quizText,
          isActive: data.isActive,
          isCorrect: data.isCorrect,
          options: data.options,
          indexNumber: data.indexNumber,
        }
      )
      .then(() => {
        window.location = '/admin/home';
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return { quizes, deleteQuizHandler, onAddSubmit, onEditSubmit };
}

export default useQuiz;
