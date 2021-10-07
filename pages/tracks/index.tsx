import type { NextPage } from 'next';
import { TrackList } from '@components';
import { useEffect } from 'react';
import { useActions } from '@hooks';
import s from '@s.pages/tracks/index.module.scss';

const Tracks: NextPage = () => {
  const { fetchTracks } = useActions();
  useEffect(() => {
    fetchTracks(1, 0);
  }, []);

  return (
    <div className={s.center}>
      <div className={s.main}>
        <h1>Список треков</h1>
        <TrackList />
      </div>
    </div>
  );
};

export default Tracks;
