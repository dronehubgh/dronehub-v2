import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { ICarouselItem } from '../../models/app';
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
        <Heading {...headingStyles}>{item.title}</Heading>
        <Text my="3">{item.description}</Text>
        {item.cta}
      </Box>
      <Box w="100%" {...imageBoxStyles}>
        <Image src={item.imageUrl} alt="product image" w="100%" m="auto" />
      </Box>
    </Flex>
  );
};
