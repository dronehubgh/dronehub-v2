import { NextPage } from 'next';
import { ProductsFeature } from '../../features';
import {
  getBannerData,
  getProductCategories,
} from '../../functions/data-formatters';
import { client } from '../../lib';
import { ISanityProductCategory } from '../../models';
import { ICarouselItem, IProductCategory } from '../../models/app';

interface AllProductsPageProps {
  categories: IProductCategory[];
  bannerData: ICarouselItem[];
}

const AllProductsPage: NextPage<AllProductsPageProps> = ({
  categories,
  bannerData,
}) => {
  return <ProductsFeature categories={categories} bannerData={bannerData} />;
};

export const getServerSideProps = async () => {
  const query = '*[_type == "category"]';
  const res: ISanityProductCategory[] = await client.fetch(query);
  const categories = getProductCategories(res);

  const bannerQuery = '*[_type == "productsBannerData"]';
  const bannerRes = await client.fetch(bannerQuery);
  const bannerData = getBannerData(bannerRes);

  return {
    props: { categories, bannerData },
  };
};

export default AllProductsPage;
