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
import Link from 'next/link';

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
                Do you offer a warranty on repair works?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            Yes, we offer a limited warranty on repair works. Thirty days spare
            part and service warranty for the specific repair work. This limited
            warranty does not extend to new issues or damage resulting from
            other factors, including general wear and tear.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton {...btnStyles}>
              <Box as="span" flex="1" textAlign="left">
                Does Dronehub only sell drones?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            We do much more than the sale of drones. We offer the following
            services and solutions: drone rental, repair, consulting,
            maintenance, technical support, research, customs solutions and
            end-to-end drone solutions
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton {...btnStyles}>
              <Box as="span" flex="1" textAlign="left">
                Does the rental period include shipping transit time?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign="left">
            No. The rental period begins when you receive or pick up the drone
            and ends the day you ship back or return it.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Link href="/support#faq">
        <IconButton
          icon={<FaChevronRight size="0.5rem" />}
          title="View more FAQs"
          my="2rem"
          maxW="200px"
          bgColor="brand.blue"
          color="gray.100"
          _active={{ bgColor: 'none' }}
        />
      </Link>
    </Box>
  );
};
