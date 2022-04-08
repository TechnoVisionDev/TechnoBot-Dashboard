import type { NextPage } from 'next';
import Head from 'next/head';
import { useSession, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';

import Navbar from '../components/layout/navbar/Navbar';
import GuildList from '../components/servers/GuildList';

const ServersPage: NextPage = () => {
  useSession({
    required: true,
    onUnauthenticated() {
      signIn('discord');
    }
  });

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('api/auth/guilds')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>TechnoBot - Server Selector</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <GuildList data={data} isLoading={isLoading} />
    </>
  );
}

export default ServersPage;
