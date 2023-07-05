import { Box, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SolutionsSlider } from '../../../components';
import { ISolutionsItems } from '../../../components/SolutionsOverview/Solutions';
import { DronesContext } from '../../../context/dronesContext';

interface IExploreDronesProps {
  drones?: ISolutionsItems[];
}

export const ExploreDrones = () => {
  const { drones } = useContext(DronesContext);

  return (
    <Box bg="#FAFAFA" my="4rem">
      <Text
        py="2rem"
        px={{ base: '2rem', lg: '4rem' }}
        fontSize={{ base: 'xl', lg: '2xl' }}
        fontWeight="bold"
      >
        Explore Drones for Creatives and Professionals
      </Text>

      <Box>
        <SolutionsSlider
          items={drones.filter((drone) =>
            drone.industry?.includes('media-entertainment')
          )}
        />
      </Box>
    </Box>
  );
};
