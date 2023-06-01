import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const coverImage =
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1680287540/donehub-assets/store-background_grdqcm.png';

export const BlogBanner = () => {
  return (
    <Flex
      boxSizing="border-box"
      p="2rem"
      alignItems="center"
      justify="center"
      minH={{ base: '60vh', sm: '70vh', lg: '80vh' }}
      bg={`center / cover no-repeat url(${coverImage})`}
      boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.6)"
      flexDir="column"
    >
      <Heading
        size={{ base: 'lg', lg: 'xl' }}
        maxW="650px"
        mx="auto"
        color="gray.100"
        textAlign="center"
      >
        Dronehub Answers
      </Heading>
      <Text
        fontSize={{ base: 'lg', lg: 'xl' }}
        py="0.5rem"
        maxW="650px"
        mx="auto"
        color="gray.100"
        textAlign="center"
      >
        Your easy guide to everything drones
      </Text>
    </Flex>
  );
};
