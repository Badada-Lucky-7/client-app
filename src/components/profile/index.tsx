'use client';

import useProfile from '@/hooks/useProfile';
import { Card, Typography } from '@mui/material';
import Image from 'next/image';

import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';

type BadgeType = { badge: string; imageUrl: string };

const ProfileContainer = () => {
  const [bagde, setBadge] = useState<BadgeType[]>([]);
  const { profile } = useProfile();

  useEffect(() => {
    if (!profile) {
      return;
    }

    axios('/api/auth/badge', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${profile.accessToken}`,
      },
    }).then((res) => {
      if (!res.data) {
        return;
      }

      setBadge(res.data);
    });
  }, [profile]);
  return (
    <div className="profile">
      <Card
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 12,
          padding: 24,
          flex: 1,
          maxWidth: 400,
        }}
      >
        <Image src={'/asset/profile.svg'} alt={'profile'} width={400} height={340} />
        <Typography variant="h4">{profile?.email}</Typography>
      </Card>
      <Card style={{ padding: 24, flex: 1, height: '100%', maxWidth: 400 }}>
        <Typography variant="h4" style={{ textAlign: 'center' }}>
          {'Badges'}
        </Typography>
        {bagde.map((badge) => (
          <Card
            key={badge.badge}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: 12,
              padding: 24,
            }}
          >
            <Image src={badge.imageUrl} alt={badge.badge} width={100} height={200} />
            <Typography variant="h5">{badge.badge}</Typography>
          </Card>
        ))}
      </Card>
    </div>
  );
};

export default ProfileContainer;
