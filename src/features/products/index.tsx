import { Contact, OurServices, ProductsCarousel } from '../../components';
import { Products } from './components/Products';

import { Categories } from '../../components/Categories';
import {
  mapOtherProductsToProductOverview,
  mapProductPropsToProductOverview,
} from '../../functions';
import {
  ICameraProperties,
  ICarouselItem,
  IDroneProperties,
  IOtherProductsProperties,
  IProductCategory,
  IProductSectionItem,
  IProductsState,
} from '../../models/app';
import { LatestReleases } from './components/LatestReleases';

interface IProductsProps {
  categories: IProductCategory[];
  bannerData: ICarouselItem[];
  drones: IDroneProperties[];
  cameras: ICameraProperties[];
  otherProducts: IOtherProductsProperties[];
  software: IOtherProductsProperties[];
}

const accessory: IProductSectionItem = {
  name: 'accessories',
  displayName: 'Accessories',
  products: [],
};

const drone: IProductSectionItem = {
  name: 'drones',
  displayName: 'Drones',
  products: [],
};

export const ProductsFeature = ({
  categories,
  bannerData,
  drones,
  cameras,
  otherProducts,
  software,
}: IProductsProps) => {
  const getProducts = (): IProductsState => ({
    mavicSeries: [
      {
        ...drone,
        products: mapProductPropsToProductOverview(drones, 'mavic-series'),
      },
      { ...accessory },
    ],
    inspireSeries: [
      {
        ...drone,
        products: mapProductPropsToProductOverview(drones, 'inspire-series'),
      },
      { ...accessory },
    ],
    phantomSeries: [
      {
        ...drone,
        products: mapProductPropsToProductOverview(drones, 'phantom-series'),
      },
      { ...accessory },
    ],
    matriceSeries: [
      {
        ...drone,
        products: mapProductPropsToProductOverview(drones, 'matrice-series'),
      },
      { ...accessory },
    ],
    agrasSeries: [
      {
        ...drone,
        products: mapProductPropsToProductOverview(drones, 'agras-series'),
      },
      { ...accessory },
    ],
    djiFPVDrones: [
      {
        ...drone,
        products: mapProductPropsToProductOverview(drones, 'dji-fpv-drone'),
      },
      { ...accessory },
    ],
    camerasAndGimbals: [
      {
        name: 'zenmuse',
        displayName: 'Zenmuse',
        products: mapProductPropsToProductOverview(cameras, 'zenmuse-series'),
      },
      {
        name: 'osmos',
        displayName: 'Osmos',
        products: mapProductPropsToProductOverview(cameras, 'osmos-series'),
      },
      {
        name: 'ronin',
        displayName: 'Ronin',
        products: mapProductPropsToProductOverview(cameras, 'ronin-series'),
      },
      {
        name: 'extra-payloads',
        displayName: 'Extra Payloads',
        products: mapProductPropsToProductOverview(cameras, 'extra-payload'),
      },
    ],
    softwareAndOthers: [
      {
        name: 'software',
        displayName: 'Software',
        products: mapOtherProductsToProductOverview(software),
      },
      {
        name: 'other-products',
        displayName: 'Other Products',
        products: mapOtherProductsToProductOverview(otherProducts),
      },
    ],
  });

  return (
    <>
      <ProductsCarousel items={bannerData} />
      <Categories categories={categories} />
      <LatestReleases />
      <Products products={getProducts()} />
      <OurServices />
      <Contact />
    </>
  );
};

export { ProductCard } from '../../components/ProductCard/ProductCard';
export { DealsCarousel } from '../deals/Carousel/Carousel';
export { ProductSlider } from './components/Slider/ProductSlider';
export { LatestReleases };
