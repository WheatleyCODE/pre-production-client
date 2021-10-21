import type { NextPage } from 'next';
import { TrackList } from '@components';
import { useEffect } from 'react';
import { useActions } from '@hooks';
import s from '@s.pages/tracks/index.module.scss';
import { useRouter } from 'next/router';

const Tracks: NextPage = () => {
  const { fetchTracks } = useActions();
  const router = useRouter();
  useEffect(() => {
    fetchTracks(1, 0);
  }, []);

  return (
    <div className={s.center}>
      <div className={s.main}>
        <h1>Список треков</h1>
        <div onClick={() => router.push('/tracks/create')} className={s.load}>
          Загрузить трек
        </div>
        <TrackList />
      </div>
    </div>
  );
};

export default Tracks;
