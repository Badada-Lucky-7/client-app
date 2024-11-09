import { ChallengeType } from '@/types/Challenge';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useChallenge = (district: string, category: string) => {
  const [challenge, setChallenge] = useState<ChallengeType[]>([]);

  useEffect(() => {
    axios
      .get('/api/challenge', {
        params: {
          district,
          category,
        },
      })
      .then((res) => {
        setChallenge(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [district, category]);

  return challenge;
};

export default useChallenge;
