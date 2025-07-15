import JohnSmithMobile from '../../assets/images/johnsmith-mobile.jpg';
import JohnSmithMobileX2 from '../../assets/images/johnsmith-mobile@2x.jpg';
import JohnSmithTablet from '../../assets/images/johnsmith-tablet.jpg';
import JohnSmithTabletX2 from '../../assets/images/johnsmith-tablet@2.jpg';
import JohnSmithDesktop from '../../assets/images/johnsmith-desktop.jpg';
import JohnSmithDesktopX2 from '../../assets/images/johnsmith-desktop@2.jpg';
import MicheleDoeMobile from '../../assets/images/micheledoe-mobile.jpg';
import MicheleDoeMobileX2 from '../../assets/images/micheledoe-mobile@2x.jpg';
import MicheleDoeTablet from '../../assets/images/micheledoe-tablet.jpg';
import MicheleDoeTabletX2 from '../../assets/images/micheledoe-tablet@2.jpg';
import MicheleDoeDesktop from '../../assets/images/micheledoe-desktop.jpg';
import MicheleDoeDesktopX2 from '../../assets/images/micheledoe-desktop@2.jpg';
import AlanBlackMobile from '../../assets/images/alanblack-mobile.jpg';
import AlanBlackMobileX2 from '../../assets/images/alanblack-mobile@2x.jpg';
import AlanBlackTablet from '../../assets/images/alanblack-tablet.jpg';
import AlanBlackTabletX2 from '../../assets/images/alanblack-tablet@2.jpg';
import AlanBlackDesktop from '../../assets/images/alanblack-desktop.jpg';
import AlanBlackDesktopX2 from '../../assets/images/alanblack-desktop@2.jpg';
import InstagramIcon from '../../assets/images/icons.svg#icon-social-twitter.svg';
import TwitterIcon from '../../assets/images/icons.svg#icon-social-twitter.svg';
import FacebookIcon from '../../assets/images/icons.svg#icon-social-facebook.svg';
import LinkedinIcon from '../../assets/images/icons.svg#icon-social-linkedin.svg';
import css from './Barbers.module.css';

export interface SocialLinkProps {
  href: string;
  icon: string;
  alt: string;
}

interface barbersProps {
  images: {
    mobile: string;
    mobile2x: string;
    tablet: string;
    tablet2x: string;
    desktop: string;
    desktop2x: string;
  };
  alt: string;
  name: string;
  role: string;
  socialLinks: SocialLinkProps[];
}

const barbers: barbersProps[] = [
  {
    images: {
      mobile: JohnSmithMobile,
      mobile2x: JohnSmithMobileX2,
      tablet: JohnSmithTablet,
      tablet2x: JohnSmithTabletX2,
      desktop: JohnSmithDesktop,
      desktop2x: JohnSmithDesktopX2,
    },
    alt: 'man with slick dark hair, ear hole and heavely tattooed right arm',
    name: 'John Smith',
    role: 'Extreme Barber',
    socialLinks: [
      {
        href: 'https://instagram.com/johnsmith',
        icon: InstagramIcon,
        alt: 'Instagram',
      },
      {
        href: 'https://twitter.com/johnsmith',
        icon: TwitterIcon,
        alt: 'Twitter',
      },
      {
        href: 'https://facebook.com/johnsmith',
        icon: FacebookIcon,
        alt: 'Facebook',
      },
      {
        href: 'https://linkedin.com/in/johnsmith',
        icon: LinkedinIcon,
        alt: 'LinkedIn',
      },
    ],
  },
  {
    images: {
      mobile: MicheleDoeMobile,
      mobile2x: MicheleDoeMobileX2,
      tablet: MicheleDoeTablet,
      tablet2x: MicheleDoeTabletX2,
      desktop: MicheleDoeDesktop,
      desktop2x: MicheleDoeDesktopX2,
    },
    alt: 'smiling man with brown hair and facial hair wearing a white shirt',
    name: 'Michele Doe',
    role: 'Extreme Barber',
    socialLinks: [
      {
        href: 'https://instagram.com/micheledoe',
        icon: InstagramIcon,
        alt: 'Instagram',
      },
      {
        href: 'https://twitter.com/micheledoe',
        icon: TwitterIcon,
        alt: 'Twitter',
      },
      {
        href: 'https://facebook.com/micheledoe',
        icon: FacebookIcon,
        alt: 'Facebook',
      },
      {
        href: 'https://linkedin.com/in/micheledoe',
        icon: LinkedinIcon,
        alt: 'LinkedIn',
      },
    ],
  },
  {
    images: {
      mobile: AlanBlackMobile,
      mobile2x: AlanBlackMobileX2,
      tablet: AlanBlackTablet,
      tablet2x: AlanBlackTabletX2,
      desktop: AlanBlackDesktop,
      desktop2x: AlanBlackDesktopX2,
    },
    alt: 'man with big dark moustache',
    name: 'Alan Black',
    role: 'Extreme Barber',
    socialLinks: [
      {
        href: 'https://instagram.com/alanblack',
        icon: InstagramIcon,
        alt: 'Instagram',
      },
      {
        href: 'https://twitter.com/alanblack',
        icon: TwitterIcon,
        alt: 'Twitter',
      },
      {
        href: 'https://facebook.com/alanblack',
        icon: FacebookIcon,
        alt: 'Facebook',
      },
      {
        href: 'https://linkedin.com/in/alanblack',
        icon: LinkedinIcon,
        alt: 'LinkedIn',
      },
    ],
  },
];

const SocialLink = ({ href, icon, alt }: SocialLinkProps) => (
  <li className={css.linkContainer}>
    <a href={href} className={css.socialLink} aria-label={alt}>
      <svg className={css.socialIcon}>
        <use href={icon}></use>
      </svg>
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
              <img src={images.desktop} alt={alt} className={css.image} />
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
