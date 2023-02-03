import { Box, Heading } from '@chakra-ui/react';
import { generateProductCards } from '..';
import { latestReleases } from '../../../data/products';
import { IOverrides } from './ProductCard/ProductCard';
import { ProductSlider } from './Slider/ProductSlider';

const styles: IOverrides = {
  image: {
    bg: 'linear-gradient(180deg, #9CDEF666 0%, #2480CD66 100%);',
    borderRadius: 'md',
    mb: '1rem',
  },
  card: {
    flexDir: 'column-reverse',
    shadow: 'none',
    p: '0px',
  },
};

export const LatestReleases = () => {
  return (
    <Box mb="3rem" p={{ base: '1rem', lg: '3rem 0 3rem 3rem' }}>
      <Heading
        size="lg"
        pt="2rem"
        pb="3rem"
        px={{ base: '1rem', xl: '4.5rem' }}
      >
        Latest Releases
      </Heading>
      <ProductSlider
        productCards={generateProductCards(latestReleases, styles)}
      />
    </Box>
  );
};
