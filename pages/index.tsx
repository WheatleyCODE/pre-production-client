import { useActions } from '@hooks';
import type { NextPage } from 'next';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const { checkAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);

  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

export default Home;
