import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabProps,
  Tabs,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { A11y, Navigation, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uid } from 'uuid';
import {
  CustomMenuButton,
  ProductCTAButtons,
  SwiperNavButtons,
} from '../../components';
import { accessories, drones } from '../../data/deals-products';
import { IDeal } from '../../models/app';
import { NoItemsAvailable } from '../products/components/Slider/NoItemsAvailable';
import { DealCard } from './DealCard';

const tabStyles: TabProps = {
  fontSize: { base: 'md', md: 'xl' },
  color: 'brand.blue',
  _active: { bg: '' },
  _selected: { fontWeight: 'bold', borderBottom: '2px' },
};

export const AllDeals = () => {
  return (
    <Box>
      <Box h="100%">
        <Tabs
          colorScheme="gray"
          bg="transparent"
          p={{ base: '0px', md: '1rem', lg: '3rem 0 3rem 3rem' }}
          defaultIndex={1}
        >
          <TabList borderBottom="1px" borderColor="gray.400">
            <Tab {...tabStyles}>Drones</Tab>
            <Tab {...tabStyles}>Accessories</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box display={{ base: 'none', lg: 'block' }}>
                {drones.map((drone) => (
                  <DealCard
                    key={drone.id}
                    product={drone}
                    cta={
                      <ProductCTAButtons
                        btn1Link={`/products/${drone.id}`}
                        btn2Styles={{ bgColor: 'brand.blue', color: 'white' }}
                      />
                    }
                  />
                ))}
              </Box>
              <Box display={{ base: 'block', lg: 'none' }}>
                <DealsSlider
                  products={drones}
                  cta={
                    <ProductCTAButtons
                      btn1Link={`/products/876899897979`}
                      btn2Styles={{ bgColor: 'brand.blue', color: 'white' }}
                    />
                  }
                />
              </Box>
            </TabPanel>
            <TabPanel>
              <Flex
                flexWrap="wrap"
                gap="1rem"
                display={{ base: 'none', lg: 'flex' }}
              >
                {accessories.map((accessory) => (
                  <DealCard
                    key={accessory.id}
                    product={accessory}
                    cta={
                      <CustomMenuButton
                        title="Buy now"
                        bgColor="brand.blue"
                        color="white"
                      />
                    }
                  />
                ))}
              </Flex>
              <Box display={{ base: 'block', lg: 'none' }}>
                <DealsSlider
                  products={accessories}
                  cta={
                    <CustomMenuButton
                      title="Buy now"
                      bgColor="brand.blue"
                      color="white"
                    />
                  }
                />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export const DealsSlider = ({
  products,
  cta,
}: {
  products: IDeal[];
  cta: ReactNode;
}) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y],
    spaceBetween: 30,
    slidesPerView: 'auto',
  };

  return (
    <Box w="100%" overflowX="auto" my="1rem">
      {products.length === 0 ? (
        <NoItemsAvailable />
      ) : (
        <Swiper {...sliderSettings} style={{ width: '100%' }}>
          {products.map((product) => (
            <SwiperSlide
              key={uid()}
              style={{
                padding: '0.5rem',
                maxWidth: '320px',
                flexGrow: 1,
              }}
            >
              <DealCard product={product} cta={cta} />
            </SwiperSlide>
          ))}
          <SwiperNavButtons disable={products.length === 1} />
        </Swiper>
      )}
    </Box>
  );
};
