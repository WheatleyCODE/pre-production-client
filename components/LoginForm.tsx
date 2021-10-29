import { FC } from 'react';
import { InputType, useActions, useInput } from '@hooks';
import { useRouter } from 'next/router';
import { Button, Input } from './UI';
import s from '@s.components/LoginForm.module.scss';

export const LoginForm: FC = () => {
  const emailInput = useInput('', 'Почта', InputType.EMAIL);
  const passwordInput = useInput('', 'Пароль', InputType.PASSWORD);
  const router = useRouter();

  const { login } = useActions();

  const onLoginHandler = async () => {
    await login(emailInput.default.value, passwordInput.default.value);
    router.push('/');
  };

  return (
    <div className={s.form}>
      <h1 className={s.title}>Вход на сайт</h1>
      <div className={s.inputs}>
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
        <Button
          disable={!passwordInput.isValid || !emailInput.isValid}
          onClickHandler={onLoginHandler}
          text="Войти"
          buttonStyle="default"
        />
      </div>
    </div>
  );
};
