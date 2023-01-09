import { Box, Flex, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { INavItem } from '../../models/app';
import { Button } from '../Buttons/Button';
import styles from './Header.module.scss';
import { getHeaderStyles } from './_styles';

interface NavbarLargeProps {
  navItems: INavItem[];
}

export const NavbarLarge = ({ navItems }: NavbarLargeProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { x, y } = useWindowScroll();

  useEffect(() => {
    if (y > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [y]);

  const logoUrl = isScrolled
    ? '/assets/images/logo/logo-dark.png'
    : '/assets/images/logo/logo-white.png';

  return (
    <Box
      as="nav"
      {...getHeaderStyles(isScrolled)}
      className={`navbar fixed-top ${styles.navigationBar}`}
      transition="all .3s"
    >
      <Flex
        px="1rem"
        w={{ base: '100%', lg: '90%' }}
        m="auto"
        py="0.5rem"
        justify="space-between"
        className="container-fluid"
      >
        <NextLink className="navbar-brand" href="/" passHref>
          <Image src={logoUrl} alt="logo" w="80px" />
        </NextLink>

        <Box color="white">
          {navItems.map((navItem) => (
            <NextLink
              key={navItem.id}
              className={`nav-item mx-3 ${
                isScrolled ? 'text-dark' : 'text-light'
              }`}
              href={navItem.link}
              passHref
            >
              {navItem.name}
            </NextLink>
          ))}
        </Box>
        <Box>
          <Button
            title="Consumer Solutions"
            bg="transparent"
            color={isScrolled ? 'brand.blue' : 'gray.100'}
          />
          <Button
            title="Enterprise Solutions"
            bg={isScrolled ? 'brand.blue' : 'white'}
            color={isScrolled ? 'gray.100' : 'brand.blue'}
          />
        </Box>
      </Flex>
    </Box>
  );
};
