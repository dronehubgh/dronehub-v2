import { Box, Grid, GridItem, GridItemProps, Image } from '@chakra-ui/react';
import React from 'react';
import { pxHalf } from '../../../consts';

const gridItemStyles: GridItemProps = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
};

export const Gallery = () => {
  return (
    <Box>
      <Grid
        autoColumns="100px"
        gap={5}
        py={pxHalf}
        mx="1rem"
        bg="white"
        templateRows={{ lg: 'repeat(2, 1fr)', base: 'repeat(4, 1fr)' }}
        templateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(4, 1fr)' }}
      >
        <GridItem
          {...gridItemStyles}
          rowSpan={{ base: 1, lg: 2 }}
          colSpan={{ lg: 1, base: 4 }}
          bgColor=" rgba(173, 215, 129, 0.2)"
        >
          <Image src="/assets/images/drones/mavic/Mavic_Mini_2.png" alt="" />
        </GridItem>
        <GridItem
          {...gridItemStyles}
          colSpan={{ lg: 2, base: 4 }}
          bgColor=" rgba(154, 221, 245, 0.2)"
        >
          <Image src="/assets/images/drones/mavic/Mavic_Mini_2.png" alt="" />
        </GridItem>
        <GridItem
          {...gridItemStyles}
          colSpan={{ lg: 1, base: 2 }}
          bgColor=" rgba(173, 215, 129, 0.2)"
        >
          <Image src="/assets/images/drones/mavic/Mavic_Mini_2.png" alt="" />
        </GridItem>
        <GridItem
          {...gridItemStyles}
          colSpan={{ lg: 1, base: 2 }}
          bgColor=" rgba(253, 203, 102, 0.2)"
        >
          <Image src="/assets/images/drones/mavic/Mavic_Mini_2.png" alt="" />
        </GridItem>
      </Grid>
    </Box>
  );
};
