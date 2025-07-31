interface MenuProps {
  navName: string;
  navLink: string;
}

export const menu: MenuProps[] = [
  { navName: 'About', navLink: '#about' },
  { navName: 'Services and Prices', navLink: '#services' },
  {
    navName: 'Barbers',
    navLink: '#barbers',
  },
  { navName: 'Contacts', navLink: '#contacts' },
];

interface ContactProps {
  Name: string;
  Link: string;
}

export const contact: ContactProps[] = [
  { Name: 'Instagram', Link: 'https://instagram.com/barbershop' },
  { Name: 'Youtube', Link: 'https://youtube.com/barbershop' },
];
