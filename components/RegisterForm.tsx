import { FC, useState } from 'react';
import { useActions } from '@hooks';
import { useRouter } from 'next/router';
import { InputType, useInput } from '@hooks';
import { Button, Input } from '@UI';
import s from '@s.components/RegisterForm.module.scss';

export const RegisterForm: FC = () => {
  const emailInput = useInput('', 'Почта', InputType.EMAIL);
  const passwordInput = useInput('', 'Пароль', InputType.PASSWORD);
  const userNameInput = useInput('', 'Имя пользователя', InputType.TEXT);
  const router = useRouter();

  const { registration, login } = useActions();

  const onRegisterHandler = async () => {
    await registration(emailInput.default.value, passwordInput.default.value);
    await login(emailInput.default.value, passwordInput.default.value);
    router.push('/activate');
  };

  return (
    <div className={s.form}>
      <h1 className={s.title}>Регистрация</h1>
      <div className={s.inputs}>
        <div>
          <Input
            isError={userNameInput.isError}
            icon="no"
            defaultParams={userNameInput.default}
            validError={userNameInput.validError}
          />
        </div>
        <div>
          <Input
            isError={emailInput.isError}
            icon="no"
            defaultParams={emailInput.default}
            validError={emailInput.validError}
          />
        </div>

        <div>
          <Input
            isError={passwordInput.isError}
            icon="no"
            defaultParams={passwordInput.default}
            validError={passwordInput.validError}
          />
        </div>
        {/* <button onClick={onRegisterHandler} type="button">
          Регистрация
        </button> */}
        <Button onClickHandler={onRegisterHandler} text="Регистрация" buttonStyle="default" />
      </div>
    </div>
  );
};
