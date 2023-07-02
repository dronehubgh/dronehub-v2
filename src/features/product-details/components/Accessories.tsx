import { Box, Grid, GridItem, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { borderCommon, commonPx } from '../../../consts';

interface IAccessoriesProps {
  productName: string;
  accessories: {
    name: string;
    imageUrl: string;
  }[];
}
export const Accessories = ({
  productName,
  accessories,
}: IAccessoriesProps) => {
  return (
    <Box px={commonPx} py="2rem">
      <Text
        pb={5}
        fontSize={{ lg: '40px', md: '36px', base: '26px' }}
        fontWeight="700"
      >
        Accessories for {productName}
      </Text>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
      >
        {accessories.map((accessory, index) => (
          <GridItem
            border={borderCommon}
            p={{ lg: '30px' }}
            my="1rem"
            key={`${accessory} + ${index}`}
          >
            <Image src={accessory.imageUrl} alt="" h="300px" m="auto" />
            <Text fontSize={{ base: '16px', lg: '18px' }} textAlign="center">
              {accessory.name}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
