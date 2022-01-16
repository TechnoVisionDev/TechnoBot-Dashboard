import type { NextPage } from 'next';

import Navbar from '../components/layout/Navbar';

const ServerPage: NextPage = () => {
  return (
    <>
        <header>
          <Navbar />
        </header>
        <h1 style={{marginTop: '250px'}}>Server Selector</h1>
    </>
  );
}

export default ServerPage;
