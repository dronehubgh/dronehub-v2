import {
  SanityImageSource,
  SanityReference,
} from '@sanity/image-url/lib/types/types';
import { TypedObject } from '@portabletext/types';

export type DroneType = 'consumer-drone' | 'enterprise-drone';

export interface ISanityBaseProps {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

export interface ISanityProductCategory extends ISanityBaseProps {
  name: string;
  image: SanityImageSource;
}

export interface ISanityDroneData extends ISanityBaseProps {
  title: string;
  slug: ISanitySlug;
  tagline: string;
  type: DroneType;
  mainImage: SanityImageSource;
  application: TypedObject[];
  summary: TypedObject[];
  overview: TypedObject[];
  extra: TypedObject[];
  series: string;
  outOfStock: boolean;
  industry: string;
  inBox: [];
  accessories: [];
  gallery: SanityImageSource[];
  category: SanityReference;
  recommended: SanityReference;
}

export interface ISanitySlug {
  _type: 'slug';
  current: string;
}

export interface ISanityBannerData extends ISanityBaseProps {
  description: string;
  tagline: string;
  image: SanityImageSource;
}

export interface ISanityHomeBannerData extends ISanityBaseProps {
  heading: string;
  tagline: string;
  featuredProducts: IHomeBannerFeaturedProduct[];
}

export interface IHomeBannerFeaturedProduct {
  _key: string;
  _type: string;
  name: string;
  tagline: string;
  image: SanityImageSource;
}
