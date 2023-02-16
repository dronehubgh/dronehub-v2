import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const Banner = () => {
  return (
    <Flex
      boxSizing="border-box"
      p="2rem"
      alignItems="center"
      minH="500px"
      bg="top / cover no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1676544493/donehub-assets/business-bg_ypmtbq.png)"
      boxShadow={{ base: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)', lg: 'none' }}
    >
      <Text
        w="80%"
        mx="auto"
        fontSize={{ base: '1.5rem', lg: '2.5rem' }}
        fontWeight="bold"
        color="gray.100"
        textAlign={{ base: 'center', lg: 'left' }}
      >
        {"It's"} Your World. <br />
        Own it. <br />
        Capture it. <br />
        Save it.
      </Text>
    </Flex>
  );
};
