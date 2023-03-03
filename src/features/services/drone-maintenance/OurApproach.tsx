import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';

export const OurApproach = () => {
  return (
    <Box
      bgColor="brand.blue"
      my="2rem"
      py="4rem"
      bgImage="/assets/images/bg-overlay.svg"
    >
      <Box w={{ base: '90%', lg: '80%' }} mx="auto" color="gray.100">
        <Heading
          textAlign={{ base: 'center', lg: 'left' }}
          color="white"
          py="2rem"
        >
          Our Approach
        </Heading>
        <Text fontWeight="bold" my="1rem">
          Our standard maintenance program includes:
        </Text>
        <UnorderedList mb="2rem" lineHeight="10">
          <ListItem>
            Inspection and assessment of the hardware and software components of
            the drone.
          </ListItem>
          <ListItem>
            Identification of possible issues that could impair the drone and
            its safe operations.
          </ListItem>
          <ListItem>
            Recommendation of corrective actions, including repair works from
            any issues identified.
          </ListItem>
          <ListItem>
            Carrying out routine works, including general cleaning of the drone.
          </ListItem>
          <ListItem>
            Development of a customized drone maintenance schedule to meet your
            needs.
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};
