import { FC, useState } from 'react';

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="LoginForm">
      <h1>LoginForm</h1>
      <div>
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
        <button type="button">Логин</button>
        <button type="button">Регистрация</button>
      </div>
    </div>
  );
};

export default LoginForm;
