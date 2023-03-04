import { Box, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';
import { Contact } from '../components';
import {
  AllFrequentlyAskedQuestions,
  QuickResponse,
  SupportBanner,
} from '../features';

const SupportPage: NextPage = () => {
  return (
    <>
      <SupportBanner />
      <Box w={{ base: '90%', lg: '80%' }} mx="auto" textAlign="center">
        <Text fontSize="14px" fontWeight="light" mt="2rem">
          OUR MISSION
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          Is to build a community for people and drones
        </Text>
        <Text my="2rem">
          Drone and technology solutions provider in Africa.
        </Text>
      </Box>

      <QuickResponse />
      <AllFrequentlyAskedQuestions />
      <Contact hideHeading={true} />
    </>
  );
};

export default SupportPage;
