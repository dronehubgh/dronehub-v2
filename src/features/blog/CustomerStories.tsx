import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { A11y, Navigation, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from '../../components';
import { StoryCard } from './StoryCard';

export const CustomerStories = () => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y],
    spaceBetween: 20,
    slidesPerView: 'auto',
    freeMode: true,
  };

  return (
    <Box m="3rem">
      <Heading mx="2rem" size={{ base: 'md', lg: 'lg' }} py="1rem">
        Customer Stories
      </Heading>

      <Box>
        <Flex bgColor="brand.blue" boxSizing="border-box">
          <Box w={{ base: '100%', lg: '50%' }} p={{ base: '2rem', lg: '4rem' }}>
            <Image
              src="https://res.cloudinary.com/djmx11b6s/image/upload/v1687782850/donehub-assets/p4p_2_jkhg3s.png"
              alt="Customer Stories"
              w="90%"
              mx="auto"
              maxW="400px"
            />
          </Box>
          <Flex
            w={{ base: '100%', lg: '50%' }}
            p={{ base: '2rem', lg: '4rem' }}
            flexDir="column"
            align="start"
            justify="center"
            color="white"
          >
            <Heading size="xl">Prefos Ghana Limited</Heading>
            <Text>Obtaining Aerial Data of Street Lighting Infrastructure</Text>
          </Flex>
        </Flex>

        <CustomerStoryCard />
        <Divider />
        <CustomerStoryCard />
        <Divider />
        <CustomerStoryCard />
        <Divider />
        <CustomerStoryCard />
      </Box>
    </Box>
  );
};

interface ICustomerStoryCardProps {
  profileUrl: string;
  customerName: string;
  address: string;
}
export const CustomerStoryCard = () => {
  return (
    <Flex align="center" justify="space-between" py="1rem" px="2rem">
      <Flex align="center" w="70%">
        <Box bgColor="#9CDEF6" borderRadius="50%">
          <Image
            boxSize="40px"
            src="https://res.cloudinary.com/djmx11b6s/image/upload/v1687783550/donehub-assets/profile_dv5c2j.png"
            alt="profile"
          />
        </Box>
        <Text fontWeight="bold" mx="1rem">
          Sienna Services Limited
        </Text>
      </Flex>
      <Text w="30%">Accra, Ghana</Text>
    </Flex>
  );
};
