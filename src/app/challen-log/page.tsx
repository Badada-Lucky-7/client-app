import JoinCard from '@/components/join-card/JoinCard';
import { GatheringType } from '@/types/Gathering';

interface GateringProps {
  gatherings: GatheringType;
}

const ChallenLog = ({ gatherings }: GateringProps) => {
  return (
    <div>
      <JoinCard
        id={gatherings.id}
        nickName={gatherings.nickName}
        text={gatherings.text}
        challengeId={gatherings.challengeId}
        maxCount={gatherings.maxCount}
        likeCount={gatherings.likeCount}
      />
    </div>
  );
};
export default ChallenLog;
