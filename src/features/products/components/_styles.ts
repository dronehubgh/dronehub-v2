import {
  BoxProps,
  FlexProps,
  HeadingProps,
  ImageProps,
  TextProps,
} from '@chakra-ui/react';

export const CTAStyles: FlexProps = {
  justify: { base: 'center', lg: 'flex-start' },
  flexDir: { base: 'column', lg: 'row' },
};

export const categoriesStyles: FlexProps = {
  w: { base: '100%', md: '90%' },
  m: 'auto',
  justify: 'space-evenly',
  align: 'center',
  my: '4rem',
};

export const categoryStyles: BoxProps = {
  textAlign: 'center',
  w: '8rem',
  h: { base: '50px', md: '110px' },
  position: 'relative',
};

export const categoryImgStyles: ImageProps = {
  m: 'auto',
  w: { base: '25px', md: '3rem', lg: '80px' },
};

export const categoryTextStyles: TextProps = {
  fontSize: { base: '10px', md: '14px', lg: '16px' },
  position: 'absolute',
  bottom: '0',
  w: '100%',
  textAlign: 'center',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

export const productSection: { [key: string]: any } = {
  boxStyles: {
    h: { base: '800px', lg: '950px' },
    bgSize: 'cover',
    p: { base: '0px', md: '1rem', lg: '3rem 0 3rem 3rem' },
  },

  headingStyles: {
    color: 'white',
    size: { base: 'lg', md: 'xl', lg: '2xl' },
    px: { base: '1rem', xl: '4.5rem' },
    m: { base: 'auto', lg: '0' },
  } as HeadingProps,
};
