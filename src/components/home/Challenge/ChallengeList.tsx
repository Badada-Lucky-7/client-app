'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

import MultiSelectBox from '@/components/MultiSelectBox';
import { BIG_CATEGORY, GOGUN } from '@/constants/challenge';
import { ChallengeType } from '@/types/Challenge';
import ChallengeCard from './ChallengeCard';
import ChallengeDetailCard from './ChallengeDetailCard';

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
    <div className="challenge-list-container">
      <div className="chanllenge-option">
        <MultiSelectBox title={'지역 선택'} options={GOGUN} defaultValue={['전체']} />
        <MultiSelectBox title={'카테고리 선택'} options={BIG_CATEGORY} defaultValue={['전체']} />
      </div>
      <ul className="challenge-list">
        {challenList.map((challenge) => {
          if (selected?.district === challenge.district) {
            return <ChallengeDetailCard key={challenge.district} challenge={challenge} />;
          }
          return (
            <ChallengeCard
              key={challenge.district}
              challenge={challenge}
              onClick={() => {
                setSelected(challenge);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ChallengeList;
