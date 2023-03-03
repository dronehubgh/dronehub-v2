import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const ConsultingApproach = () => {
  return (
    <Box w={{ base: '90%', lg: '80%' }} mx="auto" my="4rem">
      <Heading>Our Consulting Approach</Heading>
      <Text my="1rem">
        Our approach to projects is holistic by taking into consideration vital
        elements that form the foundation of a successful drone program.
      </Text>
      <Flex
        bgColor="rgba(255, 170, 0, 0.2)"
        py="2rem"
        justify="center"
        fontWeight="bold"
        my="2rem"
        flexDir={{ base: 'column', lg: 'row' }}
        textAlign="center"
        px="1rem"
      >
        <Text
          px="2rem"
          py="1rem"
          borderRight={{ base: 'none', lg: '1px' }}
          borderBottom={{ base: '1px', lg: 'none' }}
          borderTop={{ base: '1px', lg: 'none' }}
        >
          Drone platform
        </Text>
        <Text
          px="2rem"
          py="1rem"
          borderRight={{ base: 'none', lg: '1px' }}
          borderBottom={{ base: '1px', lg: 'none' }}
        >
          Payload
        </Text>
        <Text
          px="2rem"
          py="1rem"
          borderRight={{ base: 'none', lg: '1px' }}
          borderBottom={{ base: '1px', lg: 'none' }}
        >
          Software
        </Text>
        <Text
          px="2rem"
          py="1rem"
          borderRight={{ base: 'none', lg: '1px' }}
          borderBottom={{ base: '1px', lg: 'none' }}
        >
          Training
        </Text>
        <Text
          px="2rem"
          py="1rem"
          borderRight={{ base: 'none', lg: '1px' }}
          borderBottom={{ base: '1px', lg: 'none' }}
        >
          Support
        </Text>
        <Text px="2rem" py="1rem" borderBottom={{ base: '1px', lg: 'none' }}>
          Support
        </Text>
      </Flex>
    </Box>
  );
};
