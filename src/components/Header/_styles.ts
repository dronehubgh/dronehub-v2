import { BoxProps } from '@chakra-ui/react';

export const getHeaderStyles = (isScrolled: boolean): BoxProps | undefined => {
  if (isScrolled) {
    return {
      bg: 'white',
      color: 'gray.800 !important',
    };
  }
};
