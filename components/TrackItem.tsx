import { FC } from 'react';
import s from '@s.components/TrackItem.module.scss';
import PlayArrow from '@material-ui/icons/PlayArrow';
import RestoreFromTrash from '@material-ui/icons/RestoreFromTrash';

export const TrackItem: FC = () => {
  return (
    <div className={s.track}>
      <div className={s.icon}>
        <PlayArrow />
      </div>
      <div className={s.image}>{/* <Image /> */}</div>
      <div className={s.info}>
        <div className={s.name}>Переплетено</div>
        <div className={s.artist}>Oxxxymiron</div>
      </div>
      <div className={s.trash}>
        <RestoreFromTrash />
      </div>
    </div>
  );
};
