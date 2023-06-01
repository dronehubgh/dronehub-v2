import { List, ListItem, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { IndustryOverView } from '../../data/industry';

export const Industries = () => {
  return (
    <>
      <Text fontWeight={500} mt={{ base: 10 }} mb={3}>
        Industries
      </Text>

      <List color="gray.500">
        {IndustryOverView.map((industry) => (
          <ListItem
            key={industry.name}
            borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
            borderColor="gray.500"
            py={{ base: 2, lg: 2 }}
          >
            <NextLink href={industry.link} passHref>
              <Text _hover={{ textDecor: 'none' }}>{industry.name}</Text>
            </NextLink>
          </ListItem>
        ))}

        <ListItem
          borderBottomWidth={{ base: 1, lg: 0, md: 0 }}
          borderColor="gray.500"
          py={{ base: 2, lg: 2 }}
        >
          <NextLink href="/enterprise?type=integration-program" passHref>
            <Text _hover={{ textDecor: 'none' }}>Enterprise</Text>
          </NextLink>
        </ListItem>
      </List>
    </>
  );
};
