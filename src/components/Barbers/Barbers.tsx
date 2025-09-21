import css from './Barbers.module.css';
import { barbers, SocialLinkProps } from './../../utils/barbersData';

const SocialLink = ({ href, icon: Icon, alt }: SocialLinkProps) => (
  <li className={css.linkContainer}>
    <a href={href} className={css.socialLink} aria-label={alt}>
      <Icon className={css.icon} />
    </a>
  </li>
);

export const Barbers = () => {
  return (
    <div className={css.section}>
      <div className={css.subtextWrapper}>
        <div className={css.line} />
        <p className={css.subtext}>For true enjoyers of the atmosphere</p>
      </div>
      <h2 className={css.title}>Our barbers</h2>
      <ul className={css.barbersList}>
        {barbers.map(({ images, alt, name, role, socialLinks }) => (
          <li key={name} className={css.barberContainer}>
            <picture>
              <source
                media="(min-width: 1600px)"
                srcSet={`${images.desktop} 1x, ${images.desktop2x} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${images.tablet} 1x, ${images.tablet2x} 2x`}
              />
              <source
                media="(max-width: 767px)"
                srcSet={`${images.mobile} 1x, ${images.mobile2x} 2x`}
              />
              <img
                src={images.desktop}
                alt={alt}
                className={css.image}
                loading="lazy"
              />
            </picture>
            <div className={css.barberInfo}>
              <h3 className={css.name}>{name}</h3>
              <p className={css.role}>{role}</p>
              <ul className={css.socialLinks}>
                {socialLinks.map((link, i) => (
                  <SocialLink key={i} {...link} />
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
