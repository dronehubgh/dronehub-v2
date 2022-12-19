import { List, ListItem, Text } from '@chakra-ui/react';
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
            <Text _hover={{ textDecor: 'none' }}>Drone Repairs</Text>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/drone-maintenance" passHref>
            <Text _hover={{ textDecor: 'none' }}>Drone Maintenance</Text>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/" passHref>
            <Text _hover={{ textDecor: 'none' }}>Drone Software</Text>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/drone-consultation" passHref>
            <Text _hover={{ textDecor: 'none' }}>Drone Consulting</Text>
          </NextLink>
        </ListItem>

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/drone-detection" passHref>
            <Text _hover={{ textDecor: 'none' }}>Drone Detection</Text>
          </NextLink>
        </ListItem>
        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/drone-rentals" passHref>
            <Text _hover={{ textDecor: 'none' }}>Drone Rentals</Text>
          </NextLink>
        </ListItem>
        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/drone-applied-research" passHref>
            <Text _hover={{ textDecor: 'none' }}>Drone Research</Text>
          </NextLink>
        </ListItem>
        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/drone-eduction" passHref>
            <Text _hover={{ textDecor: 'none' }}>Drone Education</Text>
          </NextLink>
        </ListItem>
        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/custom-solution" passHref>
            <Text _hover={{ textDecor: 'none' }}>Custom Solutions</Text>
          </NextLink>
        </ListItem>
      </List>
    </>
  );
};
