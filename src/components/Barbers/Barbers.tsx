import css from './Barbers.module.css';

export const Barbers = () => {
  return (
    <div className={css.section}>
      <div className={css.subtextWrapper}>
        <div className={css.line} />
        <p className={css.subtext}>For true enjoyers of the atmosphere</p>
      </div>
      <h2 className={css.title}>Our barbers</h2>
    </div>
  );
};
