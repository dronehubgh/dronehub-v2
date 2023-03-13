import { Box, Button, ButtonProps, Flex, Spacer } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { btnHeight } from '../../../../consts/consts';
import { FunctionalDamage } from './FunctionalDamage';
import { OtherIssues } from './OtherIssues';
import { PhysicalDamage } from './PhysicalDamage';
import { SoftwareIssues } from './SofwareIssues';

const ids = {
  physicalDamage: 'physicalDamage',
  functionalDamage: 'functionalDamage',
  softwareIssues: 'softwareIssues',
  otherIssues: 'otherIssues',
};

export const AccordionLarge = () => {
  const [selectedId, setSelectedId] = useState(ids.physicalDamage);

  return (
    <Flex w="80%" mx="auto">
      <Box>
        <CollapsibleButton
          id={ids.physicalDamage}
          selectedId={selectedId}
          label="Physical Damage"
          onClick={() => setSelectedId(ids.physicalDamage)}
        />
        <CollapsibleButton
          id={ids.functionalDamage}
          selectedId={selectedId}
          label="Functional Damage"
          onClick={() => setSelectedId(ids.functionalDamage)}
        />
        <CollapsibleButton
          id={ids.softwareIssues}
          selectedId={selectedId}
          label="Software Issues"
          onClick={() => setSelectedId(ids.softwareIssues)}
        />
        <CollapsibleButton
          id={ids.otherIssues}
          selectedId={selectedId}
          label="Other Issues"
          onClick={() => setSelectedId(ids.otherIssues)}
        />
      </Box>

      {selectedId === ids.physicalDamage && <PhysicalDamage />}
      {selectedId === ids.functionalDamage && <FunctionalDamage />}
      {selectedId === ids.softwareIssues && <SoftwareIssues />}
      {selectedId === ids.otherIssues && <OtherIssues />}
    </Flex>
  );
};

const btnProps: ButtonProps = {
  minW: '300px',
  display: 'flex',
  color: 'gray.100',
  borderRadius: 0,
  py: '2rem',
  _hover: { bgColor: 'none' },
  _active: { bgColor: 'none' },
  transition: 'all .5s',
  borderBottomWidth: '1px',
  borderColor: 'gray.100',
  h: btnHeight,
};

interface CollapsibleButtonProps extends ButtonProps {
  id: string;
  selectedId: string;
  label: string;
}
const CollapsibleButton = ({
  id,
  selectedId,
  label,
  ...rest
}: CollapsibleButtonProps) => {
  return (
    <Button
      {...btnProps}
      {...rest}
      bgColor={selectedId === id ? '#FFAA00' : 'transparent'}
      color={selectedId === id ? 'gray.900' : 'gray.100'}
    >
      {label} <Spacer /> <FaChevronRight size="0.8rem" />
    </Button>
  );
};
