import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { productCategories } from '../../../data';
import { IProductCategory } from '../../../models/app';
import {
  categoriesStyles,
  categoryStyles,
  categoryTextStyles,
  categoryImgStyles,
} from './_styles';

interface ICategoriesProps {
  categories: IProductCategory[];
}

export const Categories = ({ categories }: ICategoriesProps) => {
  return (
    <Flex {...categoriesStyles}>
      {categories.map((category) => (
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
