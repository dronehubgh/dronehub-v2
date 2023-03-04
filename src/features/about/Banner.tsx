import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const coverImage =
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1677918284/donehub-assets/Mask_1_1_kdonef.png';

export const AboutBanner = () => {
  return (
    <Flex
      boxSizing="border-box"
      p="2rem"
      alignItems="center"
      justify="center"
      minH={{ base: '60vh', sm: '80vh', lg: '90vh' }}
      bg={`center / cover no-repeat url(${coverImage})`}
      boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.6)"
      flexDir="column"
    >
      <Heading
        size={{ base: 'lg', lg: '2xl' }}
        maxW="650px"
        mx="auto"
        color="gray.100"
        textAlign="center"
      >
        Drone Products and Solutions Provider
      </Heading>
      <Text
        fontSize={{ base: 'lg', lg: 'xl' }}
        py="0.5rem"
        maxW="650px"
        mx="auto"
        color="gray.100"
        textAlign="center"
      >
        Creating endless possibilities for you
      </Text>
    </Flex>
  );
};
