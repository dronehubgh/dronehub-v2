import {
  Accordion,
  AccordionButton,
  AccordionButtonProps,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { FunctionalDamage } from './FunctionalDamage';
import { OtherIssues } from './OtherIssues';
import { PhysicalDamage } from './PhysicalDamage';
import { SoftwareIssues } from './SofwareIssues';

const btnProps: AccordionButtonProps = {
  minW: '300px',
  display: 'flex',
  color: 'gray.100',
  borderRadius: 0,
  py: '1rem',
  _hover: { bgColor: 'none' },
  _active: { bgColor: 'none' },
  transition: 'all .5s',
  border: 'none',
  borderBottomWidth: '1px',
  borderColor: 'gray.100',
  fontWeight: 'bold',
  _expanded: { bgColor: '#FFAA00', color: 'gray.900' },
};

export const AccordionSmall = () => {
  return (
    <Accordion allowToggle defaultIndex={[0]} p="1rem" border="none">
      <AccordionItem border="none">
        <h2>
          <AccordionButton {...btnProps}>
            <Box as="span" flex="1" textAlign="left">
              Physical Damage
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <PhysicalDamage />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton {...btnProps}>
            <Box as="span" flex="1" textAlign="left">
              Functional Damage
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <FunctionalDamage />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton {...btnProps}>
            <Box as="span" flex="1" textAlign="left">
              Software Issues
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <SoftwareIssues />
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
