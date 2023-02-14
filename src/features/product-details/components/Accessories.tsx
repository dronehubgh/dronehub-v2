import { Box, Grid, GridItem, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { borderCommon, commonPx } from '../../../consts';

export const Accessories = () => {
  return (
    <Box px={commonPx} py="2rem">
      <Text
        pb={5}
        fontSize={{ lg: '40px', md: '36px', base: '26px' }}
        fontWeight="700"
      >
        Accessories for Mavic Mini
      </Text>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
      >
        <GridItem border={borderCommon} p={{ lg: '30px' }} my="1rem">
          <Image
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1675893458/donehub-assets/Accesories/Acc_1_nv0ovi.png"
            alt=""
            h="300px"
            m="auto"
          />
          <Text fontSize={{ base: '16px', lg: '18px' }} textAlign="center">
            Mavic Mini Intelligent Flight Battery
          </Text>
        </GridItem>
        <GridItem border={borderCommon} p={{ lg: '30px' }} my="1rem">
          <Image
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1675893458/donehub-assets/Accesories/Acc_2_muycao.png"
            alt=""
            h="300px"
            m="auto"
          />
          <Text fontSize={{ base: '16px', lg: '18px' }} textAlign="center">
            Mavic Mini Bag+
          </Text>
        </GridItem>
        <GridItem border={borderCommon} p={{ lg: '30px' }} my="1rem">
          <Image
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1675893472/donehub-assets/Accesories/Acc_3_jzvjtt.png"
            alt=""
            h="300px"
            m="auto"
          />
          <Text fontSize={{ base: '16px', lg: '18px' }} textAlign="center">
            Mavic Mini Propelller
          </Text>
        </GridItem>
        <GridItem border={borderCommon} p={{ lg: '30px' }} my="1rem">
          <Image
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1675893461/donehub-assets/Accesories/Acc_4_idfxwt.png"
            alt=""
            h="300px"
            m="auto"
          />
          <Text fontSize={{ base: '16px', lg: '18px' }} textAlign="center">
            Mavic Mini Propeller Guard
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
