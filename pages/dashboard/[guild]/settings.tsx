import type { NextPage } from 'next';
import Head from 'next/head';
import { useSession, signIn } from 'next-auth/react';

import Navbar from '../../../components/layout/navbar/Navbar';
import { useRouter } from 'next/router';

const SettingsPage: NextPage = () => {
  useSession({
    required: true,
    onUnauthenticated() {
      signIn('discord');
    }
  });

  const router = useRouter();
  const { guild } = router.query;

  return (
    <>
      <Head>
        <title>TechnoBot - Dashboard</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <h1 style={{marginTop: '250px'}}>Dashboard: {guild}</h1>
    </>
  );
}

export default SettingsPage;
