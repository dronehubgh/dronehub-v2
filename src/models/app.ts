import { ReactNode } from 'react';

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
  title: string;
  description: string;
  imageUrl: string;
  cta?: ReactNode;
}

export interface IProductOverview extends ICarouselItem {
  outOfStock?: boolean;
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
