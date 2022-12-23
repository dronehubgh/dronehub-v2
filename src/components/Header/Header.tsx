import { NavbarLarge } from './NavbarLarge';
import { v4 as uid } from 'uuid';
import { INavItem } from '../../models/app';
import { useMedia } from 'react-use';
import { NavbarSmall } from './NavbarSmall';

const navItems: INavItem[] = [
  {
    id: uid(),
    name: 'Products',
    link: '/products',
  },
  {
    id: uid(),
    name: 'Services',
    link: '/services',
  },
  {
    id: uid(),
    name: 'Extras',
    link: '/extras',
  },
  {
    id: uid(),
    name: 'Support',
    link: '/support',
  },
  {
    id: uid(),
    name: 'About us',
    link: '/about-us',
  },
];

export const Header = () => {
  const isMedium = useMedia('(min-width: 1024px)');
  return isMedium ? (
    <NavbarLarge navItems={navItems} />
  ) : (
    <NavbarSmall navItems={navItems} />
  );
};
