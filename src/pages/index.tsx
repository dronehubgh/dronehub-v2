import type { NextPage } from 'next';
import { OurServices, Solutions } from '../components';
import {
  DroneGuides,
  MainBanner,
  OurFocus,
  SliderGallery,
  Testimonials,
} from '../features';
import { getHomeBannerData } from '../functions/data-formatters';
import { client } from '../lib';
import { ISanityHomeBannerData } from '../models/sanity-types';

const Home: NextPage = ({ bannerData }: any) => {
  return (
    <div>
      <MainBanner bannerData={bannerData} />
      <SliderGallery />
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
