import css from './Contacts.module.css';
import { ReactComponent as MapPinIcon } from '../../assets/icons/icon-map-pin.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/icon-phone.svg';
import { ReactComponent as MailIcon } from '../../assets/icons/icon-mail.svg';
import { contact } from '../../utils/contactData';

export const Contacts = () => {
  return (
    <div className={css.section}>
      <h1 className={css.title}>Contacts</h1>
      <div className={css.flexContainer}>
        <div className={css.contactsContainer}>
          <div className={css.contactWrapper}>
            <MapPinIcon className={css.icon} />
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
            <PhoneIcon className={css.icon} />
            <a href={contact.phoneHref} className={css.text}>
              {contact.phone}
            </a>
          </div>
          <div className={css.contactWrapper}>
            <MailIcon className={css.icon} />
            <a href={contact.emailHref} className={css.text}>
              {contact.email}
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
