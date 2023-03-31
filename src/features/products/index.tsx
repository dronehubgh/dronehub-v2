import { ProductsCarousel, Contact, OurServices } from '../../components';
import { Products } from './components/Products';

import { ICarouselItem, IProductCategory } from '../../models/app';
import { Categories } from '../../components/Categories';
import { LatestReleases } from './components/LatestReleases';

interface IProductsProps {
  categories: IProductCategory[];
  bannerData: ICarouselItem[];
}

export const ProductsFeature = ({ categories, bannerData }: IProductsProps) => (
  <>
    <ProductsCarousel items={bannerData} />
    <Categories categories={categories} />
    <LatestReleases />
    <Products />
    <OurServices />
    <Contact />
  </>
);

export { ProductCard } from '../../components/ProductCard/ProductCard';
export { ProductSlider } from './components/Slider/ProductSlider';
export { LatestReleases };
export { DealsCarousel } from '../deals/Carousel/Carousel';
