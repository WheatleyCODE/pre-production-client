import type { NextPage } from 'next';
import { useEffect } from 'react';
import { LoginForm } from '@components';
import { useActions, useTypedSelector } from '@hooks';

const Home: NextPage = () => {
  const { test } = useTypedSelector((state) => state.player);
  const { setTestAc, checkAuth } = useActions();

  useEffect(() => {
    setTestAc(['arr', 'arr', 'marr']);
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);
  return (
    <>
      <h1>Hello TEST!</h1>
      <pre>{test.join(' ')}</pre>
      <LoginForm />
    </>
  );
};

export default Home;
