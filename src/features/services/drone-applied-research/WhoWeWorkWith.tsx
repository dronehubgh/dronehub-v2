import {
  Box,
  Flex,
  FlexProps,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';

const boxStyles: FlexProps = {
  minH: '200px',
  justify: 'center',
  align: 'center',
  borderWidth: '1px',
  fontWeight: 'bold',
  px: '1rem',
};
export const WhoWeWorkWith = () => {
  return (
    <Box w="80%" mx="auto" my="4rem">
      <Heading>Who Do We Work With?</Heading>
      <Text my="2rem">
        We work with different professional, educational, and government bodies
        to carry out effective research and gather accurate data.
      </Text>

      <Grid templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
        <GridItem>
          <Flex {...boxStyles}>Institutions of Higher Learning</Flex>
        </GridItem>
        <GridItem>
          <Flex {...boxStyles}>Government Agencies</Flex>
        </GridItem>
        <GridItem>
          <Flex {...boxStyles}>Developmental Organizations</Flex>
        </GridItem>
        <GridItem>
          <Flex {...boxStyles}>Private Corporations</Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};
