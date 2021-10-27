import React, { FC, useState } from 'react';
import s from '@s.components/UI/AudioPlayer.module.scss';
import { PlayArrow } from '@material-ui/icons';

interface IAudioPlayerProps {
  lol: string;
}

export const AudioPlayer: FC<IAudioPlayerProps> = () => {
  const [volume, setVolume] = useState('30');

  return (
    <div className={s.main}>
      <div className={s.width}>
        <div className={s.track}>
          <div className={s.play}>
            <PlayArrow />
          </div>
          <div className={s.text}>
            <p className={s.trackName}>Переплетено</p>
            <p>Oxxxymiron</p>
          </div>
        </div>
        <div className={s.bar}>
          <div onClick={(e) => console.log(e)} className={s.progressBar}>
            <div className={s.time}>
              <p>02:42 / 03:43</p>
            </div>
            <div style={{ width: '20%' }} className={s.progress} />
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
