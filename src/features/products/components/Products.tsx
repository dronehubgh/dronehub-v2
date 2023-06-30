import { Box } from '@chakra-ui/react';
import React from 'react';
import { productOverviews } from '../../../data/products';
import { IProductSectionItem, IProductsState } from '../../../models/app';
import { ProductSection } from './ProductSection';

interface IProducts {
  products: IProductsState;
}

export const Products = ({ products }: IProducts) => {
  const {
    mavicSeries,
    phantomSeries,
    matriceSeries,
    inspireSeries,
    agrasSeries,
    camerasAndGimbals,
    softwareAndOthers,
  } = products;
  return (
    <Box pb="2rem">
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
    </Box>
  );
};
