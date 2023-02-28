import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import { v4 as uid } from 'uuid';
import { ServiceCard } from '../../../../components';
import { AllServicesData } from '../../../../data';

export const AllServicesLarge = () => {
  return (
    <Box
      bg="brand.blueGradientThree"
      p={{ base: '2rem', lg: '3rem 0 2rem 2rem' }}
      my="2rem"
    >
      <Box mx="1rem" textAlign={{ base: 'center', lg: 'left' }}>
        <Text fontSize="2rem" fontWeight="bold" color="gray.100">
          Our Services
        </Text>
        <Text mb="1rem" color="gray.100">
          Customised solutions. Reliable support.
        </Text>
      </Box>
      <Grid
        gap="10px"
        gridTemplateColumns={{
          base: 'repeat(3, 1fr)',
          '2xl': 'repeat(4, 1fr)',
        }}
      >
        {AllServicesData.map((data) => (
          <ServiceCard
            w="28rem"
            key={uid()}
            title={data.title}
            description={data.description}
            imageUrl={data.imageUrl}
          />
        ))}
      </Grid>
    </Box>
  );
};
