import { Box } from '@chakra-ui/react';
import React from 'react';
import { QuestionsAccordion } from '../../../components';
import { otherIssues } from '../../../data/questions';
import { IFAQ } from '../../../models/app';

interface Props {
  faq: IFAQ[];
}

export const OtherIssues = ({ faq }: Props) => {
  return (
    <Box mx="auto" w="100%">
      <QuestionsAccordion faq={faq} />
    </Box>
  );
};
