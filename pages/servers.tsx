import type { NextPage } from 'next';
import { useSession, signIn } from 'next-auth/react';

import Navbar from '../components/layout/Navbar';

const ServersPage: NextPage = () => {
  useSession({
    required: true,
    onUnauthenticated() {
      signIn('discord');
    }
  });

  return (
    <>
        <header>
          <Navbar />
        </header>
        <h1 style={{marginTop: '250px'}}>Server Selector</h1>
    </>
  );
}

export default ServersPage;
