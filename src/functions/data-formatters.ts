import { ReactNode } from 'react';
import { urlFor } from '../lib';
import { ISanityProductCategory } from '../models';
import {
  ICarouselItem,
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

export const getBannerData = (
  categories: ISanityBannerData[]
): ICarouselItem[] => {
  return categories.map((category) => ({
    id: category._id,
    description: category.description,
    tagline: category.tagline,
    imageUrl: urlFor(category.image).url(),
    link: `products/${category._id}`,
  }));
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
