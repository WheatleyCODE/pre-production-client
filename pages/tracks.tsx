import type { NextPage } from 'next';
import { TrackList } from '@components';
import s from '@s.pages/tracks.module.scss';

const Tracks: NextPage = () => {
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
