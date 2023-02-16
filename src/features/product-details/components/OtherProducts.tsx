import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { generateProductCards } from '../../../components';
import { IOverrides } from '../../../components/ProductCard/ProductCard';
import { commonPx } from '../../../consts';
import { latestReleases } from '../../../data/products';
import { ProductSlider } from '../../products';

const styles: IOverrides = {
  card: {
    flexDir: 'column-reverse',
    shadow: 'none',
    borderWidth: '1px',
    borderColor: 'gray.300',
  },
};

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
        <ProductSlider
          productCards={generateProductCards(latestReleases, styles)}
        />
      </Box>
    </Box>
  );
};
