import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { ProductSlider } from '../../features';
import { ServiceCard } from './ServiceCard';
import { v4 as uid } from 'uuid';
import { OurServicesData } from '../../data';
import Link from 'next/link';

export const OurServices = () => {
  return (
    <Box
      bg="brand.blueGradientThree"
      p={{ base: '2rem', lg: '3rem 0 2rem 2rem' }}
      my="2rem"
    >
      <Flex justify="space-between" align="center">
        <Box
          mx="1rem"
          textAlign={{ base: 'center', lg: 'left' }}
          color="gray.100"
        >
          <Text fontSize="2rem" fontWeight="bold">
            Our Services
          </Text>
          <Text mb="1rem">Customised solutions. Reliable support.</Text>
        </Box>
        <Box mx="2rem">
          <Link href="/services">
            <Button
              px="2rem"
              variant="outline"
              color="gray.100"
              bgColor="transparent"
              _hover={{ bgColor: 'gray.100', color: 'brand.blue' }}
            >
              View all services
            </Button>
          </Link>
        </Box>
      </Flex>
      <ProductSlider
        productCards={OurServicesData.map((data) => (
          <ServiceCard
            key={uid()}
            title={data.title}
            description={data.description}
            imageUrl={data.imageUrl}
            btn1Link={data.link}
          />
        ))}
      />
    </Box>
  );
};
