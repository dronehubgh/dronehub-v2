import { Carousel } from '../../components';
import { carouselItems } from '../../data/products';
import { Categories } from './components/Categories';
import { ProductCTAButtons } from './components/ProductCTAButtons';
import { ProductSection } from './components/ProductSection';
import { ProductSlider } from './components/Slider/ProductSlider';

const items = carouselItems(<ProductCTAButtons />);

export const Products = () => (
  <>
    <Carousel items={items} />
    <Categories />
    <ProductSection
      title="Mavic Series Powerful Aerial Adventure"
      bgImageUrl="assets/images/mavic-bg-image.png"
      drones={<ProductSlider />}
    />

    <br />
    <br />
    <ProductSection
      title="Phantom Series Pro-level Aerial Performance"
      bgImageUrl="assets/images/phantom-bg-image.png"
      drones={<ProductSlider />}
    />
    <br />
    <br />
    <ProductSection
      title="Matrice Series Built to Last"
      bgImageUrl="assets/images/matrice-bg-image.png"
      drones={<ProductSlider />}
    />
    <br />
    <br />
    <ProductSection
      title="Inspire Series Redefined Power for Flight"
      bgImageUrl="assets/images/inspire-bg-image.png"
      drones={<ProductSlider />}
    />
    <br />
    <br />
    <ProductSection
      title="Agras Series Improved Agricultural Solution"
      bgImageUrl="assets/images/agras-bg-image.png"
      drones={<ProductSlider />}
    />
    <br />
    <br />
    <ProductSection
      title="Cameras and Gimbals"
      bgImageUrl="assets/images/camera-bg-image.png"
      drones={<ProductSlider />}
    />
    <br />
    <br />
    <ProductSection
      title="Software and Other Products"
      bgImageUrl="assets/images/software-bg-image.png"
      drones={<ProductSlider />}
    />
  </>
);

export { ProductCard } from './components/ProductCard/ProductCard';
export { ProductSlider } from './components/Slider/ProductSlider';
export { ProductCTAButtons };
