import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface ServiceHeroBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  cta: ReactNode;
}
export const ServiceHeroBanner = ({
  title,
  description,
  imageUrl,
  cta,
}: ServiceHeroBannerProps) => {
  return (
    <Box
      minH="80vh"
      p={{ base: '2rem 2rem 0 2rem', lg: '2rem 0 0 2rem' }}
      bgColor="brand.darkBlue"
      bgImage="https://res.cloudinary.com/djmx11b6s/image/upload/v1676980667/donehub-assets/bg-overlay_rsqhzc.png"
    >
      <Flex
        w={{ base: '100%', lg: '90%' }}
        ml={{ base: '-1rem', lg: 'auto' }}
        flexDir={{ base: 'column', lg: 'row' }}
        boxSizing="border-box"
        alignItems="center"
        justify="center"
      >
        <Flex
          justify={{ base: 'center', lg: 'flex-start' }}
          align={{ base: 'flex-end', lg: 'center' }}
          w={{ base: '100%', lg: '50%' }}
          h={{ base: '50vh', lg: '80vh' }}
        >
          <Box textAlign={{ base: 'center', lg: 'left' }}>
            <Text
              fontSize={{ base: '1.5rem', lg: '2.5rem' }}
              fontWeight="bold"
              color="white"
            >
              {title}
            </Text>
            <Text color="gray.200" my="1rem">
              {description}
            </Text>

            <Box mb={{ base: '2rem', lg: '0' }}>{cta}</Box>
          </Box>
        </Flex>
        <Box
          alignSelf="flex-end"
          bgColor="green"
          w={{ base: '100%', lg: '50%' }}
          h={{ base: '30vh', lg: '80vh' }}
          bg={`bottom / contain no-repeat url(${imageUrl})`}
        />
      </Flex>
    </Box>
  );
};
