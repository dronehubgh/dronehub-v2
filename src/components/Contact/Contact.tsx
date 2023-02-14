import {
  Box,
  Grid,
  GridItem,
  Heading,
  Icon,
  Link,
  Text,
} from '@chakra-ui/react';
import { contactList } from '../../data';

export const Contact = () => {
  return (
    <Box>
      <Heading
        as="h6"
        fontSize={{ lg: '40px', base: '24px' }}
        textAlign="left"
        mx="2rem"
        mt="3rem"
      >
        Looking for something else?
      </Heading>

      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(5, 1fr)',
        }}
        p={{ base: '2rem', lg: '0 ' }}
        my="2rem"
      >
        {contactList.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            border="1px solid rgba(151, 151, 151, 0.1)"
            transition="all .3s"
            _hover={{
              bg: 'brand.blue',
              color: 'white',
              border: 'none',
              textDecoration: 'none',
            }}
            isExternal
          >
            <GridItem
              py={{ lg: 20, base: 10, md: 5 }}
              px={{ lg: 10, base: 5, md: 5 }}
              rowSpan="auto"
            >
              <Box>
                <Icon as={item.icon} boxSize={8} />
                <Heading
                  as="h6"
                  fontSize={{ base: 'sm', md: 'sm', lg: 'md' }}
                  my={{ lg: 3, md: 2, base: 1 }}
                >
                  {item.heading}
                </Heading>
                <Text fontSize={{ base: 'sm', md: 'sm', lg: 'md' }}>
                  {item.text}{' '}
                </Text>
              </Box>
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};
