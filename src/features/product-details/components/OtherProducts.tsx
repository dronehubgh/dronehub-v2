import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { generateProductCards } from '../../../components';
import {
  IOverrides,
  ProductCard,
} from '../../../components/ProductCard/ProductCard';
import { commonPx } from '../../../consts';
import { latestReleases } from '../../../data/products';
import { capitalizeFirstLetter } from '../../../functions';
import { ProductSlider } from '../../products';

const styles: IOverrides = {
  card: {
    flexDir: 'column-reverse',
    shadow: 'none',
    borderWidth: '1px',
    borderColor: 'gray.300',
  },
};

interface Props {
  recommended: {
    outOfStock: boolean;
    description?: string;
    slug: string;
    type: string;
    series: string;
    industry: string;
    tagline: string;
    id: string;
    imageUrl: string;
    name: string;
  }[];
}

export const OtherProducts = ({ recommended }: Props) => {
  return (
    <Box px={commonPx}>
      <Text
        pb={5}
        fontSize={{ lg: '40px', md: '36px', base: '26px' }}
        fontWeight="700"
      >
        Other products you can buy{' '}
      </Text>

      <Box w="100%">
        <ProductSlider
          productCards={recommended.map((item) => (
            <ProductCard
              key={item.id}
              link={`/products/${item.slug}`}
              title={item.name}
              description={capitalizeFirstLetter(item.description || item.type)}
              imageUrl={item.imageUrl}
              restStyles={styles}
            />
          ))}
        />
      </Box>
    </Box>
  );
};
