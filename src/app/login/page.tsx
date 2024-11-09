import Link from 'next/link';

import Form from '@/components/login/Form';
import session from '@/helpers/session';

const Login = () => {
  const token = session.get();
  return (
    <div>
      {'로그인 페이지'}
      <Form />
      <span>{'아직 회원이 아니신가요? '}</span>
      <Link href="/sign-up">{'회원가입'}</Link>
    </div>
  );
};

export default Login;
