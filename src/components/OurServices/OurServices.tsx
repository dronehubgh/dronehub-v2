import { Box, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { ProductSlider } from '../../features';
import { ServiceCard } from './ServiceCard';
import { v4 as uid } from 'uuid';
import { OurServicesData } from '../../data';

export const OurServices = () => {
  return (
    <Box
      bg="brand.blueGradientThree"
      p={{ base: '2rem', lg: '3rem 0 2rem 2rem' }}
      my="2rem"
    >
      <Box mx="1rem" textAlign={{ base: 'center', lg: 'left' }}>
        <Text fontSize="2rem" fontWeight="bold" color="gray.100">
          Our Services
        </Text>
        <Text mb="1rem" color="gray.100">
          Customised solutions. Reliable support.
        </Text>
      </Box>
      <ProductSlider
        productCards={OurServicesData.map((data) => (
          <ServiceCard
            key={uid()}
            title={data.title}
            description={data.description}
            imageUrl={data.imageUrl}
          />
        ))}
      />
    </Box>
  );
};
