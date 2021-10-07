import type { NextPage } from 'next';
import { useEffect } from 'react';
import { RegisterForm } from '@components';
import { useActions } from '@hooks';
import s from '@s.pages/Register.module.scss';

const Register: NextPage = () => {
  const { checkAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);
  return (
    <div className={s.main}>
      <RegisterForm />
    </div>
  );
};

export default Register;
