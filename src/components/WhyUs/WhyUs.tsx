import css from './WhyUs.module.css';

export const WhyUs = () => {
  return (
    <div className={css.section}>
      <div className={css.subtextWrapper}>
        <div className={css.line} />
        <p className={css.subtext}>Old traditional school</p>
      </div>
      <h2 className={css.title}>Why people come to us?</h2>
      <p className={css.text}>
        Only good things are said about us. But it's better to see and feel 1
        time than read 10 times.
      </p>
      <div className={css.statsGrid}>
        <div className={`${css.statBox} ${css.boxOne}`}>
          <div className={css.statWrapper}>
            <p className={css.statNumber}>600</p>
            <span className={css.span}>+</span>
          </div>
          <p className={css.statText}>Satisfied customers per day</p>
        </div>
        <div className={`${css.statBox} ${css.boxTwo}`}>
          <div className={css.statWrapper}>
            <p className={css.statNumber}>50</p>
            <span className={css.span}>+</span>
          </div>
          <p className={css.statText}>Awards for excellent service</p>
        </div>
        <div className={`${css.statBox} ${css.boxThree}`}>
          <div className={css.statWrapper}>
            <p className={css.statNumber}>20</p>
            <span className={css.span}>+</span>
          </div>
          <p className={css.statText}>Kyiv’s best professional barbers</p>
        </div>
        <div className={`${css.statBox} ${css.boxFour}`}>
          <div className={css.statWrapper}>
            <p className={css.statNumber}>100</p>
            <span className={css.span}>+</span>
          </div>
          <p className={css.statText}>Gifts for regular customers</p>
        </div>
      </div>
    </div>
  );
};
