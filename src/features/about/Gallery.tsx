import { Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';

export const Gallery = () => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
      templateRows={{ base: 'repeat(4, 1fr)', lg: 'repeat(2, 1fr)' }}
      gap="10px"
      w="90%"
      mx="auto"
    >
      <GridItem
        minH={{ base: '200px', lg: '300px' }}
        bg="center / cover no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1677919959/donehub-assets/design-1_tbmbon.png)"
      />
      <GridItem
        minH={{ base: '200px', lg: '300px' }}
        bg="center / cover no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1677919959/donehub-assets/design-2_kmssys.png)"
        colSpan={{ base: 1, lg: 2 }}
      />

      <GridItem
        minH={{ base: '200px', lg: '300px' }}
        bg="center / cover no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1677919959/donehub-assets/design-3_bmuzoq.png)"
      />

      <GridItem
        minH={{ base: '200px', lg: '300px' }}
        bg="center / cover no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1677919959/donehub-assets/design-4_mp8tgp.png)"
        colSpan={{ base: 1, lg: 2 }}
      />
    </Grid>
  );
};
