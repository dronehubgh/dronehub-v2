import { ReactNode } from 'react';
import { Carousel } from '../../components';
import { carouselItems, productOverviews } from '../../data/products';
import { IProductOverview } from '../../models/app';
import { Categories } from './components/Categories';
import { ProductCard } from './components/ProductCard/ProductCard';
import { ProductCTAButtons } from './components/ProductCTAButtons';
import { ProductSection } from './components/ProductSection';
import { ProductSlider } from './components/Slider/ProductSlider';

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

const generateProductCards = (items: IProductOverview[]): ReactNode[] => {
  return items.map((item) => (
    <ProductCard
      key={item.id}
      title={item.title}
      description={item.description}
      cta={item.cta || <ProductCTAButtons />}
      imageUrl={item.imageUrl}
      outOfStock={item.outOfStock}
    />
  ));
};

export const Products = () => (
  <>
    <Carousel items={items} />
    <Categories />
    <ProductSection
      title="Mavic Series"
      subTitle="Powerful Aerial Adventure"
      bgImageUrl="assets/images/mavic-bg-image.png"
      content={
        <ProductSlider productCards={generateProductCards(mavicSeries)} />
      }
    />
    <div className="my-4 py-4" />
    <ProductSection
      title="Phantom Series"
      subTitle="Pro-level Aerial Performance"
      bgImageUrl="assets/images/phantom-bg-image.png"
      content={
        <ProductSlider productCards={generateProductCards(phantomSeries)} />
      }
    />
    <div className="my-4 py-4" />
    <ProductSection
      title="Matrice Series"
      subTitle="Built to Last"
      bgImageUrl="assets/images/matrice-bg-image.png"
      content={
        <ProductSlider productCards={generateProductCards(matriceSeries)} />
      }
    />
    <div className="my-4 py-4" />
    <ProductSection
      title="Inspire Series"
      subTitle="Redefined Power for Flight"
      bgImageUrl="assets/images/inspire-bg-image.png"
      content={
        <ProductSlider productCards={generateProductCards(inspireSeries)} />
      }
    />
    <div className="my-4 py-4" />
    <ProductSection
      title="Agras Series"
      subTitle="Improved Agricultural Solution"
      bgImageUrl="assets/images/agras-bg-image.png"
      content={
        <ProductSlider productCards={generateProductCards(agrasSeries)} />
      }
    />
    <div className="my-4 py-4" />
    <ProductSection
      title="Cameras and Gimbals"
      subTitle=""
      bgImageUrl="assets/images/camera-bg-image.png"
      content={
        <ProductSlider productCards={generateProductCards(camerasAndGimbals)} />
      }
    />
    <div className="my-4 py-4" />
    <ProductSection
      title="Software and Other Products"
      subTitle=""
      bgImageUrl="assets/images/software-bg-image.png"
      content={
        <ProductSlider productCards={generateProductCards(softwareAndOthers)} />
      }
    />
  </>
);

export { ProductCard } from './components/ProductCard/ProductCard';
export { ProductSlider } from './components/Slider/ProductSlider';
export { ProductCTAButtons };
