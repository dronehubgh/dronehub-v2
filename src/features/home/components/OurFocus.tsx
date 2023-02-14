import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Button } from '../../../components';

export const OurFocus = () => {
  return (
    <Box bg="rgba(216, 216, 216, 0.15)">
      <Flex
        align="center"
        h={{ base: '', lg: '650px' }}
        flexDir={{ base: 'column', lg: 'row' }}
        overflow="hidden"
      >
        <Box p={{ base: '2rem', lg: '4rem' }} w={{ base: '90%', lg: '50%' }}>
          <Text my="1rem">FOCUS</Text>
          <Heading size={{ base: 'lg', md: 'xl', lg: '2xl', xxl: '3xl' }}>
            On creating and capturing timeless memories
          </Heading>
          <Text fontSize="1.2rem" w="90%" my="2rem">
            See how professionals and consumers trust us for their drone
            solutions
          </Text>
          <Flex
            gap="0.5rem"
            w={{ lg: '80%' }}
            flexDir={{ base: 'column', md: 'row' }}
          >
            <Button title="Talk to a Rep" />
            <Button title="Explore Drone" bg="brand.blue" color="gray.100" />
          </Flex>
        </Box>
        <Flex
          w={{ base: '100%', lg: '50%' }}
          justify={{ base: 'center', lg: 'flex-end' }}
        >
          <Box
            className="focus-section-design"
            w={{ base: '330px', md: '400px', lg: '550px', xl: '700px' }}
            h={{ base: '330px', md: '400px', lg: '550px', xl: '700px' }}
            // borderWidth={{ base: '60px', md: '80px', lg: '120px' }}
            borderStyle="solid"
            borderColor="background: rgba(6, 69, 164, 0.05)"
            borderRadius="100%"
            mb={{ base: '1rem', lg: '0' }}
            bg="center / contain no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1676050310/donehub-assets/Vector_xssrlw.png)"
            // bg="center / cover no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1676031491/donehub-assets/focus1_one0o0.png)"
          />
        </Flex>
      </Flex>
    </Box>
  );
};
