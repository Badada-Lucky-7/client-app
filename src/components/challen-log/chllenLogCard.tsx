'use client';

import useProfile from '@/hooks/useProfile';
import { GatheringType } from '@/types/Gathering';
import { Button, Card } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import JoinCard from '../join-card/JoinCard';

interface GatheringResponse {
  gatherings: GatheringType;
  check: boolean;
}
const ChallenLogCard = () => {
  const { profile } = useProfile();

  const [gatheringData, setGatheringData] = useState<GatheringResponse[] | null>(null);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (!profile) {
      return;
    }
    axios
      .get<GatheringResponse[]>(`/api/gathering`, {
        params: {
          challengeId: profile.challengeId,
        },
        headers: {
          Authorization: `Bearer ${profile.accessToken}`,
        },
      })
      .then((res) => {
        if (!res.data) {
          return;
        }
        setGatheringData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [profile]);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{`Let's gathering`}</Button>
      {open && (
        <Card>
          <textarea value={text} onChange={(e) => setText(e.target.value)} style={{ width: '100%', height: '100px' }} />
          <Button
            onClick={async () => {
              if (!profile) {
                return;
              }
              await axios.post(
                `/api/gathering`,
                {
                  maxCount: 10,
                  text,
                },
                {
                  headers: {
                    Authorization: `Bearer ${profile.accessToken}`,
                  },
                }
              );
              setOpen(false);
            }}
          >
            {`Submit`}
          </Button>
        </Card>
      )}
      {gatheringData?.map((data) => (
        <JoinCard
          key={data.gatherings.id}
          id={data.gatherings.id}
          likeCount={data.gatherings.likeCount}
          maxCount={data.gatherings.maxCount}
          challengeId={data.gatherings.challengeId}
          text={data.gatherings.text}
          nickName={data.gatherings.nickName}
        />
      ))}
    </>
  );
};

export default ChallenLogCard;
