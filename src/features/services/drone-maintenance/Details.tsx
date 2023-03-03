import { Text } from '@chakra-ui/react';
import React from 'react';

export const Details = () => {
  return (
    <Text
      w={{ base: '90%', lg: '80%' }}
      mx="auto"
      my={{ base: '3rem', lg: '6rem' }}
      lineHeight="10"
    >
      Safety is the number one priority in the drone and aviation industry. All
      operations, equipment and machines revolve around this one word - Safety.
      However, regardless of your safety level, accidents are likely to occur.
      And that’s why we’re here to proactively help you minimize the risk of
      accidents or faults with your drone.
      <span className="d-block my-4">
        We provide regular technical assessment of drone hardware to determine
        preventive maintenance needs, recommend and execute suitable course of
        action for safety purposes. Our maintenance program enables enterprises
        to fly safer and more reliably while protecting their drone investment.
      </span>
    </Text>
  );
};
