import React, { FC, useEffect, useState } from 'react';
import s from '@s.components/UI/AudioPlayer.module.scss';
import { Pause, PlayArrow } from '@material-ui/icons';
import { useActions, useTypedSelector } from '@hooks';

interface IAudioPlayerProps {
  lol: string;
}

let audio: any;

export const AudioPlayer: FC<IAudioPlayerProps> = () => {
  const { currentTrack } = useTypedSelector((state) => state.track);
  const { pause, duration, volume, currentTime } = useTypedSelector((state) => state.player);
  const { playAC, pauseAC, setVolumeAC, setDurationAC, setCurrentTimeAC } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
      setAudio();
    }
  }, []);

  const setAudio = () => {
    if (currentTrack) {
      audio.src = `http://localhost:5000/${currentTrack.audio}`;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDurationAC(Math.ceil(Number(audio.duration)));
      };

      audio.ontimeupdate = () => {
        setCurrentTimeAC(Math.ceil(Number(audio.currentTime)));
      };
    }
  };

  const onTogglePlayTrack = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (pause) {
      playAC();
      audio.play();
    } else {
      pauseAC();
      audio.pause();
    }
  };

  const onChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setVolumeAC(Number(e.target.value));
  };

  const onChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setCurrentTimeAC(Number(e.target.value));
  };

  return (
    <div className={s.main}>
      <div className={s.width}>
        <div className={s.track}>
          <div onClick={onTogglePlayTrack} className={s.play}>
            {pause ? <PlayArrow /> : <Pause />}
          </div>
          <div className={s.text}>
            <p className={s.trackName}>{currentTrack?.name}</p>
            <p>{currentTrack?.artist}</p>
          </div>
        </div>
        <div className={s.bar}>
          <input
            max={duration}
            value={currentTime}
            onChange={onChangeTime}
            className={s.trackBar}
            type="range"
          />
          <div className={s.progress}>
            <p>
              {currentTime} : {duration}
            </p>
          </div>
        </div>
        <div className={s.volume}>
          <div className={s.input}>
            <input value={volume} onChange={onChangeVolume} type="range" />
          </div>
          <div className={s.range}>
            <p>{volume} / 100</p>
          </div>
        </div>
      </div>
    </div>
  );
};
