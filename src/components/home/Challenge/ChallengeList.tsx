'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

import { ChallengeType } from '@/types/Challenge';
import ChallengeCard from './ChallengeCard';

import './ChallengeList.css';

const ChallengeList = () => {
  const [challenList, setChallengeList] = useState<ChallengeType[]>([]);
  const [selected, setSelected] = useState<ChallengeType | null>(null);

  useEffect(() => {
    axios
      .get('/api/challenge')
      .then((res) => {
        setChallengeList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <h1>Challenge List</h1>
      <ul className="challenge-list">
        {challenList.map((challenge) => {
          if (selected?.district === challenge.district) {
            // selected challenge card
            return <div key={challenge.district}>{challenge.district}</div>;
          }
          return (
            <ChallengeCard key={challenge.district} challenge={challenge} onClick={() => setSelected(challenge)} />
          );
        })}
      </ul>
    </div>
  );
};

export default ChallengeList;
