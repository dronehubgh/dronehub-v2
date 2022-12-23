import { ReactNode } from 'react';
import { v4 as uid } from 'uuid';
import {
  ICarouselItem,
  IProductCategory,
  IProductSectionItem,
} from '../models/app';

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

export const productOverviews: { [key: string]: IProductSectionItem[] } = {
  mavicSeries: [
    {
      name: 'drones',
      displayName: 'Drones',
      products: [
        {
          id: uid(),
          title: 'DJI Mini 3 Pro',
          description: 'Consumer Drone',
          imageUrl: 'assets/images/drones/mavic/DJI_MIni_3_Pro_1.png',
        },
        {
          id: uid(),
          title: 'DJI Mini 2',
          description: 'Consumer Drone',
          imageUrl: 'assets/images/drones/mavic/DJI_Mini2_2.png',
        },
        {
          id: uid(),
          title: 'Mavic Air 2',
          description: 'Consumer Drone',
          imageUrl: 'assets/images/drones/mavic/Mavic_Air2_2.png',
        },
        {
          id: uid(),
          title: 'DJI AIR 2S',
          description: 'Consumer Drone',
          imageUrl: 'assets/images/drones/mavic/DJI_2S_1.png',
        },
        {
          id: uid(),
          title: 'Mavic 3',
          description: 'Prosumer Drone',
          imageUrl: 'assets/images/drones/mavic/Mavic_3_2.png',
        },
        {
          id: uid(),
          title: 'Mavic 2 Enterprise Advanced',
          description: 'Enterprise Drone',
          imageUrl:
            'assets/images/drones/mavic/Mavic _2_Enterprise_Advanced_1.png',
        },
        {
          id: uid(),
          title: 'Mavic 2 Enterprise Dual',
          description: 'Enterprise Drone',
          imageUrl: 'assets/images/drones/mavic/DJI_MIni_3_Pro_1.png',
          outOfStock: true,
        },
        {
          id: uid(),
          title: 'DJI Mini SE',
          description: 'Consumer Drone',
          imageUrl: 'assets/images/drones/mavic/DJI_Mini_SE_2.png',
        },
        {
          id: uid(),
          title: 'Mavic Mini',
          description: 'Consumer Drone',
          imageUrl: 'assets/images/drones/mavic/Mavic_Mini_2.png',
        },
        {
          id: uid(),
          title: 'Mavic 2 Zoom',
          description: 'Consumer Drone',
          imageUrl: 'assets/images/drones/mavic/DJI_MIni_3_Pro_1.png',
          outOfStock: true,
        },
        {
          id: uid(),
          title: 'Mavic 2 Pro',
          description: 'Consumer Drone',
          imageUrl: 'assets/images/drones/mavic/DJI_MIni_3_Pro_1.png',
          outOfStock: true,
        },
      ],
    },
    {
      name: 'accessories',
      displayName: 'Accessories',
      products: [],
    },
  ],
  phantomSeries: [
    {
      name: 'drones',
      displayName: 'Drones',
      products: [
        {
          id: uid(),
          title: 'Phantom 4 RTK',
          description: 'Enterprise Drone',
          imageUrl: 'assets/images/drones/phantom/Phantom_4_RTK_3.png',
        },
        {
          id: uid(),
          title: 'P4 Multispectral',
          description: 'Enterprise Drone',
          imageUrl:
            'assets/images/drones/phantom/Phantom_4_Multispectral_3.png',
        },
        {
          id: uid(),
          title: 'Phantom 4 Pro V2',
          description: 'Prosumer Drone',
          imageUrl: 'assets/images/drones/phantom/Phantom_4_Pro_V2_3.png',
        },
      ],
    },
    {
      name: 'accessories',
      displayName: 'Accessories',
      products: [],
    },
  ],
  matriceSeries: [
    {
      name: 'drones',
      displayName: 'Drones',
      products: [
        {
          id: uid(),
          title: 'Matrice 300 RTK',
          description: 'Enterprise Drone',
          imageUrl: 'assets/images/drones/matrice/Matrice_300_RTK_1.png',
        },
        {
          id: uid(),
          title: 'Matrice 210 RTK V2',
          description: 'Consumer Drone',
          imageUrl: 'assets/images/drones/matrice/Matrice_300_RTK_1.png',
          outOfStock: true,
        },
        {
          id: uid(),
          title: 'Matrice 30',
          description: 'Enterprise Drone',
          imageUrl: 'assets/images/drones/matrice/Matrice_30_3.png',
        },
        {
          id: uid(),
          title: 'Matrice 200 V2',
          description: 'Consumer Drone',
          imageUrl: 'assets/images/drones/matrice/Matrice_300_RTK_1.png',
          outOfStock: true,
        },
        {
          id: uid(),
          title: 'Matrice 30T',
          description: 'Enterprise Drone',
          imageUrl: 'assets/images/drones/matrice/Matrice_30T_3.png',
        },
        {
          id: uid(),
          title: 'Matrice 100',
          description: 'Enterprise Drone',
          imageUrl: 'assets/images/drones/matrice/Matrice_100_2.png',
        },
        {
          id: uid(),
          title: 'Matrice 600 Pro',
          description: 'Enterprise Drone',
          imageUrl: 'assets/images/drones/matrice/Matrice_600_Pro_4n-1.png',
        },
      ],
    },
    {
      name: 'accessories',
      displayName: 'Accessories',
      products: [],
    },
  ],
  inspireSeries: [
    {
      name: 'drones',
      displayName: 'Drones',
      products: [
        {
          id: uid(),
          title: 'Inspire 2',
          description: 'Professional Drone',
          imageUrl: 'assets/images/drones/inspire/Inspire_2_3.png',
        },
      ],
    },
    {
      name: 'accessories',
      displayName: 'Accessories',
      products: [],
    },
  ],
  agrasSeries: [
    {
      name: 'drones',
      displayName: 'Drones',
      products: [
        {
          id: uid(),
          title: 'Agras T10',
          description: 'Agricultiural Drone',
          imageUrl: 'assets/images/drones/agras/Agras_T10_1.png',
        },
        {
          id: uid(),
          title: 'Agras T20',
          description: 'Agricultiural Drone',
          imageUrl: 'assets/images/drones/agras/Agras_T20_2.png',
        },
        {
          id: uid(),
          title: 'Agras T30',
          description: 'Agricultiural Drone',
          imageUrl: 'assets/images/drones/agras/Agras_T10_1.png',
        },
        {
          id: uid(),
          title: 'Agras MG-1P',
          description: 'Agricultiural Drone',
          imageUrl: 'assets/images/drones/agras/Agras_T20_2.png',
          outOfStock: true,
        },
      ],
    },
    {
      name: 'accessories',
      displayName: 'Accessories',
      products: [],
    },
  ],
  camerasAndGimbals: [
    {
      name: 'zemuse',
      displayName: 'Zemuse',
      products: [],
    },
    {
      name: 'osmos',
      displayName: 'Osmos',
      products: [],
    },
    {
      name: 'ronin',
      displayName: 'Ronin',
      products: [],
    },
    {
      name: 'extra-payloads',
      displayName: 'Extra Payloads',
      products: [],
    },
  ],
  softwareAndOthers: [
    {
      name: 'software',
      displayName: 'Software',
      products: [],
    },
    {
      name: 'other-products',
      displayName: 'Other Products',
      products: [],
    },
  ],
};
