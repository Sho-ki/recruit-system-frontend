import axios from 'axios';
import { useState } from 'react';
import { useEffectOnce } from 'react-use';

function useCandidate() {
  const [candidateList, setCandidateList] = useState();

  useEffectOnce(() => {
    const getCandidatesResult = async () => {
      const response = await axios.get(
        'https://recruit-system.herokuapp.com/candidate-api'
      );

      setCandidateList(response.data);
    };
    getCandidatesResult();
  });

  const deleteCandidateHandler = async (id) => {
    await axios
      .delete('https://recruit-system.herokuapp.com/candidate-api/' + id)
      .then((res) => {
        setCandidateList(
          candidateList.filter((candidate) => {
            return candidate.id !== id;
          })
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return {
    candidateList,
    deleteCandidateHandler,
  };
}

export default useCandidate;
