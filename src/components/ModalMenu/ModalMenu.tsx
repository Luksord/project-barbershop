import css from './ModalMenu.module.css';
import { menu } from './../../utils/navData';
import { contact } from '../../utils/contactData';
import { media } from '../../utils/contactData';

export const ModalMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div className={`${css.modal} ${isOpen ? css.show : ''}`}>
      <button className={css.close} onClick={onClose}>
        ✕
      </button>

      <div className={css.menuContainer}>
        <ul className={css.menuList}>
          {menu.map(({ navName, navLink }) => (
            <li key={navName}>
              <a href={navLink} onClick={onClose} className={css.menuItem}>
                {navName}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={css.contactContainer}>
        <a href={contact.phoneHref} className={css.menuItem}>
          {contact.phone}
        </a>
        <button type="button" className={css.button}>
          <a href="#booking" onClick={onClose} className={css.btnLink}>
            online-booking
          </a>
        </button>
      </div>

      <div className={css.socialContainer}>
        <div className={css.line} />
        <div className={css.socialLinks}>
          <a href={media.instagramHref} className={css.subtext}>
            {media.instagram}
          </a>
          <a href={media.youtubeHref} className={css.subtext}>
            {media.youtube}
          </a>
        </div>
      </div>
    </div>
  );
};
