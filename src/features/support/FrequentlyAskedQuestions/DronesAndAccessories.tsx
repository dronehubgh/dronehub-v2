import { Box } from '@chakra-ui/react';
import React from 'react';
import { QuestionsAccordion } from '../../../components';
import { droneAndAccessories } from '../../../data/questions';

export const DronesAndAccessories = () => {
  return (
    <Box mx="auto" w="100%">
      <QuestionsAccordion content={droneAndAccessories} />
    </Box>
  );
};
