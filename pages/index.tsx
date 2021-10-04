import { useActions } from '@hooks';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import s from '@s.pages/index.module.scss';

const Home: NextPage = () => {
  const { checkAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);

  // ! Добавить проверку на ативированнй аккаунт
  return (
    <div className={s.main}>
      <div className={s.title}>
        <h1>Spotify Clone</h1>
        <h2>Эта страница должна заитересовать пользователя, да?</h2>
      </div>
    </div>
  );
};

export default Home;
