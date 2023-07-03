import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useMedia } from 'react-use';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { IBlogOverview } from '../../models/app';

interface Props {
  articles: IBlogOverview[];
}

export const BlogSlider = ({ articles = [] }: Props) => {
  const xxl = useMedia('(min-width: 1492px)', false);
  const xl = useMedia('(min-width: 1190px)', false);
  const lg = useMedia('(min-width: 1024px)', false);
  const md = useMedia('(min-width: 600px)', false);

  const pagination = {
    clickable: true,
    renderBullet: (_index: number, className: string) => {
      return `<span class="${className} swiper-loader"></span>`;
    },
  };

  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Autoplay],
    pagination,
    spaceBetween: 30,
    slidesPerView: xxl || xl ? 3 : lg || md ? 2 : 1,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
    },
  };

  return (
    <Box w="100%" h="100%" my="4rem" p="1rem">
      <Swiper
        {...sliderSettings}
        style={{ width: '100%', height: '100%' }}
        className="dh-slider-gallery"
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <SliderStoryCard
              title={article.title}
              link={`/blog/${article.slug}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

const linerGradient = `linear-gradient(180deg, #CCD9E3 0%, #2480CD 100%)`;

interface ISliderStoryCardProps {
  title: string;
  link: string;
}
const SliderStoryCard = ({ title, link }: ISliderStoryCardProps) => (
  <Flex
    w="100%"
    height={{ base: '300px', lg: '400px' }}
    bg={linerGradient}
    px="3rem"
    rounded="xl"
    color="brand.blue"
    m="1rem"
    flexDir="column"
    justify="center"
  >
    <Text fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} fontWeight="bold">
      {title}
    </Text>
    <Link href={link}>
      <Flex align="center" mt="1rem" fontWeight="700" w="fit-content">
        <Text mr="0.5rem" pb="0.4rem">
          Read more
        </Text>
        <BsArrowRight />
      </Flex>
    </Link>
  </Flex>
);
