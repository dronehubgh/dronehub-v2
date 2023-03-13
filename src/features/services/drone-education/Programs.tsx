import { Box, Button, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { btnHeight } from '../../../consts/consts';

export const Programs = () => {
  return (
    <Box py="4rem">
      <Heading textAlign="center" my="3rem">
        Get Started With Any of These Programs
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        templateRows={{ base: 'repeat(4, 1fr)', lg: 'repeat(2, 1fr)' }}
        w="80%"
        mx="auto"
        gap="20px"
      >
        <GridItem>
          <ProgramCard
            title="Drone Educational Resources"
            description="Gain access to our library of free drone resources"
          />
        </GridItem>
        <GridItem>
          <ProgramCard
            title="Complimentary Beginner Tutorial"
            description="Learn how you can do basic things with your drone."
          />
        </GridItem>
        <GridItem>
          <ProgramCard
            title="Practical In-Person Basic Flight Tutorials"
            description="Get hands-on training on how to fly drones from our team of experts. "
          />
        </GridItem>
        <GridItem>
          <ProgramCard
            title="Advanced Task-Specific Flight Tutorials"
            description="Move to the next level. Learn how to use drones to be a pro in your industry."
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

interface ProgramCardProps {
  title: string;
  description: string;
}
const ProgramCard = ({ title, description }: ProgramCardProps) => {
  return (
    <Box bgColor="#D7E9FE" p="2rem">
      <Text fontWeight="bold">{title}</Text>
      <Text color="grey" my="0.5rem">
        {description}
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
          my="0.5rem"
          minW="150px"
          h={btnHeight}
        >
          Talk to Sales{' '}
        </Button>
        <Button
          bgColor="brand.blue"
          color="gray.100"
          _hover={{ bgColor: 'none' }}
          _active={{ bgColor: 'none' }}
          minW="150px"
          h={btnHeight}
        >
          Send an Email
        </Button>
      </Box>
    </Box>
  );
};
