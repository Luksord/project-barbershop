import css from './Contacts.module.css';
import MapPinIcon from '../../assets/images/icons.svg#icon-map-pin.svg';
import PhoneIcon from '../../assets/images/icons.svg#icon-phone.svg';
import MailIcon from '../../assets/images/icons.svg#icon-mail.svg';

export const Contacts = () => {
  return (
    <div className={css.section}>
      <h1 className={css.title}>Contacts</h1>
      <div className={css.flexContainer}>
        <div className={css.contactsContainer}>
          <div className={css.contactWrapper}>
            <svg className={css.icon}>
              <use href={MapPinIcon} />
            </svg>
            <div>
              <p className={css.text} style={{ fontWeight: '700' }}>
                st. Vasylkivska, 7A
              </p>
              <p className={css.text} style={{ fontWeight: '700' }}>
                Kiev, 08132
              </p>
            </div>
          </div>
          <div className={css.contactWrapper}>
            <svg className={css.icon}>
              <use href={PhoneIcon} />
            </svg>
            <a href="tel:+38 044 111 11 11" className={css.text}>
              +38 044 111 11 11
            </a>
          </div>
          <div className={css.contactWrapper}>
            <svg className={css.icon}>
              <use href={MailIcon} />
            </svg>
            <a href="mailto:barbershop@email.com" className={css.text}>
              barbershop@email.com
            </a>
          </div>
        </div>
        <div className={css.hoursContainer}>
          <div className={css.subtextWrapper}>
            <div className={css.line} />
            <p className={css.subtext}>Working hours</p>
          </div>
          <p className={css.text}>Every day from 9:00 to 22:00</p>
        </div>
      </div>
    </div>
  );
};
