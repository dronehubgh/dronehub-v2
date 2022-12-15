import { Link, List, ListItem, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Extras = () => {
  return (
    <>
      <Text fontWeight={500} mt={{ base: 10 }} mb={3}>
        Extras
      </Text>

      <List color="gray.500">
        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/blog" passHref>
            <Link _hover={{ textDecor: 'none' }}>Blog</Link>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/event" passHref>
            <Link _hover={{ textDecor: 'none' }}>Events</Link>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/" passHref>
            <Link _hover={{ textDecor: 'none' }}>Feedback</Link>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/" passHref>
            <Link _hover={{ textDecor: 'none' }}>Customer Stories</Link>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/product" passHref>
            <Link _hover={{ textDecor: 'none' }}>Strategic Partnership</Link>
          </NextLink>
        </ListItem>
      </List>
    </>
  );
};
