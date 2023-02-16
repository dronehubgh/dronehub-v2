import { Box, Text, Flex, BoxProps } from '@chakra-ui/react';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

interface CardProps extends BoxProps {
  title: string;
}

export const Card = ({ title, ...rest }: CardProps) => {
  return (
    <Box minW="300px" p="2rem" color="gray.200" {...rest}>
      <Text fontSize={{ base: '1.7rem', lg: '2.5rem' }} fontWeight="700">
        {title}
      </Text>
      <Flex align="center" mt="4rem" fontSize="1.5rem" fontWeight="700">
        <Text mr="0.5rem" pb="0.4rem">
          Read more
        </Text>{' '}
        <BsArrowRight />
      </Flex>
    </Box>
  );
};
