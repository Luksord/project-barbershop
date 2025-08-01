import css from './Footer.module.css';
import { media } from '../../utils/contactData';

export const Footer = () => {
  return (
    <div className={css.section}>
      <div className={css.subtextWrapper}>
        <div className={css.line} />
        <a href={media.instagramHref} className={css.subtext}>
          {media.instagram}
        </a>
        <a href={media.youtubeHref} className={css.subtext}>
          {media.youtube}
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
