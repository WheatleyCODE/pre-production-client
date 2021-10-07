import React, { useEffect, useState } from 'react';

export interface IUnput {
  default: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type: string;
    onBlur: () => void;
  };
  validError: string;
  isError: boolean;
  isValid: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export enum InputType {
  EMAIL = 'EMAIL',
  PASSWORD = 'PASSWORD',
  PROMOCODE = 'PROMOCODE',
  TEXT = 'TEXT',
}

export const useInput = (initialValue: string, placeholder: string, type: InputType) => {
  let initialValidError = '';
  switch (type) {
    case InputType.PROMOCODE:
      initialValidError = 'Некорректный промокод';
      break;

    default:
      initialValidError = 'Поле не может быть пустым';
      break;
  }

  const [value, setValue] = useState(initialValue);
  const [validError, setValidError] = useState(initialValidError);
  const [touched, setTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const onBlur = () => {
    setTouched(true);
  };

  useEffect(() => {
    if (validError) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [validError]);

  let onChange;

  switch (type) {
    case InputType.EMAIL:
      onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

        const re =
          // eslint-disable-next-line max-len
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (e.target.value.length < 1) {
          setValidError('Поле не может быть пустым');
        } else if (!re.test(String(e.target.value).toLowerCase())) {
          setValidError('Некорректный Email');
        } else {
          setValidError('');
        }
      };
      break;

    case InputType.PASSWORD:
      onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

        if (e.target.value.length < 1) {
          setValidError('Поле не может быть пустым');
        } else if (e.target.value.length < 5) {
          setValidError('Пароль должен быть длинее 5 символов');
        } else {
          setValidError('');
        }
      };
      break;

    case InputType.PROMOCODE:
      onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

        if (e.target.value.length < 1) {
          setValidError('Некорректный промокод');
        } else if (e.target.value.length < 8) {
          setValidError('Промокод должен содержать 8 символов');
        } else {
          setValidError('');
        }
      };
      break;

    case InputType.TEXT:
      onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

        if (e.target.value.length < 1) {
          setValidError('Поле не может быть пустым');
        } else if (e.target.value.length < 3) {
          setValidError('Поле должно быть минимум 3 символа');
        } else {
          setValidError('');
        }
      };
      break;

    default:
      onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

        if (e.target.value.length < 1) {
          setValidError('Поле не может быть пустым');
        } else if (e.target.value.length < 3) {
          setValidError('Поле должно быть минимум 3 символа');
        } else {
          setValidError('');
        }
      };
      break;
  }

  return {
    default: {
      value,
      onChange,
      placeholder,
      type,
      onBlur,
    },
    setValue,
    validError,
    isError: !!(touched && validError),
    isValid,
  };
};
