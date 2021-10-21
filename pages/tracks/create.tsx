import { NextPage } from 'next';
import React, { useState } from 'react';
import s from '@s.pages/tracks/create.module.scss';
import { ActiveSteps, Button } from '@UI';
import { useTypedSelector } from '@hooks';
import { useRouter } from 'next/router';

const TrackCreate: NextPage = () => {
  const [current, setCurrentStep] = useState(1);
  const { isAuth } = useTypedSelector((state) => state.user);
  const router = useRouter();
  const count = 3;

  const onClickHandler = () => {
    if (!isAuth) {
      router.push('/login');
    }
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
          <Button
            onClickHandler={onClickHandler}
            text={current === count ? 'Загрузить трек' : 'Следующий шаг'}
            buttonStyle="default"
          />
        </div>
      </div>
    </div>
  );
};

export default TrackCreate;
