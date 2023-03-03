import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const coverImage =
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1677534871/donehub-assets/dan-gold-4_qeimmq.png';

export const HomeBanner = () => {
  return (
    <Flex
      boxSizing="border-box"
      p="2rem"
      alignItems="center"
      justify="center"
      minH={{ base: '50vh', sm: '80vh', lg: '90vh' }}
      bg={`top / cover no-repeat url(${coverImage})`}
      boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.6)"
    >
      <Text
        maxW="650px"
        mx="auto"
        fontSize={{ base: '1.8rem', lg: '2.5rem' }}
        fontWeight="bold"
        color="gray.100"
        textAlign="center"
      >
        Customised Solutions & Reliable Support Designed for You
      </Text>
    </Flex>
  );
};
