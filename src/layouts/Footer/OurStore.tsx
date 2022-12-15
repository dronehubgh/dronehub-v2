import { Link, List, ListItem, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export const OurStore = () => {
  return (
    <>
      <Text fontWeight={500} mt={{ base: 10 }} mb={3}>
        Our Store
      </Text>

      <List color="gray.500">
        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/product" passHref>
            <Link _hover={{ textDecor: 'none' }}>Consumer Drones</Link>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/product" passHref>
            <Link _hover={{ textDecor: 'none' }}>Enterprise Drones</Link>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/product" passHref>
            <Link _hover={{ textDecor: 'none' }}>Drone Accessories</Link>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/product" passHref>
            <Link _hover={{ textDecor: 'none' }}>Cameras & Gimbals</Link>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/product" passHref>
            <Link _hover={{ textDecor: 'none' }}>Software Solutions </Link>
          </NextLink>
        </ListItem>
      </List>
    </>
  );
};
