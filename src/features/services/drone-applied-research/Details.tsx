import { Text } from '@chakra-ui/react';
import React from 'react';

export const Details = () => {
  return (
    <Text
      w={{ base: '90%', lg: '80%' }}
      mx="auto"
      my={{ base: '3rem', lg: '6rem' }}
      lineHeight="10"
      px="2rem"
    >
      Drone technology has the ability to enhance the workflow of many
      industries. Our research team seeks to explore the capabilities and
      application of commercial drones. Our approach involves working together
      with relevant stakeholders and expert technical resources to assess the
      real value of drone technology in specific areas such as; safety,
      efficiency, cost savings, time, precision, better quality data and many
      others. <br /> <br />
      Our aim is to support the practical and sustainable adoption of drones in
      different fields.
    </Text>
  );
};
