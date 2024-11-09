'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import './JoinCard.css';

interface Props {
  token: string | null;
  content: string;
  userCount: number;
}

const JoinCard = ({ token, content, userCount }: Props) => {
  const Profile = () => {
    return (
      <div className="profileBox">
        <div className="profile">
          <img src="/asset/sampleImage.png" alt="profile_photo" className="photo" />
        </div>
        {token}
      </div>
    );
  };
  const [count, setCount] = useState(userCount);
  return (
    <div className="container">
      <Box>
        <Card variant="outlined" style={{ backgroundColor: 'pink', borderRadius: 25 }}>
          <React.Fragment>
            <CardContent>
              <Typography gutterBottom sx={{ fontSize: 20 }}>
                <Profile />
              </Typography>
              <Typography sx={{ fontSize: 15, padding: 1 }} component="div">
                {content}
              </Typography>
              <div className="join-button">
                <Typography sx={{ fontSize: 14, padding: 1 }}>({count}/6)</Typography>
                <CardActions>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={(e) => {
                      setCount(count + 1);
                      console.log(token);
                    }}
                  >{`Join`}</Button>
                </CardActions>
              </div>
            </CardContent>
          </React.Fragment>
        </Card>
      </Box>
    </div>
  );
};
export default JoinCard;
