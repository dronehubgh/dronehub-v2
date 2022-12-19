import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { productCategories } from '../../../data';

export const Categories = () => {
  return (
    <Flex
      w={{ base: '100%', md: '90%' }}
      m="auto"
      justify="space-evenly"
      align="center"
      my="4rem"
    >
      {productCategories.map((category) => (
        <Box
          key={category.id}
          textAlign="center"
          w="8rem"
          h={{ base: '80px', md: '150px' }}
          position="relative"
          mt="1rem"
        >
          <Image
            src={category.iconUrl}
            alt={category.name}
            m="auto"
            w={{ base: '25px', md: '3rem', lg: '80px' }}
          />
          <Text
            fontSize={{ base: '10px', md: '14px', lg: '16px' }}
            position="absolute"
            bottom="0"
            w="100%"
            textAlign="center"
          >
            {category.name}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};
