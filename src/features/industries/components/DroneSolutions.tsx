import { Box, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SolutionsSlider } from '../../../components';
import { ISolutionsItems } from '../../../components/SolutionsOverview/Solutions';
import { DronesContext } from '../../../context/dronesContext';
import { Industry } from '../../../models/app';

interface IIndustryDroneSolutionsProps {
  industryName: string;
  industry: Industry;
}

export const IndustryDroneSolutions = ({
  industryName,
  industry,
}: IIndustryDroneSolutionsProps) => {
  const { drones } = useContext(DronesContext);

  return (
    <Box bg="#FAFAFA" my="4rem">
      <Text
        py="2rem"
        px={{ base: '2rem', lg: '4rem' }}
        fontSize="2xl"
        fontWeight="bold"
      >
        Drones Solutions for {industryName}
      </Text>

      <Box>
        <SolutionsSlider
          items={drones.filter((drone) => drone.industry?.includes(industry))}
        />
      </Box>
    </Box>
  );
};
