import { Box, Flex, FlexProps, Image, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface InfoCardProps extends FlexProps {
  title: string;
  description: string;
  imageUrl: string;
  cta?: ReactNode;
}

export const InfoCard = ({
  title,
  description,
  imageUrl,
  cta,
  ...rest
}: InfoCardProps) => {
  return (
    <Flex
      my="4rem"
      w="80%"
      mx="auto"
      justify="space-between"
      align="center"
      {...rest}
    >
      <Box w={{ base: '100%', lg: '50%' }}>
        <Text fontSize="xl" mb="1rem" fontWeight="bold">
          {title}
        </Text>
        <Text mb="1rem">{description}</Text>
        <Box my="0.5rem">{cta}</Box>
      </Box>

      <Box p="1rem" boxSizing="border-box">
        <Image
          src={imageUrl}
          alt=""
          boxSize={{ base: '200px', lg: '300px' }}
          borderRadius="full"
          objectFit="contain"
          bgColor="#FFAA00"
        />
      </Box>
    </Flex>
  );
};
