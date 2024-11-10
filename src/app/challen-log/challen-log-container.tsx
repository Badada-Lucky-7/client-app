'use client';

import ChallenLogCard from '@/components/challen-log/chllenLogCard';
import ReviewCard from '@/components/review-card/ReviewCard';
import useProfile from '@/hooks/useProfile';
import { BoardCommentType, BoardType } from '@/types/Board';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ChallengeLogContainer = () => {
  const { profile } = useProfile();

  const [board, setBoard] = useState<
    {
      board: BoardType;
      boardComments: BoardCommentType[];
    }[]
  >([]);

  const router = useRouter();
  //   const { district, bigCategory } = board[0]?.board;

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

        if (res.data.length === 0) {
          router.replace('/login');
          return;
        }
      });
  }, [profile, router]);

  return (
    <div className="challen-log-container">
      <div className="reviewCard">
        <div className="titlebar">
          <span className="title" style={{ fontSize: 17, fontWeight: 550 }}>
            {'Succeeded people in the challenge'}
          </span>
          {/* {district && bigCategory && <SetModal district={district} bigCategory={bigCategory} />} */}
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
