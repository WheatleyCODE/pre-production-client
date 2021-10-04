import type { NextPage } from 'next';
import { useEffect } from 'react';
import { RegisterForm } from '@components';
import { useActions } from '@hooks';
import s from '@s.pages/Register.module.scss';

const Register: NextPage = () => {
  const { setTestAc, checkAuth } = useActions();

  useEffect(() => {
    setTestAc(['arr', 'arr', 'marr']);
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
