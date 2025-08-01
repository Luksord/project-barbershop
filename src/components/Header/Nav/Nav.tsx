import { useState } from 'react';
import css from './Nav.module.css';
import Logo from '../../../assets/images/icons.svg#icon-logo.svg';
import Menu from '../../../assets/images/icons.svg#menu-toggle.svg';
import { menu } from './../../../utils/navData';
import { ModalMenu } from '../../ModalMenu/ModalMenu';
import { contact } from '../../../utils/contactData';

export const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
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
          <a href={contact.phoneHref} className={css.tel}>
            {contact.phone}
          </a>
          <button type="button" className={css.button}>
            <a href="#booking" className={css.btnLink}>
              online-booking
            </a>
          </button>
        </div>
      </div>
      <ModalMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};
