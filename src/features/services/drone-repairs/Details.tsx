import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const Details = () => {
  return (
    <>
      <Text
        w={{ base: '90%', lg: '80%' }}
        mx="auto"
        my={{ base: '3rem', lg: '6rem' }}
      >
        One of the safety goals of flying a drone is to minimize the risk of
        fault or accident. But we understand that no matter how careful you may
        be, it’s possible for your drone to develop issues. Whether for business
        or personal use, we know how frustrating it can be when your drone
        becomes faulty.
        <span className="my-4 d-block">That’s why we’re here to help.</span> Our
        drone technicians have been trained to provide only the best of repair
        services, use high-quality spare parts and come up with innovative
        solutions. So you can be assured that your drones are in the best hands.
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
