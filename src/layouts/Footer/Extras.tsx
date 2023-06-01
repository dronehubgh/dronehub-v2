import { List, ListItem, Text } from '@chakra-ui/react';
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
            <Text _hover={{ textDecor: 'none' }}>Blog</Text>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/events" passHref>
            <Text _hover={{ textDecor: 'none' }}>Events</Text>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/feedback" passHref>
            <Text _hover={{ textDecor: 'none' }}>Feedback</Text>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/customer-stories" passHref>
            <Text _hover={{ textDecor: 'none' }}>Customer Stories</Text>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/strategic-partnership" passHref>
            <Text _hover={{ textDecor: 'none' }}>Strategic Partnership</Text>
          </NextLink>
        </ListItem>
      </List>
    </>
  );
};
