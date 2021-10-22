import s from '@s.components/UI/Button.module.scss';
import { motion } from 'framer-motion';

interface IButtonProps {
  text: string;
  buttonStyle: string;
  disable?: boolean;
  onClickHandler?: () => void;
  className?: string;
}

export const Button: React.FC<IButtonProps> = ({
  text,
  buttonStyle = 'default',
  onClickHandler,
  disable,
  className,
}) => {
  const styles = buttonStyle;

  return (
    <button
      disabled={disable ?? false}
      onClick={onClickHandler}
      type="button"
      className={`${s.button} ${className && `${className}`}`}
    >
      <span>{text}</span>
    </button>
  );
};
