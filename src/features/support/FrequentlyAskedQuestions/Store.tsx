import { Box } from '@chakra-ui/react';
import React from 'react';
import { QuestionsAccordion } from '../../../components';
import { store } from '../../../data/questions';

export const Store = () => {
  return (
    <Box mx="auto" w="100%">
      <QuestionsAccordion content={store} />
    </Box>
  );
};
