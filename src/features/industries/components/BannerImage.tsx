import { Box } from '@chakra-ui/react';
import React from 'react';

interface IBannerImageProps {
  imageUrl: string;
}
export const BannerImage = ({ imageUrl }: IBannerImageProps) => {
  return (
    <Box
      bg={`center / cover no-repeat url(${imageUrl})`}
      my="3rem"
      mx="auto"
      borderRadius="md"
      h={{ base: '350px', lg: '500px' }}
      w={{ base: '90%', lg: '80%' }}
      boxShadow="lg"
    />
  );
};
