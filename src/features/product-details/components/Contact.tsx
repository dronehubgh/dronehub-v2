import { Box, Heading, Icon, Text, Grid, Link } from '@chakra-ui/react';
import React from 'react';
import { FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { v4 as uid } from 'uuid';
import { contactList } from '../../../data';

const Contact = () => {
  return (
    <Box border="#f7f7f7f7" bg="white">
      <Heading
        as="h6"
        fontSize={{ lg: '40px', base: '24px' }}
        textAlign="left"
        mx="2rem"
      >
        Looking for something else?
      </Heading>

      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(5, 1fr)',
        }}
        p={{ base: 5, lg: 0 }}
        mt={{ lg: 10, base: 5, md: 7 }}
      >
        {contactList.map((item) => (
          <Link href={item.link} key={item.id} isExternal>
            <Box
              border="1px solid rgba(151, 151, 151, 0.1)"
              py={{ lg: 20, base: 10, md: 5 }}
              px={{ lg: 10, base: 5, md: 5 }}
              _hover={{
                bg: 'brand.blue',
                color: 'white',
                border: 'none',
              }}
            >
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
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default Contact;
