import { Box } from '@chakra-ui/react';
import React from 'react';
import { QuestionsAccordion } from '../../../components';
import { allQuestions } from '../../../data/questions';

export const AllQuestions = () => {
  return (
    <Box mx="auto" w="100%">
      <QuestionsAccordion content={allQuestions} />
    </Box>
  );
};
