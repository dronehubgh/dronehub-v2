import { NavbarLarge } from './NavbarLarge';
import { v4 as uid } from 'uuid';
import { INavItem } from '../../models/app';
import { NavbarSmall } from './NavbarSmall';
import { useMediaQuery } from '@chakra-ui/react';

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
    link: '/about',
  },
];

export const Header = () => {
  const [isLarge] = useMediaQuery('(min-width: 1024px)');

  return (
    <>
      {isLarge ? (
        <NavbarLarge navItems={navItems} />
      ) : (
        <NavbarSmall navItems={navItems} />
      )}
    </>
  );
};
