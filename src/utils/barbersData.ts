import JohnSmithMobile from '../assets/images/johnsmith-mobile.jpg';
import JohnSmithMobileX2 from '../assets/images/johnsmith-mobile@2x.jpg';
import JohnSmithTablet from '../assets/images/johnsmith-tablet.jpg';
import JohnSmithTabletX2 from '../assets/images/johnsmith-tablet@2.jpg';
import JohnSmithDesktop from '../assets/images/johnsmith-desktop.jpg';
import JohnSmithDesktopX2 from '../assets/images/johnsmith-desktop@2.jpg';
import MicheleDoeMobile from '../assets/images/micheledoe-mobile.jpg';
import MicheleDoeMobileX2 from '../assets/images/micheledoe-mobile@2x.jpg';
import MicheleDoeTablet from '../assets/images/micheledoe-tablet.jpg';
import MicheleDoeTabletX2 from '../assets/images/micheledoe-tablet@2.jpg';
import MicheleDoeDesktop from '../assets/images/micheledoe-desktop.jpg';
import MicheleDoeDesktopX2 from '../assets/images/micheledoe-desktop@2.jpg';
import AlanBlackMobile from '../assets/images/alanblack-mobile.jpg';
import AlanBlackMobileX2 from '../assets/images/alanblack-mobile@2x.jpg';
import AlanBlackTablet from '../assets/images/alanblack-tablet.jpg';
import AlanBlackTabletX2 from '../assets/images/alanblack-tablet@2.jpg';
import AlanBlackDesktop from '../assets/images/alanblack-desktop.jpg';
import AlanBlackDesktopX2 from '../assets/images/alanblack-desktop@2.jpg';
// import InstagramIcon from '../assets/images/icons.svg#icon-social-twitter.svg';
// import TwitterIcon from '../assets/images/icons.svg#icon-social-twitter.svg';
// import FacebookIcon from '../assets/images/icons.svg#icon-social-facebook.svg';
// import LinkedinIcon from '../assets/images/icons.svg#icon-social-linkedin.svg';
import { ReactComponent as InstagramIcon } from '../assets/icons/icon-social-instagram.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/icon-social-twitter.svg';
import { ReactComponent as FacebookIcon } from '../assets/icons/icon-social-facebook.svg';
import { ReactComponent as LinkedinIcon } from '../assets/icons/icon-social-linkedin.svg';

export interface SocialLinkProps {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
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

export const barbers: barbersProps[] = [
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
