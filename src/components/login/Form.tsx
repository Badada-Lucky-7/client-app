'use client';

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
          .then((response) => {
            const accessToken: string = response.data.accessToken;
            console.log('Access Token:', accessToken);
          })
          .catch((e) => console.log(e));
      }}
    >
      <TextInput placeholder="email address" value={email} onChange={setEmail} />
      <TextInput placeholder="password" value={pw} onChange={setPw} type="password" />
      <p>
        <input type="submit" />
      </p>
    </form>
  );
};

export default Form;
