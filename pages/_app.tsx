import '@s/globals.scss';
import React, { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '@store';
import { Layout } from '@components';
import { useActions, useTypedSelector } from '@hooks';
import { AudioPlayer } from '@components/UI/AudioPlayer';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { checkAuth } = useActions();
  const { currentTrack } = useTypedSelector((state) => state.track);

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

      {currentTrack !== null && <AudioPlayer lol="" />}
    </>
  );
};

export default wrapper.withRedux(WrappedApp);
