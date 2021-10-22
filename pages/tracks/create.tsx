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

  const nextStep = () => {
    if (!isAuth) {
      router.push('/login');
    }
    setCurrentStep((prev) => {
      if (prev + 1 > count) return prev;
      return prev + 1;
    });
  };

  const backStep = () => {
    if (!isAuth) {
      router.push('/login');
    }
    setCurrentStep((prev) => {
      if (prev - 1 < 1) return prev;
      return prev - 1;
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
          <div className={s.workplace}>
            {current === 1 && (
              <div>
                <h2>Шаг 1: Название трека</h2>
              </div>
            )}
            {current === 2 && (
              <div>
                <h2>Шаг 2: Загрузите абложку трека</h2>
              </div>
            )}
            {current === 3 && (
              <div>
                <h2>Шаг 3: Загрузите аудиофайл</h2>
              </div>
            )}
          </div>
          <Button
            onClickHandler={nextStep}
            text={current === count ? 'Загрузить трек' : 'Следующий шаг'}
            buttonStyle="default"
            className={s.right}
          />

          <Button
            className={s.left}
            onClickHandler={backStep}
            text={'Назад'}
            buttonStyle="default"
          />
        </div>
      </div>
    </div>
  );
};

export default TrackCreate;
