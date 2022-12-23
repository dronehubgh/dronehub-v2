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
  outOfStock?: boolean;
}

export const ProductCard = ({
  title,
  description,
  imageUrl,
  cta,
  outOfStock,
}: ProductCardProps) => {
  return (
    <Flex {...cardStyles}>
      <Heading {...headingStyles}>{title}</Heading>
      <Text {...textStyles}>{description}</Text>
      <Box my="0.6rem">
        {outOfStock ? (
          <p className="text-danger fw-bold fst-italic">Out of Stock</p>
        ) : (
          cta
        )}
      </Box>
      <Flex {...imageBoxStyles}>
        <Image src={imageUrl} alt="product image" w="100%" />
      </Flex>

      {outOfStock && (
        <Box
          bgColor="gray.900"
          pos="absolute"
          bottom="0"
          left="0"
          w="100%"
          p="2rem"
          opacity="0.7"
          color="gray.100"
          className="fst-italic"
        >
          Drone shown is currently not available for sale. Kindly contact us for
          more information on the drone here
        </Box>
      )}
    </Flex>
  );
};

ProductCard.defaultProps = {
  title: 'Card Title',
  description: 'Lorem ipsum dolor sit amet consectetur',
  imageUrl: '',
  cta: <></>,
  outOfStock: false,
};
