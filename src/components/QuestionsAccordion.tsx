import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import React from 'react';

export interface IAccordionContent {
  question: string;
  answer: string;
}

interface IQuestionsAccordionProps {
  content: IAccordionContent[];
}

export const QuestionsAccordion = ({ content }: IQuestionsAccordionProps) => {
  return (
    <Accordion allowToggle w="100%" px={{ base: '0', lg: '2rem' }}>
      {content.map((item, index) => (
        <AccordionItem key={index}>
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
          <AccordionPanel pb={4} fontSize={{ base: 'xs', lg: 'md' }}>
            {item.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
