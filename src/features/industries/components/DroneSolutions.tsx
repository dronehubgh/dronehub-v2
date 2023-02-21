import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { SolutionsSlider } from '../../../components';
import { ISolutionsItems } from '../../../components/SolutionsOverview/Solutions';

interface IIndustryDroneSolutionsProps {
  industryName: string;
  drones: ISolutionsItems[];
}

export const IndustryDroneSolutions = ({
  industryName,
  drones = [],
}: IIndustryDroneSolutionsProps) => {
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
        <SolutionsSlider items={drones} />
      </Box>
    </Box>
  );
};
