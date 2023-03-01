import { Flex, FlexProps, Grid, GridItem } from '@chakra-ui/react';
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const FunctionalDamage = () => {
  return (
    <Flex {...boxStyles}>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap="10px"
      >
        <GridItem {...cardProps} bgColor="#0066FF" alignSelf="center">
          Airframe Damage
        </GridItem>
        <GridItem {...cardProps} bgColor="#461DF1">
          Gimbal & Camera Damage
        </GridItem>
        <GridItem colSpan={2} {...cardProps} bgColor="#9CDEF6" color="gray.900">
          Motor Damage
        </GridItem>
      </Grid>
    </Flex>
  );
};
