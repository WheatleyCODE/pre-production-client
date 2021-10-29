import React, { FC, useState } from 'react';
import s from '@s.components/UI/AudioPlayer.module.scss';
import { PlayArrow } from '@material-ui/icons';
import { useTypedSelector } from '@hooks';

interface IAudioPlayerProps {
  lol: string;
}

export const AudioPlayer: FC<IAudioPlayerProps> = () => {
  const { currentTrack } = useTypedSelector((state) => state.track);
  const [volume, setVolume] = useState('30');
  const [progress, setProgress] = useState('0');

  return (
    <div className={s.main}>
      <div className={s.width}>
        <div className={s.track}>
          <div className={s.play}>
            <PlayArrow />
          </div>
          <div className={s.text}>
            <p className={s.trackName}>{currentTrack?.name}</p>
            <p>{currentTrack?.artist}</p>
          </div>
        </div>
        <div className={s.bar}>
          {/* <div onClick={(e) => console.log(e)} className={s.progressBar}>
            <div className={s.time}>
              <p>02:42 / 03:43</p>
            </div>
            <div style={{ width: '20%' }} className={s.progress} />
          </div> */}
          <input
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
            className={s.trackBar}
            type="range"
          />
          <div className={s.progress}>
            <p>{progress} : 100</p>
          </div>
        </div>
        <div className={s.volume}>
          <div className={s.input}>
            <input value={volume} onChange={(e) => setVolume(e.target.value)} type="range" />
          </div>
          <div className={s.range}>
            <p>{volume} / 100</p>
          </div>
        </div>
      </div>
    </div>
  );
};
