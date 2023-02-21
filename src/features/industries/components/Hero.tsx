import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

interface IIndustryHeroProps {
  title: string;
  tagline: string;
  imageUrl: string;
}

export const IndustryHero = ({
  title,
  tagline,
  imageUrl,
}: IIndustryHeroProps) => {
  return (
    <Flex
      flexDir={{ base: 'column-reverse', lg: 'row' }}
      boxSizing="border-box"
      p="2rem"
      alignItems="center"
      minH="550px"
      bgColor="brand.darkBlue"
      bgImage="https://res.cloudinary.com/djmx11b6s/image/upload/v1676980667/donehub-assets/bg-overlay_rsqhzc.png"
      boxShadow={{ base: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)', lg: 'none' }}
    >
      <Box w={{ base: '85%', lg: '50%' }} p={{ base: '0.5rem', lg: '4rem' }}>
        <Image src={imageUrl} alt="" />
      </Box>
      <Box
        w={{ base: '85%', lg: '50%' }}
        p="4rem"
        textAlign={{ base: 'center', lg: 'left' }}
      >
        <Text
          fontSize={{ base: '1.5rem', lg: '2.5rem' }}
          fontWeight="bold"
          color="gray.100"
        >
          {title}
        </Text>
        <Text fontSize="lg" color="gray.300">
          {tagline}
        </Text>
      </Box>
    </Flex>
  );
};
