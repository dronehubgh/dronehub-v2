import { Box, Text, Flex, BoxProps } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

interface CardProps extends BoxProps {
  title: string;
}

export const Card = ({ title, ...rest }: CardProps) => {
  return (
    <Box minW="300px" px="2rem" py="4rem" color="gray.200" {...rest}>
      <Text fontSize={{ base: '1.7rem', lg: '2.5rem' }} fontWeight="700">
        {title}
      </Text>
      <Link href="/blog#guides" color="white">
        <Flex
          align="center"
          mt="4rem"
          fontSize="1.5rem"
          fontWeight="700"
          _hover={{ color: 'white' }}
        >
          <Text mr="0.5rem" pb="0.4rem">
            Read more
          </Text>{' '}
          <BsArrowRight />
        </Flex>
      </Link>
    </Box>
  );
};
