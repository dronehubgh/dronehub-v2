import { List, ListItem, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

export const Solutions = () => {
  return (
    <>
      <Text fontWeight={500} mt={{ base: 10 }} mb={3}>
        Solutions
      </Text>

      <List color="gray.500">
        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/consumer" passHref>
            <Text _hover={{ textDecor: 'none' }}>Consumer</Text>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/enterprise?type=integration-program" passHref>
            <Text _hover={{ textDecor: 'none' }}>Enterprise</Text>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/business" passHref>
            <Text _hover={{ textDecor: 'none' }}>Business</Text>
          </NextLink>
        </ListItem>
      </List>
    </>
  );
};
