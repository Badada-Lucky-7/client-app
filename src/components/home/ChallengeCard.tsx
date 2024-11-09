import { ChallengeType } from '@/types/Challenge';
import { Card } from '@mui/material';

interface ChallengeCardProps {
  challenge: ChallengeType;
}

const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  return (
    <Card>
      <h2>{challenge.district}</h2>
      <p>{challenge.bigCategory}</p>
    </Card>
  );
};

export default ChallengeCard;
