import css from './Home.module.css';
import { Header } from '../../components/Header/Header';
import { About } from '../../components/About/About';
import { Services } from '../../components/Services/Services';
import { WhyUs } from '../../components/WhyUs/WhyUs';
import { Barbers } from '../../components/Barbers/Barbers';
import { Gallery } from '../../components/Gallery/Gallery';
import { Booking } from '../../components/Booking/Booking';
import { Contacts } from '../../components/Contacts/Contacts';
import { Footer } from '../../components/Footer/Footer';

export const Home = () => {
  return (
    <main className={css.page}>
      <Header />
      <About />
      <Services />
      <WhyUs />
      <Barbers />
      <Gallery />
      <Booking />
      <Contacts />
      <Footer />
    </main>
  );
};
