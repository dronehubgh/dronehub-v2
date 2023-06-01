import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Button } from './Buttons/Button';

export const ReadyForMore = () => {
  return (
    <Flex
      justify="center"
      align={{ base: 'center', lg: 'flex-start' }}
      h={{ base: '400px', lg: '700px' }}
      bgImage="https://res.cloudinary.com/djmx11b6s/image/upload/v1675904529/donehub-assets/Accesories/ready-for-more-bg_dpjedm.png"
      bgSize={'cover'}
      bgPos="center"
      pt={{ base: '1rem', lg: '4rem' }}
    >
      <Box>
        <Text
          fontSize={{ base: '4xl', lg: '7xl' }}
          color="brand.blue"
          fontWeight="bold"
        >
          Ready for more?
        </Text>
        <Flex
          justify="center"
          align="center"
          flexDir={{ base: 'column', lg: 'row' }}
          gap="0.5rem"
          my="1rem"
        >
          <Link href="tel:+233554460055">
            <Button title="Talk to Sales" w={{ base: '90%', lg: '150px' }} />
          </Link>
          <Button
            title="Locate store"
            w={{ base: '90%', lg: '150px' }}
            bg="brand.blue"
            color="gray.100"
          />
        </Flex>
      </Box>
    </Flex>
  );
};
