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
    <Flex {...slideStyles} justify="center" align="center" py="4rem">
      <Box {...headerBoxStyles}>
        <Heading {...headingStyles}>{item.tagline}</Heading>
        <Text my="3">
          {item.description.startsWith(',')
            ? item.description.replace(',', '')
            : item.description}
        </Text>

        <Box
          maxW={{ base: '250px', lg: '100%' }}
          mx={{ base: 'auto', lg: 'left' }}
        >
          <ProductCTAButtons
            btn1Link={item.link}
            btn1Styles={{ borderColor: 'gray.100', color: 'gray.100' }}
            btn2Styles={{ bg: 'gray.100', color: 'brand.blue' }}
          />
        </Box>
      </Box>
      <Box {...imageBoxStyles}>
        <Image
          src={item.imageUrl}
          alt="product image"
          w={{ base: '80%', lg: '90%' }}
          m="auto"
          bgPos="center"
          bgSize="contain"
        />
      </Box>
    </Flex>
  );
};
