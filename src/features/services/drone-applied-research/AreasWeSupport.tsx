import {
  Box,
  Divider,
  Grid,
  GridItem,
  GridItemProps,
  Heading,
} from '@chakra-ui/react';
import React from 'react';

const gridItemStyles: GridItemProps = {
  py: { base: '0.5rem', lg: '1.5rem' },
  px: { base: '0.5rem', lg: '0' },
  textAlign: { base: 'left', lg: 'center' },
  my: '0.5rem',
  color: 'gray.100',
  borderBottomWidth: { base: '1px', lg: '0' },
};

export const AreasWeSupport = () => {
  return (
    <Box bgColor="brand.darkBlue" py="3rem">
      <Box w={{ base: '90%', lg: '80%' }} mx="auto">
        <Heading color="gray.100" textAlign="center" my="2rem">
          Research Areas We Support
        </Heading>

        <Grid
          borderTopWidth="1px"
          borderBottomWidth={{ base: '0', lg: '1px' }}
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
          templateRows={{ base: 'repeat(6, 1fr)', lg: 'repeat(2, 1fr)' }}
          w="80%"
          mx="auto"
        >
          <GridItem
            {...gridItemStyles}
            borderRightWidth={{ base: '0', lg: '1px' }}
            borderBottomWidth="1px"
          >
            Forestry and natural resources research
          </GridItem>
          <GridItem
            {...gridItemStyles}
            borderRightWidth={{ base: '0', lg: '1px' }}
            borderBottomWidth="1px"
          >
            Traffic data collection and assessment
          </GridItem>
          <GridItem {...gridItemStyles} borderBottomWidth="1px">
            Humanitarian and disaster assessments
          </GridItem>

          <GridItem
            {...gridItemStyles}
            borderRightWidth={{ base: '0', lg: '1px' }}
          >
            Coastline research
          </GridItem>
          <GridItem
            {...gridItemStyles}
            borderRightWidth={{ base: '0', lg: '1px' }}
          >
            Proof of concepts
          </GridItem>
          <GridItem {...gridItemStyles}>Research Organisations</GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
