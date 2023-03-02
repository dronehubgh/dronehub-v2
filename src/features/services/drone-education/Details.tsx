import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const Details = () => {
  return (
    <>
      <Text
        w={{ base: '90%', lg: '80%' }}
        mx="auto"
        my={{ base: '3rem', lg: '6rem' }}
        lineHeight="10"
      >
        Drone Education is our way of sharing information, guides and tutorials
        with new and existing customers relating to a drone purchase. It is also
        our way of contributing to a safer ecosystem as we aim to minimize drone
        risks, incidents and accidents. We organize drone open days and offer
        tutorial sessions around our drone platforms targeted at customers,
        students, and businesses.
      </Text>

      <Box
        w={{ base: '90%', lg: '80%' }}
        mx="auto"
        my={{ base: '3rem', lg: '6rem' }}
      >
        <Image
          src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677597419/donehub-assets/Rectangle_tnmvgq.png"
          alt=""
        />
      </Box>
    </>
  );
};
