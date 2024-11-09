'use client';

import useProfile from '@/hooks/useProfile';
import { MissionType } from '@/types/Challenge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MissionCard = () => {
  const searchParams = useSearchParams();

  const { profile } = useProfile();

  const district = searchParams.get('district');
  const bigCategory = searchParams.get('bigCategory');

  const [mission, setMission] = useState<MissionType | null>(null);

  useEffect(() => {
    if (!profile || !district || !bigCategory) {
      return;
    }
    axios
      .get('/api/mission', {
        params: {
          district,
          bigCategory,
        },
        headers: {
          Authorization: `Bearer ${profile.accessToken}`,
        },
      })
      .then((res) => {
        if (!res.data) {
          return;
        }

        setMission(res.data);
      });
  }, [district, bigCategory, profile]);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              {`Challen-Day | Hello User ${profile?.email}!`}
            </Typography>
            <Typography variant="h6" component="div">
              {`Today's challenge that you selected [${district}/${bigCategory}] is ${'this'}!`}
            </Typography>
            <Typography variant="h6">
              {`Good Luck!`}
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{`Learn More`}</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
};
export default MissionCard;
