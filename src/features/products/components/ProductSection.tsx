import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React, { ReactNode, useId } from 'react';
import { IProductOverview, IProductSectionItem } from '../../../models/app';
import { ProductCard } from './ProductCard/ProductCard';
import { ProductCTAButtons } from './ProductCTAButtons';
import { ProductSlider } from './Slider/ProductSlider';
import { productSection } from './_styles';
import { v4 as uid } from 'uuid';

const { headingStyles, boxStyles } = productSection;

interface ProductSectionProps {
  title: string;
  subTitle: string;
  bgImageUrl: string;
  items: IProductSectionItem[];
}

export const ProductSection = ({
  title,
  subTitle,
  bgImageUrl,
  items,
}: ProductSectionProps) => {
  const generateProductCards = (items: IProductOverview[]): ReactNode[] => {
    return items.map((item) => (
      <ProductCard
        key={item.id}
        title={item.title}
        description={item.description}
        cta={item.cta || <ProductCTAButtons />}
        imageUrl={item.imageUrl}
        outOfStock={item.outOfStock}
      />
    ));
  };

  return (
    <Box bgImage={bgImageUrl} {...boxStyles}>
      <Box h="100%">
        <Box pt="2rem" pb="3rem">
          <Heading {...headingStyles}>{title}</Heading>
          <Heading {...headingStyles}>{subTitle}</Heading>
        </Box>
        <Tabs
          colorScheme="gray"
          bg="transparent"
          p={{ base: '0px', md: '1rem', lg: '3rem 0 3rem 3rem' }}
        >
          <TabList borderBottom="1px" borderColor="gray.400">
            {items.map((item) => (
              <Tab
                key={uid()}
                fontSize="xl"
                color="gray.100"
                _active={{ bg: '' }}
                _selected={{ fontWeight: 'bold', borderBottom: '2px' }}
              >
                {item.displayName}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {items.map((item) => (
              <TabPanel key={uid()}>
                <ProductSlider
                  productCards={generateProductCards(item.products)}
                />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
