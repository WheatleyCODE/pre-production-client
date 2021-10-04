import { FC, useState } from 'react';
import { useActions } from '@hooks';
import { useRouter } from 'next/router';
import s from '@s.components/RegisterForm.module.scss';

export const RegisterForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const { registration, login } = useActions();

  const onRegisterHandler = async () => {
    await registration(email, password);
    await login(email, password);
    router.push('/activate');
  };

  return (
    <div className={s.form}>
      <h1>Регистрация</h1>
      <div className={s.inputs}>
        <input
          value={email}
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={onRegisterHandler} type="button">
          Регистрация
        </button>
      </div>
    </div>
  );
};
