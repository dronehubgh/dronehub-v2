import { Box, Button, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const Programs = () => {
  return (
    <Box py="4rem">
      <Heading textAlign="center" my="3rem">
        Get Started With Any of These Programs
      </Heading>
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
        w="80%"
        mx="auto"
        gap="20px"
      >
        <GridItem>
          <ProgramCard />
        </GridItem>
        <GridItem>
          <ProgramCard />
        </GridItem>
        <GridItem>
          <ProgramCard />
        </GridItem>
        <GridItem>
          <ProgramCard />
        </GridItem>
      </Grid>
    </Box>
  );
};

const ProgramCard = () => {
  return (
    <Box bgColor="#D7E9FE" p="2rem">
      <Text fontWeight="bold">Drone Educational Resources</Text>
      <Text color="grey" my="0.5rem">
        Gain access to our library of free drone resources
      </Text>
      <Box>
        <Button
          bgColor="transparent"
          borderWidth="1px"
          borderColor="brand.blue"
          color="brand.blue"
          _hover={{ bgColor: 'white', color: 'brand.blue' }}
          _active={{ bgColor: 'white', color: 'brand.blue' }}
          mr="1rem"
        >
          Talk to Sales{' '}
        </Button>
        <Button
          bgColor="brand.blue"
          color="gray.100"
          _hover={{ bgColor: 'none' }}
          _active={{ bgColor: 'none' }}
        >
          Send an Email
        </Button>
      </Box>
    </Box>
  );
};
