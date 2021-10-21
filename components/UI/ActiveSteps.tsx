import React, { FC } from 'react';
import s from '@s.components/UI/ActiveSteps.module.scss';

export interface IActiveStepsProps {
  count: number;
  current: number;
}

export const ActiveSteps: FC<IActiveStepsProps> = ({ count, current }) => {
  const circles: string[] = new Array(count).fill('lol');

  const step = 100 / --count;

  return (
    <div className={s.main}>
      {circles.map((_, i) => (
        <div
          className={`${s.circle} ${i + 1 === current && `${s.active}`} ${
            i + 1 < current && `${s.back}`
          }`}
          key={i}
        >
          {i + 1}
        </div>
      ))}
      <div className={s.line}>
        <div style={{ width: step * --current + '%' }} className={s.progress} />
      </div>
    </div>
  );
};
