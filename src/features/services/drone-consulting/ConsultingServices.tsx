import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const ConsultingServices = () => {
  return (
    <Box
      bgColor="#dff2fc"
      py="4rem"
      my="4rem"
      bgImage="/assets/images/bg-overlay.svg"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box w={{ base: '90%', lg: '80%' }} mx="auto">
        <Heading>Our Consulting Services</Heading>

        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
          templateRows={{ base: 'repeat(4, 1fr)', lg: 'repeat(2, 1fr)' }}
          mx="auto"
          gap="50px"
          my="2rem"
        >
          <GridItem>
            <Box>
              <Text fontWeight="bold" my="1rem">
                Develop Standard Operating Manual
              </Text>
              <Text>
                Developing customized drone policy and operation manuals
                designed for specific missions to ensure safety, efficient
                operations and proper drone maintenance.{' '}
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontWeight="bold" my="1rem">
                Develop Standard Operating Manual
              </Text>
              <Text>
                Developing customized drone policy and operation manuals
                designed for specific missions to ensure safety, efficient
                operations and proper drone maintenance.{' '}
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontWeight="bold" my="1rem">
                Develop Standard Operating Manual
              </Text>
              <Text>
                Developing customized drone policy and operation manuals
                designed for specific missions to ensure safety, efficient
                operations and proper drone maintenance.{' '}
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontWeight="bold" my="1rem">
                Develop Standard Operating Manual
              </Text>
              <Text>
                Developing customized drone policy and operation manuals
                designed for specific missions to ensure safety, efficient
                operations and proper drone maintenance.{' '}
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
