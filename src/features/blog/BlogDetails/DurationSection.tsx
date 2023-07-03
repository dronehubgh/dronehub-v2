import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import { facebookUrl, instagramUrl, twitterUrl } from '../../../consts';

interface Props {
  duration: number;
}
export const DurationSection = ({ duration }: Props) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      mx="2rem"
      my="4rem"
      py="0.5rem"
      borderBottomWidth={1}
    >
      <Text>{duration} mins read</Text>

      <Flex gap="2rem" align="center" color="brand.blue">
        <Link href={facebookUrl} isExternal={true}>
          <FaFacebookSquare />
        </Link>

        <Link href={twitterUrl} isExternal={true}>
          <FaTwitter />
        </Link>

        <Link href={instagramUrl} isExternal={true}>
          <FaInstagram />
        </Link>
      </Flex>
    </Flex>
  );
};
