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
      let imageURL = `https://cdn.discordapp.com/icons/${guild['id']}/${guild['icon']}.png`;
      if (!guild['icon']) {
        imageURL = 'https://cdn.discordapp.com/embed/avatars/0.png';
      }

      items.push(
        <div key={i}>
          <img src={imageURL} alt={`${guild['name']} Guild Icon`} />
          <p>{guild['name']}</p>
        </div>
      );
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
