import { Box } from '@chakra-ui/react';
import { QuestionsAccordion } from '../../../components';
import { droneServices } from '../../../data/questions';

export const DroneServices = () => {
  return (
    <Box mx="auto" w="100%">
      <QuestionsAccordion content={droneServices} />
    </Box>
  );
};
