import { Box, BoxProps, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

interface IStoryCardProps extends BoxProps {
  title: string;
  link: string;
  index: number;
  endStrNum?: number;
}
export const StoryCard = ({
  title,
  link,
  index,
  endStrNum,
  ...rest
}: IStoryCardProps) => {
  const colors = ['purple.600', 'orange.400', 'blue.400', 'green.400'];
  const bgColor = colors[Math.floor(Math.random() * colors.length)];

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
      bgColor={index === 0 ? 'brand.blue' : bgColor}
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
      <Link href={link}>
        <Flex align="center" mt="1rem" fontWeight="700" w="fit-content">
          <Text mr="0.5rem" pb="0.4rem">
            Read more
          </Text>
          <BsArrowRight />
        </Flex>
      </Link>
    </Flex>
  );
};
