import { useTypedSelector } from '@hooks';
import { NextPage } from 'next';
import PlayArrow from '@material-ui/icons/PlayArrow';
import s from '@s.pages/tracks/[id].module.scss';
import { API_URL } from '@http';

const TrackPage: NextPage = () => {
  const { tracks } = useTypedSelector((state) => state.track);
  const testTreck = tracks[2];
  console.log(testTreck);
  return (
    <div className={s.center}>
      <div className={s.main}>
        <div className={s.back}>{'< Назад'}</div>
        <div className={s.info}>
          <div className={s.img}>
            <img src={`${API_URL}/${testTreck.picture}`} alt="picture" />
          </div>
          <div className={s.title}>
            <div className={s.artist}>{testTreck.artist}</div>
            <div className={s.name}>{testTreck.name}</div>
            <div className={s.listeners}>Прослушиваний: {testTreck.listens}</div>
          </div>
          <div className={s.play}>
            <div className={s.arrow}>
              <PlayArrow />
            </div>
          </div>
        </div>
        <hr className={s.line} />
        <div className={s.text}>
          <pre>{testTreck.text}</pre>
        </div>
        <hr className={s.line} />
        <div className={s.comments}>comment</div>
      </div>
    </div>
  );
};

export default TrackPage;
