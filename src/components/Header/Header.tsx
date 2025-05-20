import { useState } from 'react';
import css from './Header.module.css';
import bg1 from '../../assets/images/slider-img-1.jpg';
import bg2 from '../../assets/images/slider-img-2.jpg';
import bg3 from '../../assets/images/slider-img-3.jpg';
import Logo from '../../assets/images/icons.svg#icon-logo.svg';
import Menu from '../../assets/images/icons.svg#menu-toggle.svg';

export const Header = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = [bg1, bg2, bg3];

  return (
    <div
      className={css.section}
      style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
    >
      <div className={css.nav}>
        <svg className={css.logo}>
          <use href={Logo} />
        </svg>
        <svg className={css.menu}>
          <use href={Menu} />
        </svg>
      </div>
      <div className={css.subtextWrapper}>
        <div className={css.line} />
        <p className={css.subtext}>A hair salon for men in Kyiv</p>
      </div>
      <h1 className={css.title}>BarberShop</h1>
      <div className={css.textWrapper}>
        <p className={css.text}>We are experts in trendy men’s haircuts.</p>
        <p className={css.text}>We work quickly, carefully and with style.</p>
      </div>
      <div className={css.slidersWrapper}>
        {[0, 1, 2].map(index => (
          <div
            key={index}
            className={`${css.slider} ${bgIndex === index ? css.active : ''}`}
            onClick={() => setBgIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
