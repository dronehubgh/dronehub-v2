import React, { ReactNode } from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import {
  cardStyles,
  headingStyles,
  imageBoxStyles,
  textStyles,
} from './_styles';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  cta: ReactNode;
}

export const ProductCard = ({
  title,
  description,
  imageUrl,
  cta,
}: ProductCardProps) => {
  return (
    <Flex {...cardStyles}>
      <Heading {...headingStyles}>{title}</Heading>
      <Text {...textStyles}>{description}</Text>
      <Box my="0.6rem">{cta}</Box>
      <Flex {...imageBoxStyles}>
        <Image src={imageUrl} alt="product image" w="100%" />
      </Flex>
    </Flex>
  );
};

ProductCard.defaultProps = {
  title: 'Card Title',
  description: 'Lorem ipsum dolor sit amet consectetur',
  imageUrl: '',
  cta: <></>,
};
