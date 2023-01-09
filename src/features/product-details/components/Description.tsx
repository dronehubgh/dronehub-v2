import React from 'react';
import {
  Box,
  Text,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Image,
  GridItem,
  Flex,
  Grid,
} from '@chakra-ui/react';
import { commonPx } from '../../../consts';

export const Description = ({
  Description,
  name,
  Specifications,
  Features,
  Specifications2,
  industry,
  mappingFunction,
  functions,
  Summary,
  note,
  cameraSpecifications,
  Safety,
}: any) => {
  return (
    <Grid
      py={{ base: '20px', md: 20, lg: '70px' }}
      px={commonPx}
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
    >
      <GridItem border="1px solid rgba(151, 151, 151, 0.3)" p={{ base: 10 }}>
        <Text
          my={{ base: 5, md: 7 }}
          fontSize={{ lg: '24px', base: '12px' }}
          fontWeight="700"
          textAlign={{ lg: 'left' }}
        >
          Description
        </Text>
        <Text fontSize={{ lg: '18px', base: '12px' }}>
          <Text>{name}</Text>
          <Text>{Description}</Text>
        </Text>
      </GridItem>
      {Specifications && (
        <GridItem border="1px solid rgba(151, 151, 151, 0.3)" p={{ base: 10 }}>
          <Text
            my={{ base: 5, md: 7 }}
            fontSize={{ lg: '24px', base: '12px' }}
            fontWeight="700"
            textAlign={{ lg: 'left' }}
          >
            Aircraft Specifications
          </Text>

          <Text fontSize={{ lg: '18px', base: '12px' }}>
            <Text>{Specifications}</Text>
          </Text>
        </GridItem>
      )}
      {functions && (
        <GridItem border="1px solid rgba(151, 151, 151, 0.3)" p={{ base: 10 }}>
          <Text
            my={{ base: 5, md: 7 }}
            fontSize={{ lg: '24px', base: '12px' }}
            fontWeight="700"
            textAlign={{ lg: 'left' }}
          >
            Overview
          </Text>
          <Text fontSize={{ lg: '18px', base: '12px' }}>
            <Text>{functions}</Text>
          </Text>
        </GridItem>
      )}
      {Specifications2 && (
        <GridItem border="1px solid rgba(151, 151, 151, 0.3)" p={{ base: 10 }}>
          <Text
            my={{ base: 5, md: 7 }}
            fontSize={{ lg: '24px', base: '12px' }}
            fontWeight="700"
            textAlign={{ lg: 'left' }}
          >
            Aircraft Specifications (continuation)
          </Text>

          <Text fontSize={{ lg: '18px', base: '12px' }}>
            <Text>{Specifications2}</Text>
          </Text>
        </GridItem>
      )}

      {cameraSpecifications && (
        <GridItem border="1px solid rgba(151, 151, 151, 0.3)" p={{ base: 10 }}>
          <Text
            my={{ base: 5, md: 7 }}
            fontSize={{ lg: '24px', base: '12px' }}
            fontWeight="700"
            textAlign={{ lg: 'left' }}
          >
            Camera Specifications
          </Text>
          <Text fontSize={{ lg: '18px', base: '12px' }}>
            <Text>{cameraSpecifications}</Text>
          </Text>
        </GridItem>
      )}
      {mappingFunction && (
        <GridItem border="1px solid rgba(151, 151, 151, 0.3)" p={{ base: 10 }}>
          <Text
            my={{ base: 5, md: 7 }}
            fontSize={{ lg: '24px', base: '12px' }}
            fontWeight="700"
            textAlign={{ lg: 'left' }}
          >
            Mapping Functions
          </Text>
          <Text fontSize={{ lg: '18px', base: '12px' }}>
            <Text>{mappingFunction}</Text>
          </Text>
        </GridItem>
      )}
      {Features && (
        <GridItem border="1px solid rgba(151, 151, 151, 0.3)" p={{ base: 10 }}>
          <Text
            my={{ base: 5, md: 7 }}
            fontSize={{ lg: '24px', base: '12px' }}
            fontWeight="700"
            textAlign={{ lg: 'left' }}
          >
            Features
          </Text>
          <Text fontSize={{ lg: '18px', base: '12px' }}>
            <Text>{Features}</Text>
          </Text>
        </GridItem>
      )}
      {industry && (
        <GridItem border="1px solid rgba(151, 151, 151, 0.3)" p={{ base: 10 }}>
          <Text
            my={{ base: 5, md: 7 }}
            fontSize={{ lg: '24px', base: '12px' }}
            fontWeight="700"
            textAlign={{ lg: 'left' }}
          >
            Industry Applications
          </Text>
          <Text fontSize={{ lg: '18px', base: '12px' }}>
            <Text>{industry}</Text>
          </Text>
        </GridItem>
      )}
      {Summary && (
        <GridItem border="1px solid rgba(151, 151, 151, 0.3)" p={{ base: 10 }}>
          <Text
            my={{ base: 5, md: 7 }}
            fontSize={{ lg: '24px', base: '12px' }}
            fontWeight="700"
            textAlign={{ lg: 'left' }}
          >
            Summary
          </Text>
          <Text fontSize={{ lg: '18px', base: '12px' }}>
            <Text>{Summary}</Text>
          </Text>
        </GridItem>
      )}
      {Safety && (
        <GridItem border="1px solid rgba(151, 151, 151, 0.3)" p={{ base: 10 }}>
          <Text
            my={{ base: 5, md: 7 }}
            fontSize={{ lg: '24px', base: '12px' }}
            fontWeight="700"
            textAlign={{ lg: 'left' }}
          >
            Important Safety Information
          </Text>
          <Text fontSize={{ lg: '18px', base: '12px' }}>
            <Text>{Safety}</Text>
          </Text>
        </GridItem>
      )}
      {note && (
        <Text pt={{ base: '20px', md: 20, lg: '70px' }} color="red">
          {note}
        </Text>
      )}
    </Grid>
  );
};
