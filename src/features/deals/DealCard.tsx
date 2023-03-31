import { Box, Card, CardBody, Flex, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { CustomMenuButton, ProductCTAButtons } from '../../components';
import { IDeal } from '../../models/app';

interface DealCardProps {
  product: IDeal;
  cta: ReactNode;
}

export const DealCard = ({ product, cta }: DealCardProps) => {
  return (
    <Card maxW="xs" flexGrow={1}>
      <CardBody w="90%" mx="auto">
        <Text fontWeight="bold">{product.name}</Text>
        <Text color="gray.500" fontSize="sm">
          {product.description}
        </Text>

        <Flex gap="3rem" align="center" my="0.4rem">
          <Text fontSize="xl">US$ {product.salePrice}</Text>
          <Text textDecoration="line-through" fontSize="sm">
            US$ {product.cutOutPrice}
          </Text>
        </Flex>

        <Box mt="1rem" mx="auto">
          {cta}
        </Box>

        <Box
          w="100%"
          boxSize="220px"
          mx="auto"
          bg={`center / contain no-repeat url(${product.imageUrl})`}
        />
      </CardBody>
    </Card>
  );
};
