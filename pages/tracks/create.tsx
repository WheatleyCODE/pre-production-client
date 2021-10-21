import { NextPage } from 'next';
import React, { useState } from 'react';
import s from '@s.pages/tracks/create.module.scss';
import { ActiveSteps } from '@UI';

const TrackCreate: NextPage = () => {
  const [current, setCurrentStep] = useState(1);
  const count = 3;

  const onClickHandler = () => {
    setCurrentStep((prev) => {
      if (prev + 1 > count) return prev;
      return prev + 1;
    });
  };

  return (
    <div className={s.center}>
      <div className={s.width}>
        <div className={s.main}>
          <h1>Загрузка нового трека</h1>
          <div className={s.stepsLength}>
            <ActiveSteps count={count} current={current} />
          </div>
          <div className={s.workplace}>вываывы</div>
          <div onClick={onClickHandler} className={s.next}>
            {current === count ? 'Загрузить трек' : 'Следующий шаг'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackCreate;
