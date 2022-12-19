import { Box, Heading } from '@chakra-ui/react';
import { string } from 'prop-types';
import React, { ReactNode } from 'react';
import { ProductSlider } from './Slider/ProductSlider';

interface ProductSectionProps {
  title: string;
  bgImageUrl: string;
  drones: ReactNode;
  accessories?: ReactNode;
}

export const ProductSection = ({
  title,
  bgImageUrl,
  drones,
  accessories,
}: ProductSectionProps) => {
  return (
    <Box
      bgImage={bgImageUrl}
      h="900px"
      bgSize="cover"
      p={{ base: '1rem 0 1rem 1rem', lg: '5rem 0 5rem 5rem' }}
    >
      <Box h="100%">
        <Heading
          pb="3rem"
          color="white"
          size="2xl"
          px={{ base: '4rem', md: '0', lg: '3rem' }}
          w={{ base: '100%', md: '70%', lg: '45%' }}
          m={{ base: 'auto', lg: '0' }}
        >
          {title}
        </Heading>
        {drones}
      </Box>
    </Box>
  );
};
