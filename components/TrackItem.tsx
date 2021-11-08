import { FC, useState } from 'react';
import s from '@s.components/TrackItem.module.scss';
import PlayArrow from '@material-ui/icons/PlayArrow';
import RestoreFromTrash from '@material-ui/icons/RestoreFromTrash';
import Pause from '@material-ui/icons/Pause';
import { ITrack } from '@t';
import { API_URL } from '@http';
import { useRouter } from 'next/router';
import { useActions, useTypedSelector } from '@hooks';
import { Portal } from './HOC';
import { Confirm } from './modals/Confirm';

export interface ITrackItemProps {
  track: ITrack;
  play: boolean;
}

export const TrackItem: FC<ITrackItemProps> = ({ track, play }) => {
  const router = useRouter();
  const { isAuth } = useTypedSelector((state) => state.user);
  const { pause } = useTypedSelector((state) => state.player);
  const { deleteTrack, setCurrentTrackAC, playAC, pauseAC } = useActions();

  const [show, setShow] = useState(false);

  const onClickHandler = () => {
    router.push(`/tracks/${track._id}`);
  };

  const onTrackDeleteHandler = (id: string) => {
    deleteTrack(id);
  };

  const onTogglePlayTrack = () => {
    setCurrentTrackAC(track);
  };

  return (
    <div className={s.track}>
      <div onClick={onTogglePlayTrack} className={s.icon}>
        {play ? <Pause /> : <PlayArrow />}
      </div>
      <div onClick={() => onClickHandler()} className={s.image}>
        <img src={`${API_URL}/${track.picture}`} alt="picture" />
      </div>
      <div onClick={() => onClickHandler()} className={s.info}>
        <div className={s.name}>{track.name}</div>
        <div className={s.artist}>{track.artist}</div>
      </div>
      {play && <div className={s.time}>1:35 / 3:12</div>}
      {isAuth && (
        <div onClick={() => setShow((prev) => !prev)} className={s.trash}>
          <RestoreFromTrash />
        </div>
      )}
      {show && (
        <Portal>
          <Confirm
            title="Вы действительно хотите удалить этот трек?"
            upProveConfirm={() => onTrackDeleteHandler(track._id)}
            onCloseConfirm={() => setShow((prev) => !prev)}
          >
            <h2 style={{ textAlign: 'center' }}>{track.name}</h2>
          </Confirm>
        </Portal>
      )}
    </div>
  );
};
