import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const HowWeOperate = () => {
  return (
    <>
      <Text fontWeight="bold" fontSize="2xl" textAlign="center">
        How We Operate
      </Text>
      <Text textAlign="center" my="0.5rem">
        Consultation, Diagnosis and Repair
      </Text>
      <Flex
        gap="2rem"
        flexDir={{ base: 'column', lg: 'row' }}
        w="80%"
        py="3rem"
        mx="auto"
        textAlign={{ base: 'center', lg: 'left' }}
      >
        <Box w={{ base: '100%', lg: '33%' }}>
          <Image
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677598377/donehub-assets/Consultation_rkqp4c.png"
            alt=""
            boxSize="70px"
            mx={{ base: 'auto', lg: '0' }}
          />
          <Text fontWeight="bold" my="0.5rem">
            Consultation
          </Text>
          <Text my="0.5rem">
            We listen to understand the problem with your drone.
          </Text>
        </Box>
        <Box w={{ base: '100%', lg: '33%' }}>
          <Image
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677598390/donehub-assets/Diagnosis_ujwg47.png"
            alt=""
            boxSize="70px"
            mx={{ base: 'auto', lg: '0' }}
          />
          <Text fontWeight="bold" my="0.5rem">
            Diagnosis
          </Text>
          <Text my="0.5rem">
            We perform diagnostic work to determine the underlying cause of your
            drone’s malfunction, repair works required, repair estimate and
            timeline.
          </Text>
        </Box>
        <Box w={{ base: '100%', lg: '33%' }}>
          <Image
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677598420/donehub-assets/Repair_dd0gkr.png"
            alt=""
            boxSize="70px"
            mx={{ base: 'auto', lg: '0' }}
          />
          <Text fontWeight="bold" my="0.5rem">
            Repair
          </Text>
          <Text my="0.5rem">
            With your approval, we perform the repair and test-fly your drone to
            ensure it works as expected.
          </Text>
        </Box>
      </Flex>
    </>
  );
};
