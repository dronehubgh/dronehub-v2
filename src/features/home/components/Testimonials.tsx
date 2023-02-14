import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Button } from '../../../components';

export const Testimonials = () => {
  const pagination = {
    clickable: true,
    renderBullet: (_index: number, className: string) => {
      return `<span class="${className} swiper-loader"></span>`;
    },
  };

  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Autoplay],
    pagination,
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    speed: 5000,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <Box w="100%" h="100%" my="4rem">
      <Box minH="800px" bg="brand.linear">
        <Box
          w="100%"
          minH="800px"
          bg="center / cover no-repeat url('https://res.cloudinary.com/djmx11b6s/image/upload/v1676051690/donehub-assets/Union_1_xgswfi.png')"
        >
          <Box p={{ base: '2rem', lg: '8rem' }} color="gray.100">
            <Text my="1rem">FOCUS</Text>
            <Heading size={{ base: 'lg', md: 'xl', lg: '2xl', xxl: '3xl' }}>
              On what you can do best, <br /> leave anything drone to us
            </Heading>
            <Text fontSize="1.2rem" w="90%" my="2rem">
              See how businesses trust us for their drone solutions
            </Text>
            <Flex
              gap="0.5rem"
              w={{ base: '90%', lg: '30rem' }}
              flexDir={{ base: 'column', md: 'row' }}
              mb="2rem"
            >
              <Button title="Talk to a Rep" />
              <Button title="Explore Drone" bg="brand.blue" color="gray.100" />
            </Flex>
            <Swiper
              {...sliderSettings}
              style={{ width: '100%', height: '100%' }}
            >
              <SwiperSlide
                style={{
                  position: 'relative',
                  minHeight: '500px',
                }}
              >
                <Flex
                  justify="flex-end"
                  align={{ base: 'flex-end', lg: 'center' }}
                  w={{ base: '100%', lg: '90%' }}
                  minH={{ base: '300px', lg: '700px' }}
                  borderRightRadius="20px"
                  p={{ base: '1rem', lg: '4rem' }}
                  bg="center / cover no-repeat url(https://res.cloudinary.com/djmx11b6s/image/upload/v1676054037/donehub-assets/bridge_1_smtor5.png)"
                  pos={{ base: 'relative' }}
                >
                  <Box
                    bg="white"
                    color="gray.900"
                    p={{ base: '1rem', lg: '3rem' }}
                    w="400px"
                    mb={{ base: '-8rem', lg: '0' }}
                    pos="relative"
                  >
                    <Text
                      fontSize={{ base: '0.8rem', md: '1rem', lg: '1.2rem' }}
                      w="90%"
                      my="2rem"
                      color="brand.blue"
                    >
                      “The Dronehub team is always ready to listen to you and
                      offer timely solutions to your specific needs.”
                    </Text>
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: 'lg', lg: '2xl' }}
                    >
                      Mr. Adabaka
                    </Text>
                    <Text fontSize={{ base: '0.8rem', lg: '1rem' }}>
                      TECHNICAL MANAGER, <br /> SIENNA SERVICES LIMITED
                    </Text>
                  </Box>
                </Flex>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
