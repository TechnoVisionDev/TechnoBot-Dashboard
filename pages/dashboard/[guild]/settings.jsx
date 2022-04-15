import Head from 'next/head';
import { getSession } from 'next-auth/react';

import Navbar from '../../../components/layout/navbar/Navbar';
import { useRouter } from 'next/router';
import { retrieveOwnedGuilds, isBotInGuild } from '../../api/auth/guilds';

const SettingsPage = () => {

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

export const getServerSideProps = async (context) => {
  // Check for authentication
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  // Check if guild exists
  const id = context.params?.guild;
  const guilds = await retrieveOwnedGuilds(session);
  let isValid = false;
  for (let server of guilds) {
    if (server.id == id) {
        isValid = true;
        break;
    }
  }
  if (!isValid) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const hasBot = await isBotInGuild(id);
  if (!hasBot) {
    return {
      redirect: {
        source: '/servers',
        destination: `https://discord.com/oauth2/authorize?client_id=795534384367009802&scope=bot&permissions=2088234230&guild_id=${id}&response_type=code&redirect_uri=http://localhost:3000/api/auth/server_auth`,
        permanent: false
      },
    }
  }

  return { props: {} };
}

export default SettingsPage;