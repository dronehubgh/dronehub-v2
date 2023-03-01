import {
  Box,
  Button,
  ButtonProps,
  Flex,
  FlexProps,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { AccordionLarge } from './AccordionLarge';
import { AccordionSmall } from './AccordionSmall';

export const WhatWeFix = () => {
  return (
    <Box bgColor="brand.darkBlue" my="4rem" py="5rem">
      <Text
        w="80%"
        my="2rem"
        mx="auto"
        color="gray.100"
        fontWeight="bold"
        fontSize={{ base: 'lg', lg: '2xl' }}
      >
        Summary of Issues we work on{' '}
      </Text>
      <Box display={{ base: 'none', lg: 'block' }}>
        <AccordionLarge />
      </Box>
      <Box display={{ base: 'block', lg: 'none' }}>
        <AccordionSmall />
      </Box>
    </Box>
  );
};
