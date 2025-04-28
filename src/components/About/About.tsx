import css from './About.module.css';

export const About = () => {
  return (
    <div className={css.section}>
      <div className={css.subtextWrapper}>
        <div className={css.line} />
        <p className={css.subtext}>About</p>
      </div>
      <h2 className={css.title}>Best Barbershop in your city</h2>
      <p className={css.text}>
        If you want to add more confidence to your image, you should visit us
      </p>
      <p
        className={css.text}
        style={{ fontSize: '14px', marginBottom: '40px' }}
      >
        We are a team that never stops at what has been achieved and are thirsty
        for changes. And when you fall into the hands of our master, you will
        never be the same again. We are a team that is always "on the same wave"
        with clients. Therefore, we are always ready to improve everyone who
        comes to us!
      </p>
      <button type="button" className={css.button}>
        online-booking
      </button>
    </div>
  );
};
