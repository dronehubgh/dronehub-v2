import { Box, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SolutionsSlider } from '../../../components';
import { DronesContext } from '../../../context/dronesContext';
import { solutionsItems } from '../../../data/products';

export const DronePlatformsWeRepair = () => {
  const { drones } = useContext(DronesContext);

  return (
    <Box bg="#FAFAFA" my="4rem">
      <Text
        py="2rem"
        fontSize="2xl"
        fontWeight="bold"
        w="90%"
        ml={{ base: '1rem', lg: 'auto' }}
      >
        Drone Platforms We Repair
      </Text>

      <Box>
        <SolutionsSlider
          items={drones.filter((item) =>
            item.industry?.includes('agricultural')
          )}
        />
      </Box>
    </Box>
  );
};
