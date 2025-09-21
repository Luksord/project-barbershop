import css from './Sidebar.module.css';
import { ReactComponent as Logo } from '../../../assets/icons/icon-logo.svg';
import { media } from '../../../utils/contactData';

export const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <Logo className={css.logo} />
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
