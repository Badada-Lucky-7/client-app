'use client';

import ChallenLogCard from '@/components/challen-log/chllenLogCard';
import ReviewCard from '@/components/review-card/ReviewCard';
import SetModal from '@/components/write/setModal';
import useProfile from '@/hooks/useProfile';
import { BoardCommentType, BoardType } from '@/types/Board';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ChallengeLogContainer = () => {
  const { profile } = useProfile();
  const param = useSearchParams();

  const district = param.get('district');
  const bigCategory = param.get('bigCategory');

  const [board, setBoard] = useState<
    {
      board: BoardType;
      boardComments: BoardCommentType[];
    }[]
  >([]);

  const router = useRouter();

  console.log(board);

  useEffect(() => {
    if (!profile) {
      return;
    }
    axios
      .get('/api/boards', {
        headers: {
          Authorization: `Bearer ${profile.accessToken}`,
        },
      })
      .then((res) => {
        setBoard(res.data);
      });
  }, [profile, router]);

  return (
    <div className="challen-log-container">
      <div className="reviewCard">
        <div className="titlebar">
          <span className="title" style={{ fontSize: 17, fontWeight: 550 }}>
            {'Succeeded people in the challenge'}
          </span>
          {<SetModal district={district} bigCategory={bigCategory} />}
        </div>
        <ReviewCard board={board} />
      </div>
      <div className="logCard">
        <ChallenLogCard />
      </div>
    </div>
  );
};

export default ChallengeLogContainer;
