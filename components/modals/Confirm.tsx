import { useEffect } from 'react';
import { BackDrop } from './BackDrop';
import s from '@s.components/modals/Confirm.module.scss';
import { Button } from '@components/UI';

interface IConfirmProps {
  children: React.ReactNode;
  title: string;
  onCloseConfirm: () => void;
  upProveConfirm: () => void;
}

export const Confirm: React.FC<IConfirmProps> = (props) => {
  const { children, onCloseConfirm, upProveConfirm, title } = props;

  useEffect(() => {
    const { platform } = window.navigator;
    if (platform === 'Win32') {
      document.body.classList.add(s.win);
    } else {
      document.body.classList.add(s.mac);
    }

    return () => {
      document.body.classList.remove(s.win);
      document.body.classList.remove(s.mac);
    };
  }, []);

  const upProveHandler = () => {
    upProveConfirm();
    onCloseConfirm();
  };

  return (
    <BackDrop onCloseHandler={onCloseConfirm}>
      <div onClick={(e) => e.stopPropagation()} className={s.confirm}>
        <h3>{title}</h3>
        {children}
        <div className={s.buttons}>
          <Button onClickHandler={upProveHandler} text="Да" buttonStyle="default" />
          <Button onClickHandler={onCloseConfirm} text="Нет" buttonStyle="default" />
        </div>
      </div>
    </BackDrop>
  );
};
