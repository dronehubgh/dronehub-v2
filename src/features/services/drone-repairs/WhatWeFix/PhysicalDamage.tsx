import { Flex, FlexProps, Grid } from '@chakra-ui/react';
import { boxStyles } from './_styles';

const cardProps: FlexProps = {
  justify: 'center',
  align: 'center',
  minH: '120px',
  fontWeight: 'bold',
  fontSize: { base: '0.8rem', lg: '1rem' },
  px: '2rem',
  textAlign: 'center',
  color: 'gray.100',
};

export const PhysicalDamage = () => {
  return (
    <Flex {...boxStyles}>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap="10px"
      >
        <Flex {...cardProps} bgColor="#0066FF">
          Airframe Damage
        </Flex>
        <Flex {...cardProps} bgColor="#461DF1">
          Gimbal & Camera Damage
        </Flex>
        <Flex {...cardProps} bgColor="#0645A4">
          Remote Controller Damage
        </Flex>
        <Flex {...cardProps} bgColor="#9CDEF6" color="gray.900">
          Motor Damage
        </Flex>
      </Grid>
    </Flex>
  );
};
