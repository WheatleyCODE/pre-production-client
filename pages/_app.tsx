import '@s/globals.scss';
import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '@store';
import { Layout } from '@components';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout title="App">
    <Component {...pageProps} />
  </Layout>
);

export default wrapper.withRedux(WrappedApp);
