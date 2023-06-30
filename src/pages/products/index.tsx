import { NextPage } from 'next';
import { ProductsFeature } from '../../features';
import { getBannerData } from '../../functions/data-formatters';
import { client } from '../../lib';
import {
  ICameraProperties,
  ICarouselItem,
  IDroneProperties,
  IOtherProductsProperties,
  IProductCategory,
} from '../../models/app';
import {
  cameraQuery,
  dronesQuery,
  otherProductsQuery,
  productCategoryQuery,
  productsBannerDataQuery,
  softwareQuery,
} from '../../queries';

interface AllProductsPageProps {
  categories: IProductCategory[];
  bannerData: ICarouselItem[];
  drones: IDroneProperties[];
  cameras: ICameraProperties[];
  otherProducts: IOtherProductsProperties[];
  software: IOtherProductsProperties[];
}

const AllProductsPage: NextPage<AllProductsPageProps> = ({
  categories,
  bannerData,
  drones,
  cameras,
  otherProducts,
  software,
}) => {
  return (
    <ProductsFeature
      categories={categories}
      bannerData={bannerData}
      drones={drones}
      cameras={cameras}
      otherProducts={otherProducts}
      software={software}
    />
  );
};

export const getServerSideProps = async () => {
  const [categoriesRes, bannerRes, drones, cameras, otherProducts, software]: [
    IProductCategory[],
    [{ bannerProducts: IDroneProperties[] }],
    IDroneProperties[],
    ICameraProperties[],
    IOtherProductsProperties[],
    IOtherProductsProperties[]
  ] = await Promise.all([
    client.fetch(productCategoryQuery),
    client.fetch(productsBannerDataQuery),
    client.fetch(dronesQuery),
    client.fetch(cameraQuery),
    client.fetch(otherProductsQuery),
    client.fetch(softwareQuery),
  ]);

  const bannerData = getBannerData(bannerRes.at(0)?.bannerProducts);
  const categories = categoriesRes;
  return {
    props: { categories, bannerData, drones, cameras, otherProducts, software },
  };
};

export default AllProductsPage;
