import '@s/globals.scss';
import React, { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '@store';
import { Layout } from '@components';
import { useActions } from '@hooks';
import { AudioPlayer } from '@components/UI/AudioPlayer';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { checkAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);

  return (
    <>
      <Layout title="App">
        <Component {...pageProps} />
      </Layout>
      <AudioPlayer lol="" />
    </>
  );
};

export default wrapper.withRedux(WrappedApp);
