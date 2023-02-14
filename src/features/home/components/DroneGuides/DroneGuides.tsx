import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { Button } from '../../../../components';
import { Card } from './Card';
import { Slider } from './Slider';

export const DroneGuides = () => {
  return (
    <Box bg="brand.darkBlue" my="6rem">
      <Box
        p={{ base: '2rem', lg: '4rem' }}
        bg="center / cover no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1676293768/donehub-assets/Vector_2_gwdt3v.png)"
      >
        <Flex
          justify="space-between"
          flexDir={{ base: 'column', lg: 'row' }}
          align={{ base: 'flex-start', lg: 'flex-end' }}
          mb="2rem"
        >
          <Box color="gray.100">
            <Heading py="1.5rem">Drone guides</Heading>
            <Text>
              Resources for your business, professional and individual use
            </Text>
          </Box>
          <Box mt={{ base: '1.5rem', lg: '0' }}>
            <Button
              title="View all resources"
              bg="transparent"
              borderColor="gray.100"
              color="gray.100"
            >
              <BiChevronRight />
            </Button>
          </Box>
        </Flex>
        <Box mb="2rem">
          <Slider />
        </Box>
      </Box>
    </Box>
  );
};
