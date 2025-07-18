import css from './Services.module.css';

interface servicesProps {
  service: string;
  price: string;
}

const services: servicesProps[] = [
  {
    service: `Men’s haircut `,
    price: ` from 30 EN`,
  },
  {
    service: `Beard trim `,
    price: ` from 20 EN`,
  },
  {
    service: `Mustache trim `,
    price: ` from 20 EN`,
  },
  {
    service: `Straight razor shave `,
    price: ` from 20 EN`,
  },
  {
    service: `Trainee’s haircut `,
    price: ` from 10 EN`,
  },
  {
    service: `Haircut under the nozzle `,
    price: ` from 20 EN`,
  },
  {
    service: `Children’s haircut (0-12 y.o.) `,
    price: ` from 30 EN`,
  },
  {
    service: `Camouflage of grey hair `,
    price: ` from 20 EN`,
  },
];

export const Services = () => {
  const leftBlock = services.slice(0, 4);
  const rightBlock = services.slice(4, 8);

  return (
    <div className={css.section}>
      <div className={css.subtextWrapper}>
        <div className={css.line} />
        <p className={css.subtext}>Spend your time with the best masters</p>
      </div>
      <h2 className={css.title}>Services and prices</h2>
      <div className={css.pricesContainer}>
        <div className={css.tablet}>
          <ul className={css.list}>
            {services.map(({ service, price }) => (
              <li key={service} className={css.item}>
                <p className={css.service}>{service}</p>
                <span className={css.underscore}></span>
                <p className={css.price}>{price}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={css.desktop}>
          <div className={css.blockLeft}>
            <ul className={css.list}>
              {leftBlock.map(({ service, price }) => (
                <li key={service} className={css.item}>
                  <p className={css.service}>{service}</p>
                  <span className={css.underscore}></span>
                  <p className={css.price}>{price}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={css.blockRight}>
            <ul className={css.list}>
              {rightBlock.map(({ service, price }) => (
                <li key={service} className={css.item}>
                  <p className={css.service}>{service}</p>
                  <span className={css.underscore}></span>
                  <p className={css.price}>{price}</p>
                </li>
              ))}
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
