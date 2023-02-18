import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  AccordionButtonProps,
  Heading,
} from '@chakra-ui/react';
import { IconButton } from '.';
import { FaChevronRight } from 'react-icons/fa';

const btnStyles: AccordionButtonProps = {
  _expanded: { bg: 'rgba(253, 203, 102, 0.1)' },
  fontWeight: 'bold',
  py: '1rem',
};

export const FrequentlyAskedQuestions = () => {
  return (
    <Box w={{ base: '90%', lg: '70%' }} mx="auto" my="4rem">
      <Heading py="1rem" size={{ base: 'lg', lg: 'xl' }} pr="4rem">
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton {...btnStyles}>
              <Box as="span" flex="1" textAlign="left">
                Is Dronehub an authorized DJI Distributor?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton {...btnStyles}>
              <Box as="span" flex="1" textAlign="left">
                Do you only focus on the sale of drones?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton {...btnStyles}>
              <Box as="span" flex="1" textAlign="left">
                Do you provide technical support to customers?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <IconButton
        icon={<FaChevronRight size="0.5rem" />}
        title="View more FAQs"
        my="2rem"
        maxW="200px"
        bgColor="brand.blue"
        color="gray.100"
        _active={{ bgColor: 'none' }}
      />
    </Box>
  );
};
