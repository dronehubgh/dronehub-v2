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
      minH="90vh"
      bg={`top / cover no-repeat url(${coverImage})`}
      boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.6)"
    >
      <Text
        w="80%"
        mx="auto"
        fontSize={{ base: '1.5rem', lg: '2.5rem' }}
        fontWeight="bold"
        color="gray.100"
        textAlign="center"
      >
        Customised Solutions & Reliable
        <br /> Support Designed for You
      </Text>
    </Flex>
  );
};
