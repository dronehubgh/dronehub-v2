import { Box, BoxProps, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

interface IStoryCardProps extends BoxProps {
  title: string;
  endStrNum?: number;
}
export const StoryCard = ({ title, endStrNum, ...rest }: IStoryCardProps) => {
  return (
    <Flex
      w="100%"
      bg="brand.blue"
      py="1rem"
      color="white"
      px="1.5rem"
      h="250px"
      flexDir="column"
      justify="space-between"
      {...rest}
    >
      <Text
        fontSize={{ base: 'xl', lg: '2xl' }}
        fontWeight="bold"
        title={title}
      >
        {title.length > (endStrNum || 65)
          ? title.slice(0, endStrNum || 65) + '...'
          : title}
      </Text>
      <Flex align="center" mt="1rem" fontWeight="700">
        <Text mr="0.5rem" pb="0.4rem">
          Read more
        </Text>
        <BsArrowRight />
      </Flex>
    </Flex>
  );
};
