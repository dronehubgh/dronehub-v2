import { ICarouselItem, IProductCategory } from '../models/app';
import { v4 as uid } from 'uuid';
import { ReactNode } from 'react';

export const carouselItems = (cta: ReactNode): ICarouselItem[] => [
  {
    id: uid(),
    title: 'Everything You Love About Drones Begins Here ',
    description: 'Consumer. Professional. Enterprise.',
    cta,
    imageUrl: 'assets/images/carousel-drones/p1.png',
  },
  {
    id: uid(),
    title: 'Explore in a way only you can',
    description: 'Consumer. Professional. Enterprise.',
    cta,
    imageUrl: 'assets/images/carousel-drones/mavic-2-ea.png',
  },
  {
    id: uid(),
    title: 'Explore in a way only you can',
    description: 'Consumer. Professional. Enterprise.',
    cta,
    imageUrl: 'assets/images/carousel-drones/mavic_mini_1.png',
  },
  {
    id: uid(),
    title: 'Explore in a way only you can',
    description: 'Consumer. Professional. Enterprise.',
    cta,
    imageUrl: 'assets/images/carousel-drones/phantom_4_Pro_V2_3.png',
  },
];

export const productCategories: IProductCategory[] = [
  {
    id: uid(),
    name: 'Mavic',
    iconUrl: 'assets/images/categories/Mavic Air-02 Centre Piece 1.png',
  },
  {
    id: uid(),
    name: 'Phantom',
    iconUrl: 'assets/images/categories/P4 Multispectral-01 1.png',
  },
  {
    id: uid(),
    name: 'Inspire',
    iconUrl: 'assets/images/categories/INSPIRE-03 1.png',
  },
  {
    id: uid(),
    name: 'Matrice',
    iconUrl: 'assets/images/categories/Matrice 200 v2 7.png',
  },
  {
    id: uid(),
    name: 'Agras',
    iconUrl: 'assets/images/categories/AGRAS MG 1P-02 2.png',
  },
  {
    id: uid(),
    name: 'Cameras & Gimbals',
    iconUrl: 'assets/images/categories/DJI NEW RELEASES-05 1.png',
  },
  {
    id: uid(),
    name: 'Software',
    iconUrl: 'assets/images/categories/cropped-bluecloud 1.png',
  },
  {
    id: uid(),
    name: 'Others',
    iconUrl: 'assets/images/categories/Matrice 600 Pro-03 1.png',
  },
];
