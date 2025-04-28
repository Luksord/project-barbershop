import css from './Services.module.css';

export const Services = () => {
  return (
    <div className={css.section}>
      <div className={css.subtextWrapper}>
        <div className={css.line} />
        <p className={css.subtext}>Spend your time with the best masters</p>
      </div>
      <h2 className={css.title}>Services and prices</h2>
      <div className={css.buttonWrapper}>
        <button type="button" className={css.button}>
          online-booking
        </button>
      </div>
    </div>
  );
};
