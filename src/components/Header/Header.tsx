import { useState } from 'react';
import css from './Header.module.css';
import mob1x1 from '../../assets/images/slider-img-1_mob@1x.jpg';
import mob1x2 from '../../assets/images/slider-img-1_mob@2x.jpg';
import mob2x1 from '../../assets/images/slider-img-2_mob@1x.jpg';
import mob2x2 from '../../assets/images/slider-img-2_mob@2x.jpg';
import mob3x1 from '../../assets/images/slider-img-3_mob@1x.jpg';
import mob3x2 from '../../assets/images/slider-img-3_mob@2x.jpg';
import tab3x1 from '../../assets/images/slider-img-3_tab@1x.jpg';
import tab3x2 from '../../assets/images/slider-img-3_tab@2x.jpg';
import desk1x1 from '../../assets/images/slider-img-1_desk@1x.jpg';
import desk2x1 from '../../assets/images/slider-img-2_desk@1x.jpg';
import desk3x1 from '../../assets/images/slider-img-3_desk@1x.jpg';
import desk3x2 from '../../assets/images/slider-img-3_desk@2x.jpg';
import Logo from '../../assets/images/icons.svg#icon-logo.svg';
import Menu from '../../assets/images/icons.svg#menu-toggle.svg';
import { ModalMenu } from '../ModalMenu/ModalMenu';

interface MenuProps {
  navName: string;
  navLink: string;
}

export const menu: MenuProps[] = [
  { navName: 'About', navLink: '#about' },
  { navName: 'Services and Prices', navLink: '#services' },
  {
    navName: 'Barbers',
    navLink: '#barbers',
  },
  { navName: 'Contacts', navLink: '#contacts' },
];

interface RatinaSet {
  '1x': string;
  '2x'?: string;
}

interface BackgroundsProps {
  mobile: RatinaSet;
  tablet: RatinaSet;
  desktop: RatinaSet;
}

const backgrounds: BackgroundsProps[] = [
  {
    mobile: { '1x': mob1x1, '2x': mob1x2 },
    tablet: { '1x': desk1x1 },
    desktop: { '1x': desk1x1 },
  },
  {
    mobile: { '1x': mob2x1, '2x': mob2x2 },
    tablet: { '1x': desk2x1 },
    desktop: { '1x': desk2x1 },
  },
  {
    mobile: { '1x': mob3x1, '2x': mob3x2 },
    tablet: { '1x': tab3x1, '2x': tab3x2 },
    desktop: { '1x': desk3x1, '2x': desk3x2 },
  },
];

export const Header = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const getBackground = (index: number): string => {
    const screenWidth = window.innerWidth;
    const dpr: '1x' | '2x' = window.devicePixelRatio >= 2 ? '2x' : '1x';
    let type: keyof BackgroundsProps = 'mobile';
    if (screenWidth >= 1600) type = 'desktop';
    else if (screenWidth >= 768) type = 'tablet';
    const bg = backgrounds[index][type];
    return bg[dpr] || bg['1x'];
  };

  return (
    <div className={css.section}>
      <div className={css.marginLeft}>
        <svg className={css.marginLogo}>
          <use href={Logo} />
        </svg>
        <div className={css.marginSubtextWrapper}>
          <div className={css.marginLine} />
          <a href="https://instagram.com/barbershop" className={css.link}>
            <p className={css.marginSubtext}>Instagram</p>
          </a>
          <a href="https://youtube.com/barbershop" className={css.link}>
            <p className={css.marginSubtext}>Youtube</p>
          </a>
        </div>
      </div>
      <div
        className={css.background}
        style={{ backgroundImage: `url(${getBackground(bgIndex)})` }}
      >
        <div className={css.navMobile}>
          <svg className={css.logo}>
            <use href={Logo} />
          </svg>
          <svg className={css.mobileMenu} onClick={() => setMenuOpen(true)}>
            <use href={Menu} />
          </svg>
        </div>
        <div className={css.nav}>
          <div className={css.menuContainer}>
            <ul className={css.navList}>
              {menu.map(({ navName, navLink }) => (
                <li key={navName}>
                  <a href={navLink} className={css.navItem}>
                    {navName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={css.buttonWrapper}>
            <a href="tel:+38 044 111 11 11" className={css.tel}>
              +38 044 111 11 11
            </a>
            <button type="button" className={css.button}>
              <a href="#booking" className={css.btnLink}>
                online-booking
              </a>
            </button>
          </div>
        </div>
        <ModalMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
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
      <div className={css.marginRight}></div>
    </div>
  );
};
