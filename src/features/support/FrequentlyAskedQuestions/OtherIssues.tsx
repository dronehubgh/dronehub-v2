import { Box } from '@chakra-ui/react';
import React from 'react';
import { QuestionsAccordion } from '../../../components';
import { otherIssues } from '../../../data/questions';

export const OtherIssues = () => {
  return (
    <Box mx="auto" w="100%">
      <QuestionsAccordion content={otherIssues} />
    </Box>
  );
};
