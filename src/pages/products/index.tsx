import { NextPage } from 'next';
import { ProductsFeature } from '../../features';
import {
  getBannerData,
  getProductCategories,
} from '../../functions/data-formatters';
import { client } from '../../lib';
import { ISanityProductCategory } from '../../models';
import {
  ICameraProperties,
  ICarouselItem,
  IDroneProperties,
  IProductCategory,
} from '../../models/app';
import {
  cameraQuery,
  dronesQuery,
  productsBannerDataQuery,
} from '../../queries';

interface AllProductsPageProps {
  categories: IProductCategory[];
  bannerData: ICarouselItem[];
  drones: IDroneProperties[];
  cameras: ICameraProperties[];
}

const AllProductsPage: NextPage<AllProductsPageProps> = ({
  categories,
  bannerData,
  drones,
  cameras,
}) => {
  return (
    <ProductsFeature
      categories={categories}
      bannerData={bannerData}
      drones={drones}
      cameras={cameras}
    />
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "category"]';
  const res: ISanityProductCategory[] = await client.fetch(query);
  const categories = getProductCategories(res);

  const bannerRes: [{ bannerProducts: IDroneProperties[] }] =
    await client.fetch(productsBannerDataQuery);
  const bannerData = getBannerData(bannerRes.at(0)?.bannerProducts);

  const drones: IDroneProperties[] = await client.fetch(dronesQuery);
  const cameras: ICameraProperties[] = await client.fetch(cameraQuery);

  return {
    props: { categories, bannerData, drones, cameras },
  };
};

export default AllProductsPage;
