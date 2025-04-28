import css from './Home.module.css';
import { About } from '../../components/About/About';
import { Services } from '../../components/Services/Services';
import { WhyUs } from '../../components/WhyUs/WhyUs';
import { Barbers } from '../../components/Barbers/Barbers';

export const Home = () => {
  return (
    <>
      <div className={css.container}>
        <About />
        <Services />
        <WhyUs />
        <Barbers />
      </div>
    </>
  );
};
