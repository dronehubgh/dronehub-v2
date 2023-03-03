import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const HowItWorks = () => {
  return (
    <Box w={{ base: '90%', lg: '80%' }} mx="auto" my="4rem">
      <Heading textAlign="center">How It Works</Heading>

      <Flex
        py="2rem"
        justify="center"
        fontWeight="bold"
        my="2rem"
        flexDir={{ base: 'column', lg: 'row' }}
        textAlign="center"
        px="1rem"
        borderColor="gray.600"
        borderTopWidth={{ base: '0', lg: '1px' }}
        borderBottomWidth={{ base: '0', lg: '1px' }}
      >
        <Text
          px="2rem"
          py="1rem"
          borderRight={{ base: 'none', lg: '1px' }}
          borderBottom={{ base: '1px', lg: 'none' }}
          borderTop={{ base: '1px', lg: 'none' }}
        >
          Rent
        </Text>
        <Text
          px="2rem"
          py="1rem"
          borderRight={{ base: 'none', lg: '1px' }}
          borderBottom={{ base: '1px', lg: 'none' }}
        >
          Pick up
        </Text>
        <Text
          px="2rem"
          py="1rem"
          borderRight={{ base: 'none', lg: '1px' }}
          borderBottom={{ base: '1px', lg: 'none' }}
        >
          Fly Drone
        </Text>
        <Text
          px="2rem"
          py="1rem"
          borderRight={{ base: 'none', lg: '1px' }}
          borderBottom={{ base: '1px', lg: 'none' }}
        >
          Return
        </Text>
      </Flex>
    </Box>
  );
};
