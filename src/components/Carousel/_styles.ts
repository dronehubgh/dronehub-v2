import { BoxProps, FlexProps, HeadingProps } from '@chakra-ui/react';

export const carouselStyles: BoxProps = {
  h: '90vh',
  bgColor: '#000813',
  bgImage: '/assets/images/bg-overlay.svg',
  bgRepeat: 'no-repeat',
  bgSize: 'cover',
  py: { base: '0', md: '3rem', lg: '7rem' },
};

export const headingStyles: HeadingProps = {
  size: { base: 'lg', md: 'xl', lg: '2xl' },
};

export const slideStyles: FlexProps = {
  align: 'center',
  justify: { base: 'center', lg: 'normal' },
  px: '1rem',
  py: { base: '3rem', lg: '1rem' },
  display: { base: 'block', lg: 'flex' },
  h: '100%',
};

export const headerBoxStyles: BoxProps = {
  textAlign: { base: 'center', lg: 'left' },
  mt: { base: '4rem', lg: '' },
  w: { base: '100%', lg: '50%' },
};

export const imageBoxStyles: BoxProps = {
  my: { base: '30px', lg: '0' },
  w: { base: '100%', lg: '50%' },
  bgSize: 'contain',
};
