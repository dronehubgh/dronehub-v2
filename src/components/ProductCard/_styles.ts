import { FlexProps, HeadingProps, TextProps } from '@chakra-ui/react';

export const cardStyles: FlexProps = {
  pos: 'relative',
  overflow: 'hidden',
  flexDir: 'column',
  bg: 'white',
  h: '26rem',
  maxW: '24rem',
  p: '1.5rem',
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
