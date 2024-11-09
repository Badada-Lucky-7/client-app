'use client';

import { useEffect, useState } from 'react';

import { default as sessionInstance } from '@/helpers/session';
import { ProfileType } from '@/types/Auth';
import axios from 'axios';

const useProfile = () => {
  const [profile, setProfile] = useState<ProfileType | null>(null);

  useEffect(() => {
    const accessToken = sessionInstance.get();

    if (!accessToken) {
      return;
    }

    axios.get('/api/auth/profile').then((res) => {
      if (!res.data) {
        return;
      }

      setProfile({
        ...res.data,
        accessToken,
      });
    });
  }, []);

  return profile;
};

export default useProfile;
