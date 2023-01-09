import { Box, Grid, GridItem, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { commonPx } from '../../../consts';

export const Accessories = () => {
  return (
    <Box>
      <Text
        pb={5}
        fontSize={{ lg: '40px', md: '36px', base: '26px' }}
        fontWeight="700"
      >
        Accessories for the name here{' '}
      </Text>
      <Grid templateColumns={{ lg: 'repeat(4, 1fr)' }}>
        {[]?.map((ass, index) => (
          <GridItem key={index}>
            <Box
              justifyContent="center"
              alignContent="center"
              border="1px solid rgba(151, 151, 151, 0.3)"
              p={{ lg: '30px' }}
            >
              <Image
                h={{ lg: '150px', base: '125px' }}
                src={`/images/drones/`}
                alt=""
              />
              <Text fontSize={{ base: '16px', lg: '18px' }} textAlign="center">
                Test
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>

      <Box px={commonPx}>
        <Text
          pb={5}
          fontSize={{ lg: '40px', md: '36px', base: '26px' }}
          fontWeight="700"
        >
          Other drones you can buy{' '}
        </Text>

        {/* <ProductSection section={section} /> */}
      </Box>
    </Box>
  );
};
