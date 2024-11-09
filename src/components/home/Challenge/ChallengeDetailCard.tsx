import { Card } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import { ChallengeType } from '@/types/Challenge';

import './ChallengeDetailCard.css';

interface ChallengeDetailCardProps {
  challenge: ChallengeType;
}

const ChallengeDetailCard = ({ challenge }: ChallengeDetailCardProps) => {
  const [maxHeight, setMaxHeight] = useState('100px');
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [challenge]);

  useEffect(() => {
    return () => setMaxHeight('100px');
  }, []);

  return (
    <Card ref={contentRef} className="challenge-detail-card" style={{ maxHeight: maxHeight }}>
      <h2>{`${challenge.district} / ${challenge.bigCategory}`}</h2>
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i}>star</div>
      ))}
    </Card>
  );
};

export default ChallengeDetailCard;
