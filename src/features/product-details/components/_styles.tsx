import { GridProps, TextProps } from '@chakra-ui/react';

export const galleryGridStyles: GridProps = {
  autoColumns: '100px',
  gap: 5,
  py: '3rem',
  mx: '1rem',
  bg: 'white',
  templateRows: { lg: 'repeat(2, 1fr)', base: 'repeat(3, 1fr)' },
  templateColumns: { lg: 'repeat(3, 1fr)', base: 'repeat(4, 1fr)' },
};

export const descHeaderStyles: TextProps = {
  fontSize: { lg: '24px', base: '12px' },
  fontWeight: '700',
  textAlign: { lg: 'left' },
  mb: '1rem',
};
