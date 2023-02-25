import type { NextPage } from 'next';
import { OurServices, Solutions } from '../components';
import { SliderGallery } from '../components/SliderGallery';
import { DroneGuides, MainBanner, OurFocus, Testimonials } from '../features';
import { getHomeBannerData } from '../functions/data-formatters';
import { client } from '../lib';
import { ISanityHomeBannerData } from '../models/sanity-types';

const images = [
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1676022073/donehub-assets/agro_o2ttkr.png',
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1676022136/donehub-assets/slide2_xjgd27.png',
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1676022122/donehub-assets/slide-1_mbundf.png',
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1676022160/donehub-assets/header-middle_gvagnz.png',
  'https://res.cloudinary.com/djmx11b6s/image/upload/v1676022191/donehub-assets/banner-img_cu8aii.png',
];

const Home: NextPage = ({ bannerData }: any) => {
  return (
    <div>
      <MainBanner bannerData={bannerData} />
      <SliderGallery images={images} />
      <OurFocus />
      <Testimonials />
      <Solutions />
      <OurServices />
      <DroneGuides />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "homeBannerData"]';
  const res: ISanityHomeBannerData[] = await client.fetch(query);
  const bannerData = getHomeBannerData(res[0]);

  return {
    props: { bannerData },
  };
};

export default Home;
