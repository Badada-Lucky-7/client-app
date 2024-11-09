'use client';

import { GatheringType } from '@/types/Gathering';
import axios from 'axios';
import { useEffect, useState } from 'react';
import JoinCard from '../join-card/JoinCard';

interface GateringProps {
  gatherings: GatheringType;
}

const ChallenLogCard = ({ gatherings }: GateringProps) => {
  const [gathering, setgathering] = useState<GatheringType | null>(null);
  useEffect(() => {
    axios
      .get(`/api/challe-log`, {
        params: {
          id: gatherings.id,
          challengeId: gatherings.challengeId,
          likeCount: gatherings.likeCount,
          maxCount: gatherings.maxCount,
          text: gatherings.text,
          nickName: gatherings.nickName,
        },
      })
      .then((res) => {
        setgathering(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [
    gatherings.id,
    gatherings.challengeId,
    gatherings.likeCount,
    gatherings.nickName,
    gatherings.maxCount,
    gatherings.text,
  ]);
  return (
    <>
      <JoinCard
        id={gatherings.id}
        nickName={gatherings.nickName}
        text={gatherings.text}
        challengeId={gatherings.challengeId}
        maxCount={gatherings.maxCount}
        likeCount={gatherings.likeCount}
      />
    </>
  );
};

export default ChallenLogCard;
