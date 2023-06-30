import { capitalizeFirstLetter } from '.';
import { urlFor } from '../lib';
import { ISanityProductCategory } from '../models';
import {
  ICarouselItem,
  IDroneProperties,
  IMainBannerData,
  IProductCategory,
} from '../models/app';
import {
  ISanityBannerData,
  ISanityHomeBannerData,
} from '../models/sanity-types';

export const getProductCategories = (
  categories: ISanityProductCategory[]
): IProductCategory[] => {
  return categories.map((category) => ({
    id: category._id,
    name: category.name,
    iconUrl: urlFor(category.image).url(),
  }));
};

export const getBannerData = (data?: IDroneProperties[]): ICarouselItem[] => {
  return (
    data?.map((item) => ({
      id: item.id,
      description: formatDescription(item.type, item.industry),
      tagline: item.tagline,
      imageUrl: item.imageUrl,
      link: `products/${item.slug}`,
    })) || []
  );
};

const formatDescription = (type: string, industry?: string): string => {
  return (
    capitalizeFirstLetter(industry?.replace('-drone', '') || '') +
    ', ' +
    capitalizeFirstLetter(type)
  );
};

export const getHomeBannerData = (
  data: ISanityHomeBannerData
): IMainBannerData => ({
  heading: data.heading,
  tagline: data.tagline,
  featuredProducts: data.featuredProducts.map((product) => ({
    id: product._key,
    name: product.name,
    tagline: product.tagline,
    imageUrl: urlFor(product.image).size(300, 200).url(),
  })),
});
