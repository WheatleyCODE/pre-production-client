import { FC } from 'react';
import s from '@s.components/TrackItem.module.scss';
import PlayArrow from '@material-ui/icons/PlayArrow';
import RestoreFromTrash from '@material-ui/icons/RestoreFromTrash';
import Pause from '@material-ui/icons/Pause';
import { ITrack } from '@t';
import { API_URL } from '@http';

export interface ITrackItemProps {
  track: ITrack;
  play: boolean;
}

export const TrackItem: FC<ITrackItemProps> = ({ track, play }) => {
  return (
    <div className={s.track}>
      <div className={s.icon}>{play ? <Pause /> : <PlayArrow />}</div>
      <div className={s.image}>
        <img src={`${API_URL}/${track.picture}`} alt="picture" />
      </div>
      <div className={s.info}>
        <div className={s.name}>{track.name}</div>
        <div className={s.artist}>{track.artist}</div>
      </div>
      <div className={s.trash}>
        <RestoreFromTrash />
      </div>
    </div>
  );
};
