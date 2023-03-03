import { Box, Grid, GridItem, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';

export const WhyWorkWithUS = () => {
  return (
    <Box
      bgColor="brand.blue"
      py="4rem"
      my="4rem"
      bgImage="/assets/images/bg-overlay.svg"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box w={{ base: '90%', lg: '80%' }} mx="auto">
        <Heading color="white">Why work with us</Heading>

        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
          templateRows={{ base: 'repeat(4, 1fr)', lg: 'repeat(2, 1fr)' }}
          mx="auto"
          gap="50px"
          my="2rem"
          color="white"
        >
          <GridItem>
            <Box>
              <Image
                boxSize="100px"
                src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677857992/donehub-assets/why%20work%20with%20us%20images/Certified_and_experience_pilots_gdwz0a.svg"
                alt=""
              />
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
              <Image
                boxSize="100px"
                src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677857992/donehub-assets/why%20work%20with%20us%20images/Partnerships_eq9zmb.svg"
                alt=""
              />
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
              <Image
                boxSize="100px"
                src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677857991/donehub-assets/why%20work%20with%20us%20images/Service_excellence_tyyfvp.svg"
                alt=""
              />
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
              <Image
                boxSize="100px"
                src="https://res.cloudinary.com/djmx11b6s/image/upload/v1677857827/donehub-assets/why%20work%20with%20us%20images/We_like_a_challenge_bemszg.svg"
                alt=""
              />
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
