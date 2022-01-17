import type { NextPage } from 'next';

import Navbar from '../components/layout/Navbar';

const Error: NextPage = () => {
  return (
    <>
        <header>
          <Navbar />
        </header>
        <h1 style={{marginTop: '250px'}}>Error 404</h1>
    </>
  );
}

export default Error;
