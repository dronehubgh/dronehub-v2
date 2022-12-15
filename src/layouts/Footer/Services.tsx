import { Link, List, ListItem, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Services = () => {
  return (
    <>
      <Text fontWeight={500} mt={{ base: 10 }} mb={3}>
        Services
      </Text>

      <List color="gray.500">
        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/drone-repairs" passHref>
            <Link _hover={{ textDecor: 'none' }}>Drone Repairs</Link>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/drone-maintenance" passHref>
            <Link _hover={{ textDecor: 'none' }}>Drone Maintenance</Link>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/" passHref>
            <Link _hover={{ textDecor: 'none' }}>Drone Software</Link>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/drone-consultation" passHref>
            <Link _hover={{ textDecor: 'none' }}>Drone Consulting</Link>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/drone-detection" passHref>
            <Link _hover={{ textDecor: 'none' }}>Drone Detection</Link>
          </NextLink>
        </ListItem>
        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/drone-rentals" passHref>
            <Link _hover={{ textDecor: 'none' }}>Drone Rentals</Link>
          </NextLink>
        </ListItem>
        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/drone-applied-research" passHref>
            <Link _hover={{ textDecor: 'none' }}>Drone Research</Link>
          </NextLink>
        </ListItem>
        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/drone-eduction" passHref>
            <Link _hover={{ textDecor: 'none' }}>Drone Education</Link>
          </NextLink>
        </ListItem>
        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/custom-solution" passHref>
            <Link _hover={{ textDecor: 'none' }}>Custom Solutions</Link>
          </NextLink>
        </ListItem>
      </List>
    </>
  );
};
