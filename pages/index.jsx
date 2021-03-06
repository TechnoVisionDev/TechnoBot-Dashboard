import Navbar from '../components/layout/navbar/Navbar';
import Logo from '../components/home/Logo';
import Waves from '../components/home/Waves';
import FeaturesList from '../components/home/FeaturesList';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Logo />
      <Waves />
      <FeaturesList />
      <Footer />
    </>
  );
}

export default Home
