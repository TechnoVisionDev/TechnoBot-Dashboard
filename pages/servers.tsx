import type { NextPage } from 'next';
import Head from 'next/head';
import { useSession, signIn } from 'next-auth/react';

import Navbar from '../components/layout/navbar/Navbar';

const ServersPage: NextPage = () => {
  useSession({
    required: true,
    onUnauthenticated() {
      signIn('discord');
    }
  });

  return (
    <>
      <Head>
        <title>TechnoBot - Server Selector</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <h1 style={{marginTop: '250px'}}>Server Selector</h1>
    </>
  );
}

export default ServersPage;
