import { FC } from 'react';
import { TrackItem } from '@components';
import s from '@s.components/TrackList.module.scss';
import { useTypedSelector } from '@hooks';

export const TrackList: FC = () => {
  const { tracks } = useTypedSelector((state) => state.track);

  return (
    <div className={s.tracksPlace}>
      {tracks.map((track) => (
        <TrackItem key={track._id} track={track} play={false} />
      ))}
    </div>
  );
};
