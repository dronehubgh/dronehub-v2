import { Box, Heading } from '@chakra-ui/react';
import { groq } from 'next-sanity';
import { useEffect, useState } from 'react';
import {
  IOverrides,
  ProductCard,
} from '../../../components/ProductCard/ProductCard';
import { capitalizeFirstLetter } from '../../../functions';
import { client } from '../../../lib';
import { ProductSlider } from './Slider/ProductSlider';

const queryString = groq`
  *[_type == "latestReleasedDrones"] {
     "latestReleases": latestReleases[]->{
       "id": _id,
       "name": title,
       "imageUrl": mainImage.asset->url,
       "slug": slug.current,
       type
      }
}
`;
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

interface ILatestReleaseProduct {
  id: string;
  name: string;
  imageUrl: string;
  slug: string;
  type: string;
}
export const LatestReleases = () => {
  const [latestReleases, setLatestReleases] = useState<ILatestReleaseProduct[]>(
    []
  );
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await client.fetch(queryString);
      const latest: ILatestReleaseProduct[] = res[0].latestReleases;
      setLatestReleases(latest);
    };

    fetchProducts();
  }, []);
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
        productCards={latestReleases.map((item) => (
          <ProductCard
            key={item.id}
            link={`/products/${item.slug}`}
            title={item.name}
            description={capitalizeFirstLetter(item.type)}
            imageUrl={item.imageUrl}
            restStyles={styles}
          />
        ))}
      />
    </Box>
  );
};
