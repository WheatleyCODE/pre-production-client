import type { NextPage } from 'next';
import { TrackList } from '@components';
import { useEffect } from 'react';
import { useActions, useTypedSelector } from '@hooks';
import s from '@s.pages/tracks/index.module.scss';
import { useRouter } from 'next/router';
import { Button } from '@components/UI';

const Tracks: NextPage = () => {
  const { fetchTracks } = useActions();
  const { isAuth } = useTypedSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    fetchTracks(1, 0);
  }, []);

  return (
    <div className={s.center}>
      <div className={s.main}>
        <h1>Список треков</h1>
        {isAuth && (
          <Button
            onClickHandler={() => router.push('/tracks/create')}
            text="Загрузить трек"
            buttonStyle="default"
          />
        )}
        <TrackList />
      </div>
    </div>
  );
};

export default Tracks;
