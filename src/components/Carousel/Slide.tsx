import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { ICarouselItem } from '../../models/app';
import { ProductCTAButtons } from '../Buttons/ProductCTAButtons';
import {
  headerBoxStyles,
  headingStyles,
  imageBoxStyles,
  slideStyles,
} from './_styles';

export const Slide = ({ item }: { item: ICarouselItem }) => {
  return (
    <Flex {...slideStyles}>
      <Box {...headerBoxStyles}>
        <Heading {...headingStyles}>{item.description}</Heading>
        <Text my="3">{item.tagline}</Text>

        <Box
          maxW={{ base: '250px', lg: '100%' }}
          mx={{ base: 'auto', lg: 'left' }}
        >
          <ProductCTAButtons
            btn1Link="#"
            btn1Styles={{ borderColor: 'gray.100', color: 'gray.100' }}
            btn2Styles={{ bg: 'gray.100', color: 'brand.blue' }}
          />
        </Box>
      </Box>
      <Box w="100%" {...imageBoxStyles}>
        <Image src={item.imageUrl} alt="product image" w="100%" m="auto" />
      </Box>
    </Flex>
  );
};
