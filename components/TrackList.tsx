import { FC } from 'react';
import { TrackItem } from '@components';
import s from '@s.components/TrackList.module.scss';

export const TrackList: FC = () => {
  return (
    <div className={s.tracksPlace}>
      <TrackItem />
    </div>
  );
};
