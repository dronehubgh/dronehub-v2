import { capitalizeFirstLetter } from '.';
import { ICarouselItem, IDroneProperties } from '../models/app';

export const getBannerData = (data?: IDroneProperties[]): ICarouselItem[] => {
  return (
    data?.map((item) => ({
      id: item.id,
      description: item.type,
      tagline: item.tagline,
      imageUrl: item.imageUrl,
      link: `products/${item.slug}`,
    })) || []
  );
};

export const formatDescription = (type: string, industry?: string): string => {
  return (
    capitalizeFirstLetter(industry?.replace('-drone', '') || '') +
    ', ' +
    capitalizeFirstLetter(type)
  );
};
