import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { v4 as uid } from 'uuid';
import { generateProductCards } from '..';
import { IProductSectionItem } from '../../../models/app';
import { ProductSlider } from './Slider/ProductSlider';
import { productSection } from './_styles';

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
                fontSize={{ base: 'md', md: 'xl' }}
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
