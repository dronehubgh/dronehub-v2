import { Link, List, ListItem, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export const ExploreProducts = () => {
  return (
    <>
      <Text fontWeight={500} mt={{ base: 10 }} mb={3}>
        Explore Products
      </Text>

      <List color="gray.500">
        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/consumer" passHref>
            <Link _hover={{ textDecor: 'none' }}>Consumer</Link>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/consumer" passHref>
            <Link _hover={{ textDecor: 'none' }}>Professional</Link>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/business" passHref>
            <Link _hover={{ textDecor: 'none' }}>Enterprise</Link>
          </NextLink>
        </ListItem>
      </List>
    </>
  );
};
