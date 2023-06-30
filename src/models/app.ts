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
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  outOfStock?: boolean;
  cta?: ReactNode;
}

export interface IDroneProperties {
  id: string;
  imageUrl: string;
  name: string;
  slug: string;
  type: string;
  series: DroneSeries;
  tagline: string;
  productType: string;
  outOfStock?: boolean;
  industry?: string;
}

export interface ICameraProperties extends IDroneProperties {}

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

export interface IDeal {
  id: string;
  name: string;
  description: string;
  salePrice: number;
  cutOutPrice: number;
  imageUrl: string;
}

export type Service =
  | 'repairs'
  | 'education'
  | 'consulting'
  | 'rental'
  | 'maintenance'
  | 'detection'
  | 'custom'
  | 'research';

export type IAllServices = {
  [key in Service]: IService;
};

export interface IService {
  title: string;
  link: string;
}

export type DroneSeries =
  | 'mavic-series'
  | 'phantom-series'
  | 'matrice-series'
  | 'agras-series'
  | 'dji-fpv-drone'
  | 'inspire-series';

export type CameraSeries =
  | 'zenmuse-series'
  | 'osmos-series'
  | 'ronin-series'
  | 'extra-payload';

export interface IProductsState {
  mavicSeries: IProductSectionItem[];
  phantomSeries: IProductSectionItem[];
  matriceSeries: IProductSectionItem[];
  inspireSeries: IProductSectionItem[];
  agrasSeries: IProductSectionItem[];
  djiFPVDrones: IProductSectionItem[];
  camerasAndGimbals: IProductSectionItem[];
  softwareAndOthers: IProductSectionItem[];
}
