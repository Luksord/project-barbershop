import JohnSmith from '../../assets/images/johnsmith.jpg';
import JohnSmithX2 from '../../assets/images/johnsmith@2x.jpg';
import MicheleDoe from '../../assets/images/micheledoe.jpg';
import MicheleDoeX2 from '../../assets/images/micheledoe@2x.jpg';
import AlanBlack from '../../assets/images/alanblack.jpg';
import AlanBlackX2 from '../../assets/images/alanblack@2x.jpg';
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
  img: string;
  img2x: string;
  alt: string;
  name: string;
  role: string;
  socialLinks: SocialLinkProps[];
}

const barbers: barbersProps[] = [
  {
    img: JohnSmith,
    img2x: JohnSmithX2,
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
    img: MicheleDoe,
    img2x: MicheleDoeX2,
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
    img: AlanBlack,
    img2x: AlanBlackX2,
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
        {barbers.map(({ img, img2x, alt, name, role, socialLinks }, index) => (
          <li className={css.barberContainer}>
            <img
              src={img}
              srcSet={`${img} 1x, ${img2x} 2x`}
              alt={alt}
              width="418"
              height="346"
            />
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
