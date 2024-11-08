'use client';

import { useState } from 'react';
import './Form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  return (
    <div>
      <form className="sign-up-form" action="">
        <input />
      </form>
    </div>
  );
};

export default Form;
