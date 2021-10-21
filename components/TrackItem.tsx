import { FC } from 'react';
import s from '@s.components/TrackItem.module.scss';
import PlayArrow from '@material-ui/icons/PlayArrow';
import RestoreFromTrash from '@material-ui/icons/RestoreFromTrash';
import Pause from '@material-ui/icons/Pause';
import { ITrack } from '@t';
import { API_URL } from '@http';
import { useRouter } from 'next/router';
import { useTypedSelector } from '@hooks';

export interface ITrackItemProps {
  track: ITrack;
  play: boolean;
}

export const TrackItem: FC<ITrackItemProps> = ({ track, play }) => {
  const router = useRouter();
  const { isAuth } = useTypedSelector((state) => state.user);

  const onClickHandler = () => {
    router.push(`/tracks/${track._id}`);
  };

  return (
    <div className={s.track}>
      <div className={s.icon}>{play ? <Pause /> : <PlayArrow />}</div>
      <div onClick={() => onClickHandler()} className={s.image}>
        <img src={`${API_URL}/${track.picture}`} alt="picture" />
      </div>
      <div onClick={() => onClickHandler()} className={s.info}>
        <div className={s.name}>{track.name}</div>
        <div className={s.artist}>{track.artist}</div>
      </div>
      {play && <div className={s.time}>1:35 / 3:12</div>}
      {isAuth && (
        <div className={s.trash}>
          <RestoreFromTrash />
        </div>
      )}
    </div>
  );
};
