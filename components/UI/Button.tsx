import s from '@s.components/UI/Button.module.scss';
import { motion } from 'framer-motion';

interface IButtonProps {
  text: string;
  buttonStyle: string;
  disable?: boolean;
  onClickHandler?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  text,
  buttonStyle = 'default',
  onClickHandler,
  disable,
}) => {
  const styles = buttonStyle;

  return (
    <button disabled={disable ?? false} onClick={onClickHandler} type="button" className={s.button}>
      <span>{text}</span>
    </button>
  );
};
