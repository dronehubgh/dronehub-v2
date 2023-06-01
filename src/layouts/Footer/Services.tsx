import { List, ListItem, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { services } from '../../consts/consts';

export const Services = () => {
  return (
    <>
      <Text fontWeight={500} mt={{ base: 10 }} mb={3}>
        Services
      </Text>

      <List color="gray.500">
        {Object.entries(services).map(([key, service]) => (
          <ListItem
            key={key}
            borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
            borderColor="gray.500"
            py={{ base: 2, lg: 2 }}
          >
            <NextLink href={service.link} passHref>
              <Text _hover={{ textDecor: 'none' }}>{service.title}</Text>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </>
  );
};
