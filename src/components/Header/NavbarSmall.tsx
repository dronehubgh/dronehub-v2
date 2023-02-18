import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { MdShortText } from 'react-icons/md';
import { useWindowScroll } from 'react-use';
import { logoDark, logoLight } from '../../consts';
import { INavItem } from '../../models/app';
import { Button } from '../Buttons/Button';
import styles from './Header.module.scss';
import { getHeaderStyles } from './_styles';

interface NavbarLargeProps {
  navItems: INavItem[];
}

export const NavbarSmall = ({ navItems }: NavbarLargeProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();
  const [isScrolled, setIsScrolled] = useState(false);
  const { x, y } = useWindowScroll();

  useEffect(() => {
    if (y > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [y]);

  const logoUrl = isScrolled ? logoDark : logoLight;

  return (
    <Box
      as="nav"
      {...getHeaderStyles(isScrolled)}
      className={`navbar fixed-top ${styles.navigationBar}`}
      transition="all .3s"
    >
      <Flex
        px="1rem"
        w="90%"
        m="auto"
        py="0.5rem"
        justify="space-between"
        className="container-fluid"
      >
        <NextLink className="navbar-brand" href="/" passHref>
          <Image src={logoUrl} alt="logo" w="80px" />
        </NextLink>

        <>
          <IconButton
            aria-label="Hamburger"
            ref={btnRef}
            fontSize="3xl"
            variant="ghost"
            _hover={{ fontSize: '4xl' }}
            transition="all .3s"
            onClick={onOpen}
            icon={<MdShortText />}
          />

          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <NextLink className="navbar-brand" href="/" passHref>
                  <Image
                    src="assets/images/logo/logo-dark.png"
                    alt="logo"
                    w="70px"
                  />
                </NextLink>
              </DrawerHeader>
              <Divider />

              <DrawerBody>
                <Flex flexDir="column">
                  {navItems.map((navItem) => (
                    <NextLink
                      key={navItem.id}
                      className={`nav-item my-2 text-dark`}
                      href={navItem.link}
                      passHref
                    >
                      {navItem.name}
                    </NextLink>
                  ))}
                </Flex>
              </DrawerBody>

              <DrawerFooter>
                <Box>
                  <Button
                    title="Consumer Solutions"
                    bg="brand.blue"
                    color="gray.100"
                    w="90%"
                    mx="auto"
                  />
                  <Button title="Enterprise Solutions" w="90%" mx="auto" />
                </Box>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      </Flex>
    </Box>
  );
};
function MutableRefObject<T>() {
  throw new Error('Function not implemented.');
}
