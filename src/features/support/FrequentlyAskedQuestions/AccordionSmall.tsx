import {
  Accordion,
  AccordionButton,
  AccordionButtonProps,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { AllQuestions } from './AllQuestions';
import { DronesAndAccessories } from './DronesAndAccessories';
import { DroneServices } from './DroneServices';
import { OtherIssues } from './OtherIssues';
import { Store } from './Store';

const btnProps: AccordionButtonProps = {
  minW: { base: '100%', lg: '300px' },
  display: 'flex',
  color: 'gray.900',
  borderRadius: 0,
  py: '1rem',
  _hover: { bgColor: 'none' },
  _active: { bgColor: 'none' },
  transition: 'all .5s',
  border: 'none',
  borderBottomWidth: '1px',
  borderColor: 'gray.100',
  fontWeight: 'bold',
  fontSize: { base: 'sm', lg: 'md' },
  _expanded: { bgColor: 'brand.blue', color: 'gray.100' },
};

export const AccordionSmall = () => {
  return (
    <Accordion allowToggle p="1rem" border="none">
      <AccordionItem border="none">
        <h2>
          <AccordionButton {...btnProps}>
            <Box as="span" flex="1" textAlign="left">
              All Questions
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <AllQuestions />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton {...btnProps}>
            <Box as="span" flex="1" textAlign="left">
              Drone & Accessories
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <DronesAndAccessories />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton {...btnProps}>
            <Box as="span" flex="1" textAlign="left">
              Drone Services
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <DroneServices />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton {...btnProps}>
            <Box as="span" flex="1" textAlign="left">
              Store
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Store />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton {...btnProps}>
            <Box as="span" flex="1" textAlign="left">
              Other Issues
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <OtherIssues />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
