import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { solutionsItems } from '../../data/products';
import { client } from '../../lib';
import { IDroneProperties, Industry } from '../../models/app';
import { SolutionsSlider } from './SolutionsSlider';
import { dronesQuery } from '../../queries';

export interface ISolutionsItems {
  imageUrl: string;
  categories: string[];
  name: string;
  link: string;
  type: 'Consumer' | 'Enterprise';
}

interface ISolutionsProps {
  title?: string;
}

export const Solutions = ({ title }: ISolutionsProps) => {
  const [selectedItemText, setSelectedItemText] =
    useState<Industry>('surveying');
  const [drones, setDrones] = useState<IDroneProperties[]>([]);
  const [filteredDrones, setFilteredDrones] = useState<IDroneProperties[]>([]);

  const handleItemClick = (text: Industry) => {
    setSelectedItemText(text);
    setFilteredDrones(drones.filter((item) => item.industry?.includes(text)));
  };

  useEffect(() => {
    async function loadDrones() {
      const drones: IDroneProperties[] = await client.fetch(dronesQuery);
      setDrones(drones);
      setFilteredDrones(
        drones.filter((drone) => drone.industry?.includes('surveying'))
      );
    }

    loadDrones();
  }, []);

  return (
    <Box bg="#FAFAFA" my="4rem">
      <Text
        py="2rem"
        px={{ base: '2rem', lg: '4rem' }}
        fontSize="2xl"
        fontWeight="bold"
      >
        {title || 'Drones Solutions for Every Industry'}
      </Text>
      <Flex px={{ base: '2rem', lg: '4rem' }} flexWrap="wrap" mb="2rem">
        <TabButton
          id="surveying"
          onClick={() => handleItemClick('surveying')}
          text="Surveying"
          selectedItem={selectedItemText}
        />
        <TabButton
          id="agricultural"
          onClick={() => handleItemClick('agricultural')}
          text="Agriculture"
          selectedItem={selectedItemText}
        />
        <TabButton
          id="media-entertainment"
          onClick={() => handleItemClick('media-entertainment')}
          text="Media & Entertainment"
          selectedItem={selectedItemText}
        />
        <TabButton
          id="public-safety"
          onClick={() => handleItemClick('public-safety')}
          text="Public Safety"
          selectedItem={selectedItemText}
        />
        <TabButton
          id="forestry"
          onClick={() => handleItemClick('forestry')}
          text="Forestry"
          selectedItem={selectedItemText}
        />
        <TabButton
          id="security"
          onClick={() => handleItemClick('security')}
          text="Security"
          selectedItem={selectedItemText}
        />
        <TabButton
          id="mining"
          selectedItem={selectedItemText}
          onClick={() => handleItemClick('mining')}
          text="Mining"
        />
        <TabButton
          id="energy-infrastructure"
          onClick={() => handleItemClick('energy-infrastructure')}
          text="Energy & Infrastructure"
          selectedItem={selectedItemText}
        />
        <TabButton
          id="construction"
          onClick={() => handleItemClick('construction')}
          text="Construction"
          selectedItem={selectedItemText}
        />
      </Flex>
      <Box>
        <SolutionsSlider items={filteredDrones} />
      </Box>
    </Box>
  );
};

export const TabButton = ({
  id,
  text,
  selectedItem,
  onClick,
}: {
  id: string;
  text: string;
  selectedItem: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button
      borderRadius="0"
      bgColor={selectedItem === id ? 'brand.blue' : 'white'}
      color={selectedItem === id ? 'white' : 'gray.800'}
      _hover={{ bgColor: selectedItem === id ? 'none' : 'gray.200' }}
      _active={{ bgColor: 'none' }}
      borderWidth="1px"
      borderColor="gray.200"
      h={{ base: '35px', lg: '55px' }}
      mx={{ base: '0.5rem', lg: '1rem' }}
      my="0.5rem"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
