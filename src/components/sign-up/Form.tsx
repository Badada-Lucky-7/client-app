'use client';

import { validateEmail, validatePassword } from '@/utils/regex';
import axios from 'axios';
import { useState } from 'react';
import TextInput from '../TextInput';
import './Form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [nickName, setNickName] = useState('');
  const [valid, setValid] = useState(1);

  function EmailConfirm() {
    if (!validateEmail(email)) {
      alert('Confirm your Email!');
      setValid(0);
    } else {
      setValid(1);
      console.log(email);
    }
  }
  function PwConfirm() {
    if (!validatePassword(pw)) {
      alert('Confirm your Password!');
      setValid(0);
    } else if (!(pw == pwConfirm)) {
      alert('pw != pwConfirm');
      setValid(0);
    } else {
      setValid(1);
      console.log(pw);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(email, pw);
        if (valid == 1) {
          axios.post('/api/auth/sign-up', { email: email, password: pw });
          console.log(true);
        } else {
          console.log(false);
        }
      }}
    >
      <TextInput placeholder="nickname" value={nickName} onChange={setNickName} />
      <TextInput placeholder="email address" value={email} onChange={setEmail} />
      <input type="button" value="이메일 확인" onClick={EmailConfirm} />
      <TextInput placeholder="password" value={pw} onChange={setPw} type="password" />
      <TextInput placeholder="password confirmation" value={pwConfirm} onChange={setPwConfirm} type="password" />
      <input type="button" value="비밀번호 확인" onClick={PwConfirm} />
      <p>
        <input type="submit" />
      </p>
    </form>
  );
};

export default Form;
