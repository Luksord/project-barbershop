import css from './ModalMenu.module.css';

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

      <nav className={css.navContainer}>
        <a href="#about" onClick={onClose}>
          <p className={css.text}>About</p>
        </a>
        <a href="#services" onClick={onClose}>
          <p className={css.text}>Services and Prices</p>
        </a>
        <a href="#barbers" onClick={onClose}>
          <p className={css.text}>Barbers</p>
        </a>
        <a href="#contacts" onClick={onClose}>
          <p className={css.text}>Contacts</p>
        </a>
      </nav>

      <div className={css.contactContainer}>
        <p className={css.text}>+38 044 111 11 11</p>
        <button className={css.button}>Online Booking</button>
      </div>

      <div className={css.socialContainer}>
        <div className={css.line} />
        <div className={css.socialLinks}>
          <a href="https://instagram.com/barbershop" className={css.link}>
            <p className={css.subtext}>Instagram</p>
          </a>
          <a href="https://youtube.com/barbershop" className={css.link}>
            <p className={css.subtext}>Youtube</p>
          </a>
        </div>
      </div>
    </div>
  );
};
