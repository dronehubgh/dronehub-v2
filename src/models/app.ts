import { ReactNode } from 'react';
import { IconType } from 'react-icons/lib';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface IAccessory {
  id: string;
  name: string;
  description: string;
  image: SanityImageSource;
}

export interface IMenuItem {
  id: string;
  title: string;
  link: string;
  icon: ReactNode;
}

export interface INewsletterFormValues {
  name: string;
  email: string;
  industry: string;
}

export interface ICarouselItem {
  id: string;
  description: string;
  tagline: string;
  imageUrl: string;
  link: string;
  cta?: ReactNode;
}

export interface IProductOverview {
  outOfStock?: boolean;
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  cta?: ReactNode;
}

export interface IProductSectionItem {
  name: string;
  displayName: string;
  products: IProductOverview[];
}
export interface IProductCategory {
  id: string;
  name: string;
  iconUrl: string;
}

export interface INavItem {
  id: string;
  name: string;
  link: string;
}

export interface IContactItem {
  id: string;
  heading: string;
  text: string;
  icon: IconType;
  link: string;
}

export interface IMainBannerData {
  heading: string;
  tagline: string;
  featuredProducts: IMainBannerFeaturedProducts[];
}

export interface IMainBannerFeaturedProducts {
  id: string;
  name: string;
  tagline: string;
  imageUrl: string;
}
