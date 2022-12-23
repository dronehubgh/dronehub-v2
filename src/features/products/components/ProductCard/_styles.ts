import { FlexProps, HeadingProps, TextProps } from '@chakra-ui/react';

export const cardStyles: FlexProps = {
  pos: 'relative',
  overflow: 'hidden',
  flexDir: 'column',
  bg: 'white',
  h: { base: '30rem', xl: '32rem' },
  w: { base: '20rem', lg: '26rem', xl: '28rem', '2xl': '32rem' },
  p: '2rem',
  boxSizing: 'border-box',
  rounded: 'md',
  shadow: 'md',
  my: '0.5rem',
  mx: 'auto',
};

export const headingStyles: HeadingProps = {
  size: 'lg',
};

export const textStyles: TextProps = {
  color: 'rgba(0, 0, 0, 0.5);',
  fontWeight: 400,
};

export const imageBoxStyles: FlexProps = {
  h: '300px',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
};
