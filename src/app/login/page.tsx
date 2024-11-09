import JoinCard from '@/components/join-card/JoinCard';
import Form from '@/components/login/Form';
import session from '@/helpers/session';

const Login = () => {
  const token = session.get();
  return (
    <div>
      {'로그인 페이지'} <Form />
      <br />
      <JoinCard
        token={token}
        content={'오늘 서울시립대에서 18:00시에 같이 밥 먹고 미션 할 사람 구해요!!'}
        userCount={1}
      />
    </div>
  );
};

export default Login;
