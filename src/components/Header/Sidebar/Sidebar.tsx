import css from './Sidebar.module.css';
import Logo from '../../../assets/images/icons.svg#icon-logo.svg';
import { media } from '../../../utils/contactData';

export const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <svg className={css.logo}>
        <use href={Logo} />
      </svg>
      <div className={css.subtextWrapper}>
        <div className={css.line} />
        <a href={media.instagramHref} className={css.subtext}>
          {media.instagram}
        </a>
        <a href={media.youtubeHref} className={css.subtext}>
          {media.youtube}
        </a>
      </div>
    </div>
  );
};
