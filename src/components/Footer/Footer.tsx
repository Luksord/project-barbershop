import css from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={css.section}>
      <div className={css.subtextWrapper}>
        <div className={css.line} />
        <a href="https://instagram.com/barbershop" className={css.link}>
          <p className={css.subtext}>Instagram</p>
        </a>
        <a href="https://youtube.com/barbershop" className={css.link}>
          <p className={css.subtext}>Youtube</p>
        </a>
      </div>
      <div className={css.textWrapper}>
        <svg className={css.icon}>
          <use />
        </svg>
        <p className={css.text}>Copyright 2020</p>
      </div>
    </div>
  );
};
