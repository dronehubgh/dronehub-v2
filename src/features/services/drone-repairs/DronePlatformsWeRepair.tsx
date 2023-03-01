import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { SolutionsSlider } from '../../../components';
import { solutionsItems } from '../../../data/products';

export const DronePlatformsWeRepair = () => {
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
          items={solutionsItems.filter((item) =>
            item.categories.includes('Surveying')
          )}
        />
      </Box>
    </Box>
  );
};
