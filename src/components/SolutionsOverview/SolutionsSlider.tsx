import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { CSSProperties } from 'react';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { v4 as uid } from 'uuid';
import { ProductCTAButtons } from '../Buttons/ProductCTAButtons';
import { SwiperNavButtons } from '../SwiperNavButtons';
import { ISolutionsItems } from './Solutions';
import styles from './Solutions.module.scss';

const slideStyles: CSSProperties = {
  maxWidth: '400px',
  minWidth: '300px',
  height: '400px',
  boxSizing: 'border-box',
  border: '1px solid #cdcdcd',
};
export const SolutionsSlider = ({ items }: { items: ISolutionsItems[] }) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y, Autoplay],
    spaceBetween: 0,
    slidesPerView: 'auto',
  };

  return (
    <Box w="100%" h="100%" className={styles.solutionsSlider}>
      <Swiper {...sliderSettings} style={{ width: '100%', height: '100%' }}>
        {items.map((item) => (
          <SwiperSlide key={uid()} style={slideStyles}>
            <Flex
              justify="center"
              align="center"
              h="100%"
              bgColor="white"
              _hover={{ bgColor: 'brand.blue' }}
              className={styles.solutionsSlide}
              transition="all .4s"
            >
              <Flex flexDir="column">
                <Box
                  w="300px"
                  h="250px"
                  bg={`center / contain no-repeat url(${item.imageUrl})`}
                />
                <Box
                  textAlign="center"
                  className={styles.sliderDetails}
                  mb="1rem"
                  color="gray.100"
                >
                  <Text fontSize="lg" fontWeight="bold">
                    {item.name}
                  </Text>
                  <Text>{item.type}</Text>
                  <ProductCTAButtons
                    containerStyles={{ justify: 'center' }}
                    btn1Styles={{
                      borderColor: 'gray.100',
                      color: 'gray.100',
                      _active: { bg: 'none' },
                    }}
                  />
                </Box>
              </Flex>
            </Flex>
          </SwiperSlide>
        ))}
        <SwiperNavButtons
          bgColor="white"
          color="brand.blue"
          borderWidth="1px"
          borderColor="brand.blue"
          _hover={{ bgColor: 'brand.blue', color: 'gray.100' }}
          _active={{ bgColor: 'brand.blue', color: 'gray.100' }}
        />
      </Swiper>
    </Box>
  );
};
