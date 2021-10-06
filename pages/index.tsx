import type { NextPage } from 'next';
import s from '@s.pages/index.module.scss';

const Home: NextPage = () => {
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
