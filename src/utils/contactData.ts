export interface ContactProps {
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
}

export const contact: ContactProps = {
  phone: '+38 044 111 11 11',
  phoneHref: 'tel:+380441111111',
  email: 'barbershop@email.com',
  emailHref: 'mailto:barbershop@email.com',
};

export interface MediaProps {
  instagram: string;
  instagramHref: string;
  youtube: string;
  youtubeHref: string;
}

export const media: MediaProps = {
  instagram: 'Instagram',
  instagramHref: 'https://instagram.com/barbershop',
  youtube: 'YouTube',
  youtubeHref: 'https://youtube.com/barbershop',
};
