import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { productCategories } from '../../../data';
import {
  categoriesStyles,
  categoryStyles,
  categoryTextStyles,
  categoryImgStyles,
} from './_styles';

export const Categories = () => {
  return (
    <Flex {...categoriesStyles}>
      {productCategories.map((category) => (
        <Box key={category.id} {...categoryStyles}>
          <Image
            src={category.iconUrl}
            alt={category.name}
            {...categoryImgStyles}
            title={category.name}
          />
          <Text {...categoryTextStyles} title={category.name}>
            {category.name}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};
