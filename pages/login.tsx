import type { NextPage } from 'next';
import { LoginForm } from '@components';
import s from '@s.pages/Login.module.scss';

const Login: NextPage = () => {
  return (
    <div className={s.main}>
      <LoginForm />
    </div>
  );
};

export default Login;
