'use client';

import session from '@/helpers/session';
import axios from 'axios';
import { useState } from 'react';
import TextInput from '../TextInput';
import './Form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(email, pw);
        axios
          .post('/api/auth/sign-in', { email: email, password: pw }, { withCredentials: true })
          .then((res) => {
            session.set(JSON.stringify(res.data.accessToken));
          })
          .catch((e) => {
            if (e.status === 403) {
              console.log(e.code);
            }
          });
      }}
    >
      <TextInput placeholder="Email" value={email} onChange={setEmail} />
      <TextInput placeholder="password" value={pw} onChange={setPw} type="password" />
      <p>
        <input type="submit" />
      </p>
    </form>
  );
};

export default Form;
