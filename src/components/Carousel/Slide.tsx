import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { ICarouselItem } from '../../models/app';

export const Slide = ({ item }: { item: ICarouselItem }) => {
  return (
    <Flex
      align="center"
      p="1rem"
      display={{ base: 'block', lg: 'flex' }}
      h="100%"
    >
      <Box textAlign={{ base: 'center', lg: 'left' }}>
        <Heading size="2xl">{item.title}</Heading>
        <Text my="3">{item.description}</Text>
        {item.cta}
      </Box>
      <Box w="100%" my={{ base: '70px', lg: '0' }}>
        <Image src={item.imageUrl} alt="product image" w="100%" m="auto" />
      </Box>
    </Flex>
  );
};
