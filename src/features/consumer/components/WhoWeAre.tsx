import { Box, BoxProps, Flex } from '@chakra-ui/react';
import React, { CSSProperties } from 'react';

const boxStyle: BoxProps = {
  maxW: { base: '350px', lg: 'none' },
  minW: { base: 'none', lg: '300px' },
  bgColor: 'white',
  px: '3rem',
  py: '1rem',
  fontWeight: 'bold',
  mx: '1rem',
};

export const WhoWeAre = () => {
  return (
    <Flex
      my="4rem"
      minH={{ base: '700px', lg: '500px' }}
      bg="center / cover no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1677326644/donehub-assets/DJI_Mini_2_Lifestyle_Family_Global_Version_cj15jg.png)"
      justify={{ base: 'flex-end', lg: 'center' }}
      align={{ base: 'center', lg: 'flex-end' }}
      textAlign="center"
      py="2rem"
      gap="20px"
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <Box {...boxStyle}>A community you can be part of</Box>
      <Box {...boxStyle}>We support your vision to do more</Box>
      <Box {...boxStyle}>
        A drone products and solutions provider you can trust
      </Box>
    </Flex>
  );
};
