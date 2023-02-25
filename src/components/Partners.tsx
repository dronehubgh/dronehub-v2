import { Box, Flex, Heading, Image, ImageProps } from '@chakra-ui/react';
import React from 'react';

const imageStyles: ImageProps = {
  w: { base: '150px', lg: '200px' },
  my: '1rem',
  objectFit: 'contain',
};
export const Partners = () => {
  return (
    <Box textAlign="center" my="5rem" w={{ base: '100%', lg: '80%' }} mx="auto">
      <Heading size={{ base: 'lg', lg: 'xl' }} px="4rem">
        Meet Our Global Partners
      </Heading>
      <Flex wrap="wrap" justify="space-around" align="center">
        <Image
          w="100px"
          src="https://res.cloudinary.com/djmx11b6s/image/upload/v1676551848/donehub-assets/partners-logos/dji_logo_titan_rgb_1_zuu3na.png"
          alt=""
        />
        <Image
          {...imageStyles}
          src="https://res.cloudinary.com/djmx11b6s/image/upload/v1676551848/donehub-assets/partners-logos/pgytech_1_aij88g.png"
          alt=""
        />
        <Image
          {...imageStyles}
          src="https://res.cloudinary.com/djmx11b6s/image/upload/v1676551848/donehub-assets/partners-logos/dedrone-1_1_xfn140.png"
          alt=""
        />
        <Image
          {...imageStyles}
          src="https://res.cloudinary.com/djmx11b6s/image/upload/v1676551848/donehub-assets/partners-logos/image-0_1_nlrjhx.png"
          alt=""
        />
      </Flex>
    </Box>
  );
};
