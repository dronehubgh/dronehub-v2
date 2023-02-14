import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { generateProductCards } from '../../../components';
import { commonPx } from '../../../consts';
import { latestReleases } from '../../../data/products';
import { ProductSlider } from '../../products';

export const OtherProducts = () => {
  return (
    <Box px={commonPx}>
      <Text
        pb={5}
        fontSize={{ lg: '40px', md: '36px', base: '26px' }}
        fontWeight="700"
      >
        Other drones you can buy{' '}
      </Text>

      <Box w="100%">
        <ProductSlider productCards={generateProductCards(latestReleases)} />
      </Box>
    </Box>
  );
};
