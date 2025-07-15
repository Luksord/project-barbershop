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
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <WhyUs />
      <div id="barbers">
        <Barbers />
      </div>
      <Gallery />
      <Booking />
      <div id="contacts">
        <Contacts />
      </div>
      <Footer />
    </main>
  );
};
