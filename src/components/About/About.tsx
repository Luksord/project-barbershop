import css from './About.module.css';
import tab_img1x1 from '../../assets/images/img-1_tab@1x.jpg';
import tab_img1x2 from '../../assets/images/img-1_tab@2x.jpg';
import tab_img2x1 from '../../assets/images/img-2_tab@1x.jpg';
import tab_img2x2 from '../../assets/images/img-2_tab@2x.jpg';
import desk_img1x1 from '../../assets/images/img-1_desk@1x.jpg';
import desk_img1x2 from '../../assets/images/img-1_desk@2x.jpg';
import desk_img2x1 from '../../assets/images/img-2_desk@1x.jpg';
import desk_img2x2 from '../../assets/images/img-2_desk@2x.jpg';

export const About = () => {
  return (
    <div className={css.section}>
      <div className={css.imagesContainer}>
        <div className={css.tablet}>
          <img
            src={tab_img1x1}
            srcSet={`${tab_img1x1} 1x, ${tab_img1x2} 2x`}
            alt="Neck shave"
            width="330"
            height="235"
          />
          <img
            src={tab_img2x1}
            srcSet={`${tab_img2x1} 1x, ${tab_img2x2} 2x`}
            alt="Nape shave"
            width="330"
            height="235"
          />
        </div>
        <div className={css.desktop}>
          <img
            src={desk_img1x1}
            srcSet={`${desk_img1x1} 1x, ${desk_img1x2} 2x`}
            alt="Neck shave"
            width="270"
            height="445"
          />
          <img
            src={tab_img2x1}
            srcSet={`${desk_img2x1} 1x, ${desk_img2x2} 2x`}
            alt="Nape shave"
            width="270"
            height="445"
          />
        </div>
      </div>
      <div className={css.informationContainer}>
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
          We are a team that never stops at what has been achieved and are
          thirsty for changes. And when you fall into the hands of our master,
          you will never be the same again. We are a team that is always "on the
          same wave" with clients. Therefore, we are always ready to improve
          everyone who comes to us!
        </p>
        <button type="button" className={css.button}>
          online-booking
        </button>
      </div>
    </div>
  );
};
