import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { IFAQ } from '../models/app';

export interface IAccordionContent {
  question: string;
  answer: string;
}

interface IQuestionsAccordionProps {
  faq: IFAQ[];
}

export const QuestionsAccordion = ({ faq }: IQuestionsAccordionProps) => {
  return (
    <Accordion allowToggle w="100%" px={{ base: '0', lg: '2rem' }}>
      {faq.map((item, index) => (
        <AccordionItem key={item.id}>
          <h2>
            <AccordionButton
              fontWeight="bold"
              fontSize={{ base: 'xs', lg: 'md' }}
            >
              <Box as="span" flex="1" textAlign="left">
                {item.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            fontSize={{ base: 'xs', lg: 'md' }}
            textAlign="left"
          >
            {item.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
