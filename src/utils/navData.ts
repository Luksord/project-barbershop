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
