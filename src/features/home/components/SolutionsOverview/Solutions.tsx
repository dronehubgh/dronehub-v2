import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { MouseEventHandler, useState } from 'react';
import { solutionsItems } from '../../../../data/products';
import { SolutionsSlider } from './SolutionsSlider';

export interface ISolutionsItems {
  imageUrl: string;
  categories: string[];
}

export const Solutions = () => {
  const [selectedItemText, setSelectedItemText] = useState('Surveying');
  const [filteredItems, setFilteredItems] =
    useState<ISolutionsItems[]>(solutionsItems);

  const handleItemClick = (text: string) => {
    setSelectedItemText(text);
    setFilteredItems(
      solutionsItems.filter((item) => item.categories.includes(text))
    );
  };

  return (
    <Box bg="#FAFAFA" my="4rem">
      <Text
        py="2rem"
        px={{ base: '2rem', lg: '4rem' }}
        fontSize="2xl"
        fontWeight="bold"
      >
        Drones Solutions for Every Industry
      </Text>
      <Flex px={{ base: '2rem', lg: '4rem' }} flexWrap="wrap" mb="2rem">
        <TabButton
          onClick={() => handleItemClick('Surveying')}
          text="Surveying"
          selectedItem={selectedItemText}
        />
        <TabButton
          onClick={() => handleItemClick('Agriculture')}
          text="Agriculture"
          selectedItem={selectedItemText}
        />
        <TabButton
          onClick={() => handleItemClick('Media & Entertainment')}
          text="Media & Entertainment"
          selectedItem={selectedItemText}
        />
        <TabButton
          onClick={() => handleItemClick('Public Safety')}
          text="Public Safety"
          selectedItem={selectedItemText}
        />
        <TabButton
          onClick={() => handleItemClick('Forestry')}
          text="Forestry"
          selectedItem={selectedItemText}
        />
        <TabButton
          onClick={() => handleItemClick('Security')}
          text="Security"
          selectedItem={selectedItemText}
        />
        <TabButton
          selectedItem={selectedItemText}
          onClick={() => handleItemClick('Mining')}
          text="Mining"
        />
        <TabButton
          onClick={() => handleItemClick('Energy & Infrastructure')}
          text="Energy & Infrastructure"
          selectedItem={selectedItemText}
        />
        <TabButton
          onClick={() => handleItemClick('Construction')}
          text="Construction"
          selectedItem={selectedItemText}
        />
      </Flex>
      <Box>
        <SolutionsSlider items={filteredItems} />
      </Box>
    </Box>
  );
};

export const TabButton = ({
  text,
  selectedItem,
  onClick,
}: {
  text: string;
  selectedItem: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button
      borderRadius="0"
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      h={{ base: '35px', lg: '55px' }}
      mx={{ base: '0.5rem', lg: '1rem' }}
      my="0.5rem"
      borderBottomWidth={selectedItem === text ? '2px' : '1px'}
      borderBottomColor={selectedItem === text ? 'brand.blue' : 'gray.200'}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
