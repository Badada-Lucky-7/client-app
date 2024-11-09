'use client';

import { Card } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import { ChallengeType, DetailChallengeType } from '@/types/Challenge';

import axios from 'axios';
import Image from 'next/image';
import './ChallengeDetailCard.css';

interface ChallengeDetailCardProps {
  challenge: ChallengeType;
}

const ChallengeDetailCard = ({ challenge }: ChallengeDetailCardProps) => {
  const [maxHeight, setMaxHeight] = useState('100px');
  const [detailChallenge, setDetailChallenge] = useState<DetailChallengeType | null>(null);

  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [challenge]);

  useEffect(() => {
    return () => setMaxHeight('100px');
  }, []);

  useEffect(() => {
    axios
      .get(`/api/challenge/attractions-by-district-category`, {
        params: { district: challenge.district, bigCategory: challenge.bigCategory },
      })
      .then((res) => {
        setDetailChallenge(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [challenge.bigCategory, challenge.district]);

  return (
    <Card ref={contentRef} className="challenge-detail-card" style={{ maxHeight: maxHeight }}>
      <h2>{`${challenge.district} / ${challenge.bigCategory}`}</h2>
      <h3>{challenge.text}</h3>
      <Image src={detailChallenge?.imageURL ?? ''} alt="challenge" width={400} height={400} />
      <div className="mission">
        <span>{detailChallenge?.mission}</span>
        <ul>
          {detailChallenge?.attractions.map((attraction) => <li key={attraction.id}>{attraction.attraction}</li>)}
        </ul>
      </div>
    </Card>
  );
};

export default ChallengeDetailCard;
