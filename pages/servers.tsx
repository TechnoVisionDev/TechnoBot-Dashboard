import type { NextPage } from 'next';
import Head from 'next/head';
import { useSession, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';

import Navbar from '../components/layout/navbar/Navbar';

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

  const items = [];
  if (isLoading) {
    items.push(<p>Loading...</p>);
  } else {
    for (var i = 0; i < data['length']; i++) {
      const guild = data[i];
      items.push(<p>{guild['name']}</p>);
    }
  }

  return (
    <>
      <Head>
        <title>TechnoBot - Server Selector</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <h1 style={{marginTop: '250px'}}>Server Selector</h1>
      <div>{items}</div>
    </>
  );
}

export default ServersPage;
