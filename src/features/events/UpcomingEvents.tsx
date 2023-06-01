import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { FieldDemoCard } from './FieldDemoCard';
import { ProductNewsCard } from './ProductNewsCard';

export const UpcomingEvents = () => {
  return (
    <Tabs my="2rem">
      <TabList>
        <Tab
          minW="12rem"
          _selected={{ borderColor: 'brand.blue', color: 'brand.blue' }}
        >
          Field Demo
        </Tab>
        <Tab
          minW="12rem"
          _selected={{ borderColor: 'brand.blue', color: 'brand.blue' }}
        >
          Product News
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Flex gap={8} flexWrap="wrap">
            <FieldDemoCard />
            <FieldDemoCard colorScheme="orange.500" />
            <FieldDemoCard colorScheme="blue.100" />
            <FieldDemoCard colorScheme="orange.500" />
            <FieldDemoCard />
            <FieldDemoCard colorScheme="blue.100" />
            <FieldDemoCard />
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex gap={8} flexWrap="wrap">
            <ProductNewsCard />
            <ProductNewsCard />
            <ProductNewsCard />
            <ProductNewsCard />
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
