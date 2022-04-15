import Head from 'next/head';
import { SessionProvider } from "next-auth/react"

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import '../styles/globals.css'

function MyApp({Component, pageProps: { session, ...pageProps }}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>TechnoBot</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp
