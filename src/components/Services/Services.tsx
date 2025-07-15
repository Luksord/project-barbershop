import css from './Services.module.css';

export const Services = () => {
  return (
    <div className={css.section}>
      <div className={css.subtextWrapper}>
        <div className={css.line} />
        <p className={css.subtext}>Spend your time with the best masters</p>
      </div>
      <h2 className={css.title}>Services and prices</h2>
      <div className={css.pricesContainer}>
        <div className={css.tablet}>
          <ul className={css.priceBlock}>
            <li>
              Men’s haircut _________________________________________ from 30
              eur.
            </li>
            <li>
              Beard trim ____________________________________________ from 20
              eur.
            </li>
            <li>
              Mustache trim ________________________________________ from 20
              eur.
            </li>
            <li>
              Straight razor shave __________________________________ from 20
              eur.
            </li>
            <li>
              Trainee’s haircut ______________________________________ from 10
              eur.
            </li>
            <li>
              Haircut under the nozzle _____________________________ from 20
              eur.
            </li>
            <li>
              Children’s haircut (0-12 y.o.) __________________________ from 30
              eur.
            </li>
            <li>
              Camouflage of grey hair ______________________________ from 20
              eur.
            </li>
          </ul>
        </div>
        <div className={css.desktop}>
          <div className={css.blockLeft}>
            <ul className={css.priceBlock}>
              <li>
                Men’s haircut _________________________________________ from 30
                eur.
              </li>
              <li>
                Beard trim ____________________________________________ from 20
                eur.
              </li>
              <li>
                Mustache trim ________________________________________ from 20
                eur.
              </li>
              <li>
                Straight razor shave __________________________________ from 20
                eur.
              </li>
            </ul>
          </div>
          <div className={css.blockRight}>
            <ul className={css.priceBlock}>
              <li>
                Trainee’s haircut ______________________________________ from 10
                eur.
              </li>
              <li>
                Haircut under the nozzle _____________________________ from 20
                eur.
              </li>
              <li>
                Children’s haircut (0-12 y.o.) __________________________ from
                30 eur.
              </li>
              <li>
                Camouflage of grey hair ______________________________ from 20
                eur.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={css.buttonWrapper}>
        <button type="button" className={css.button}>
          online-booking
        </button>
      </div>
    </div>
  );
};
