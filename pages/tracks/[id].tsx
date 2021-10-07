import { useActions, useTypedSelector } from '@hooks';
import { NextPage } from 'next';
import PlayArrow from '@material-ui/icons/PlayArrow';
import s from '@s.pages/tracks/[id].module.scss';
import { API_URL } from '@http';
import { CommentList } from '@components';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const TrackPage: NextPage = () => {
  const { currentTrack } = useTypedSelector((state) => state.track);
  const router = useRouter();
  const { fetchCurrentTrack } = useActions();
  useEffect(() => {
    fetchCurrentTrack('615d7871d539150fc48dc3c3');
  }, []);
  return (
    <div className={s.center}>
      <div className={s.main}>
        <div onClick={() => router.push('/tracks')} className={s.back}>
          {'< Назад'}
        </div>
        <div className={s.info}>
          <div className={s.img}>
            <img src={`${API_URL}/${currentTrack.picture}`} alt="picture" />
          </div>
          <div className={s.title}>
            <div className={s.artist}>{currentTrack.artist}</div>
            <div className={s.name}>{currentTrack.name}</div>
            <div className={s.listeners}>Прослушиваний: {currentTrack.listens}</div>
          </div>
          <div className={s.play}>
            <div className={s.arrow}>
              <PlayArrow />
            </div>
          </div>
        </div>
        <hr className={s.line} />
        <div className={s.text}>
          <pre>{currentTrack.text}</pre>
        </div>
        <hr className={s.line} />
        <div className={s.comments}>
          <CommentList comments={currentTrack.comments} />
        </div>
      </div>
    </div>
  );
};

export default TrackPage;
