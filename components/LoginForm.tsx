import { FC, useState } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isAuth, user } = useTypedSelector((state) => state.player);
  const { login, logout, registration, fetchUsers } = useActions();

  return (
    <div className="LoginForm">
      <h1>LoginForm</h1>
      <div>
        {!isAuth && (
          <>
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
            <button onClick={() => login(email, password)} type="button">
              Логин
            </button>
            <button onClick={() => registration(email, password)} type="button">
              Регистрация
            </button>
          </>
        )}
        {isAuth && (
          <div>
            <h4>{user.email}</h4>
            <h2>{user.isActivated ? 'акк активирован' : 'Активируйте акк'}</h2>
          </div>
        )}
        {isAuth && (
          <button onClick={() => logout()} type="button">
            Выйти
          </button>
        )}
        <div>
          <button onClick={() => fetchUsers()} type="button">
            Получить пользователей
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
