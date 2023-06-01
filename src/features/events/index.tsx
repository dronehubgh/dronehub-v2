import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { EventsHeader } from './Header';
import { UpcomingEvents } from './UpcomingEvents';

export const Events = () => {
  return (
    <>
      <EventsHeader />
      <Box w={{ base: '100%', lg: '90%' }} mx="auto" p="2rem">
        <Heading size="md">Upcoming Events</Heading>
        <UpcomingEvents />

        <Text textAlign="center" maxW="54rem" mx="auto" my="3rem" py="3rem">
          For effectiveness and to achieve the objectives of our product and
          solution demonstrations, a limited number of participants are
          considered for each field demonstration. If the proposed demo date is
          not suitable for you or if our demo day is fully registered, kindly
          connect with us here to arrange a custom or company-specific
          demonstration.
        </Text>
      </Box>
    </>
  );
};
