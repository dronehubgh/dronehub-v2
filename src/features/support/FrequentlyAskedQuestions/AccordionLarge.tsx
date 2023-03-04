import { Box, Button, ButtonProps, Flex, Spacer } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { AllQuestions } from './AllQuestions';
import { DronesAndAccessories } from './DronesAndAccessories';
import { DroneServices } from './DroneServices';
import { OtherIssues } from './OtherIssues';
import { Store } from './Store';

const ids = {
  allQuestion: 'allQuestion',
  droneAndAccessories: 'droneAndAccessories',
  droneServices: 'droneServices',
  store: 'store',
  otherIssues: 'otherIssues',
};

export const AccordionLarge = () => {
  const [selectedId, setSelectedId] = useState(ids.allQuestion);

  return (
    <Flex>
      <Box>
        <CollapsibleButton
          id={ids.allQuestion}
          selectedId={selectedId}
          label="All Questions"
          onClick={() => setSelectedId(ids.allQuestion)}
        />
        <CollapsibleButton
          id={ids.droneAndAccessories}
          selectedId={selectedId}
          label="Drone & Accessories"
          onClick={() => setSelectedId(ids.droneAndAccessories)}
        />
        <CollapsibleButton
          id={ids.droneServices}
          selectedId={selectedId}
          label="Drone Services"
          onClick={() => setSelectedId(ids.droneServices)}
        />
        <CollapsibleButton
          id={ids.store}
          selectedId={selectedId}
          label="Store"
          onClick={() => setSelectedId(ids.store)}
        />
        <CollapsibleButton
          id={ids.otherIssues}
          selectedId={selectedId}
          label="Other Issues"
          onClick={() => setSelectedId(ids.otherIssues)}
        />
      </Box>
      {selectedId === ids.allQuestion && <AllQuestions />}
      {selectedId === ids.droneAndAccessories && <DronesAndAccessories />}
      {selectedId === ids.droneServices && <DroneServices />}
      {selectedId === ids.store && <Store />}
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
      bgColor={selectedId === id ? 'brand.blue' : 'transparent'}
      color={selectedId === id ? 'gray.100' : 'gray.900'}
    >
      {label} <Spacer /> <FaChevronRight size="0.8rem" />
    </Button>
  );
};
