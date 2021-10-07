import { FC } from 'react';
import s from '@s.components/UI/Input.module.scss';

interface IDefaultParams {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IInputProps {
  defaultParams: IDefaultParams;
  icon: string;
  validError: string;
  isError: boolean;
}

export const Input: FC<IInputProps> = (props) => {
  const { defaultParams, icon, validError, isError } = props;

  return (
    <div className={s.container}>
      {isError && <span className={s.error}>{validError}</span>}
      <input className={s.input} {...defaultParams} />
    </div>
  );
};
