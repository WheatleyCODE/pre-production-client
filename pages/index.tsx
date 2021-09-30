import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { test } = useTypedSelector((state) => state.player);
  const { setTestAc, checkAuth } = useActions();

  useEffect(() => {
    setTestAc(['arr', 'arr', 'marr']);
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);
  return (
    <>
      <h1>Hello TEST!</h1>
      <pre>{test.join(' ')}</pre>
      <LoginForm />
    </>
  );
};

export default Home;
