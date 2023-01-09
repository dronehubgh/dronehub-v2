import { ReactNode } from 'react';
import { Carousel } from '../../components';
import { carouselItems, productOverviews } from '../../data/products';
import { IProductOverview } from '../../models/app';
import { Categories } from './components/Categories';
import { LatestReleases } from './components/LatestReleases';
import { IOverrides, ProductCard } from './components/ProductCard/ProductCard';
import { ProductCTAButtons } from './components/ProductCTAButtons';
import { ProductSection } from './components/ProductSection';

const {
  mavicSeries,
  phantomSeries,
  matriceSeries,
  inspireSeries,
  agrasSeries,
  camerasAndGimbals,
  softwareAndOthers,
} = productOverviews;

const items = carouselItems(<ProductCTAButtons />);

export const Products = () => (
  <>
    <Carousel items={items} />
    <Categories />
    <LatestReleases />

    <ProductSection
      title="Mavic Series"
      subTitle="Powerful Aerial Adventure"
      bgImageUrl="assets/images/mavic-bg-image.png"
      items={mavicSeries}
    />
    <div className="my-4 py-4" />
    <ProductSection
      title="Phantom Series"
      subTitle="Pro-level Aerial Performance"
      bgImageUrl="assets/images/phantom-bg-image.png"
      items={phantomSeries}
    />
    <div className="my-4 py-4" />
    <ProductSection
      title="Matrice Series"
      subTitle="Built to Last"
      bgImageUrl="assets/images/matrice-bg-image.png"
      items={matriceSeries}
    />
    <div className="my-4 py-4" />
    <ProductSection
      title="Inspire Series"
      subTitle="Redefined Power for Flight"
      bgImageUrl="assets/images/inspire-bg-image.png"
      items={inspireSeries}
    />
    <div className="my-4 py-4" />
    <ProductSection
      title="Agras Series"
      subTitle="Improved Agricultural Solution"
      bgImageUrl="assets/images/agras-bg-image.png"
      items={agrasSeries}
    />
    <div className="my-4 py-4" />
    <ProductSection
      title="Cameras and Gimbals"
      subTitle=""
      bgImageUrl="assets/images/camera-bg-image.png"
      items={camerasAndGimbals}
    />
    <div className="my-4 py-4" />
    <ProductSection
      title="Software and Other Products"
      subTitle=""
      bgImageUrl="assets/images/software-bg-image.png"
      items={softwareAndOthers}
    />
  </>
);

export const generateProductCards = (
  items: IProductOverview[],
  restStyles?: IOverrides
): ReactNode[] => {
  return items.map((item) => (
    <ProductCard
      key={item.id}
      title={item.title}
      description={item.description}
      cta={item.cta || <ProductCTAButtons />}
      imageUrl={item.imageUrl}
      outOfStock={item.outOfStock}
      restStyles={restStyles}
    />
  ));
};

export { ProductCard } from './components/ProductCard/ProductCard';
export { ProductSlider } from './components/Slider/ProductSlider';
export { ProductCTAButtons, LatestReleases };
