import css from './Booking.module.css';

export const Booking = () => {
  return (
    <div className={css.section}>
      <h2 className={css.title}>Online-booking</h2>
      <form className={css.form}>
        <div className={css.formGroup}>
          <input type="text" id="name" placeholder=" " required />
          <label htmlFor="name">Name*</label>
        </div>
        <div className={css.formGroup}>
          <input type="tel" id="phone" placeholder=" " required />
          <label htmlFor="phone">Phone*</label>
        </div>
        <div className={css.formGroup}>
          <textarea id="message" placeholder=" "></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <button type="submit" className={css.button}>
          Send
        </button>
      </form>
    </div>
  );
};
