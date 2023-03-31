import { ReactNode } from 'react';
import { v4 as uid } from 'uuid';
import { ISolutionsItems } from '../components/SolutionsOverview/Solutions';
import {
  ICarouselItem,
  IProductCategory,
  IProductSectionItem,
} from '../models/app';

export const carouselItems = (cta: ReactNode): ICarouselItem[] => [
  {
    id: uid(),
    description: 'Everything You Love About Drones Begins Here ',
    tagline: 'Consumer. Professional. Enterprise.',
    cta,
    imageUrl: 'assets/images/carousel-drones/p1.png',
    link: '#',
  },
  {
    id: uid(),
    description: 'Explore in a way only you can',
    tagline: 'Consumer. Professional. Enterprise.',
    cta,
    imageUrl: 'assets/images/carousel-drones/mavic-2-ea.png',
    link: '#',
  },
  {
    id: uid(),
    description: 'Explore in a way only you can',
    tagline: 'Consumer. Professional. Enterprise.',
    cta,
    imageUrl: 'assets/images/carousel-drones/mavic_mini_1.png',
    link: '#',
  },
  {
    id: uid(),
    description: 'Explore in a way only you can',
    tagline: 'Consumer. Professional. Enterprise.',
    cta,
    imageUrl: 'assets/images/carousel-drones/phantom_4_Pro_V2_3.png',
    link: '#',
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
          imageUrl: '/assets/images/drones/mavic/DJI_MIni_3_Pro_1.png',
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'DJI Mini 2',
          description: 'Consumer Drone',
          imageUrl: '/assets/images/drones/mavic/DJI_Mini2_2.png',
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'Mavic Air 2',
          description: 'Consumer Drone',
          imageUrl: '/assets/images/drones/mavic/Mavic_Air2_2.png',
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'DJI AIR 2S',
          description: 'Consumer Drone',
          imageUrl: '/assets/images/drones/mavic/DJI_2S_1.png',
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'Mavic 3',
          description: 'Prosumer Drone',
          imageUrl: '/assets/images/drones/mavic/Mavic_3_2.png',
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'Mavic 2 Enterprise Advanced',
          description: 'Enterprise Drone',
          imageUrl:
            '/assets/images/drones/mavic/Mavic _2_Enterprise_Advanced_1.png',
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'Mavic 2 Enterprise Dual',
          description: 'Enterprise Drone',
          imageUrl: 'assets/images/drones/mavic/DJI_MIni_3_Pro_1.png',
          link: '/products/ab67c-437868-abc573-67bac',
          outOfStock: true,
        },
        {
          id: uid(),
          title: 'DJI Mini SE',
          description: 'Consumer Drone',
          imageUrl: '/assets/images/drones/mavic/DJI_Mini_SE_2.png',
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'Mavic Mini',
          description: 'Consumer Drone',
          imageUrl: '/assets/images/drones/mavic/Mavic_Mini_2.png',
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'Mavic 2 Zoom',
          description: 'Consumer Drone',
          imageUrl: 'assets/images/drones/mavic/DJI_MIni_3_Pro_1.png',
          link: '/products/ab67c-437868-abc573-67bac',
          outOfStock: true,
        },
        {
          id: uid(),
          title: 'Mavic 2 Pro',
          description: 'Consumer Drone',
          imageUrl: 'assets/images/drones/mavic/DJI_MIni_3_Pro_1.png',
          link: '/products/ab67c-437868-abc573-67bac',
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
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'P4 Multispectral',
          description: 'Enterprise Drone',
          imageUrl:
            'assets/images/drones/phantom/Phantom_4_Multispectral_3.png',
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'Phantom 4 Pro V2',
          description: 'Prosumer Drone',
          imageUrl: 'assets/images/drones/phantom/Phantom_4_Pro_V2_3.png',
          link: '/products/ab67c-437868-abc573-67bac',
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
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'Matrice 210 RTK V2',
          description: 'Consumer Drone',
          imageUrl: 'assets/images/drones/matrice/Matrice_300_RTK_1.png',
          link: '/products/ab67c-437868-abc573-67bac',
          outOfStock: true,
        },
        {
          id: uid(),
          title: 'Matrice 30',
          description: 'Enterprise Drone',
          imageUrl: 'assets/images/drones/matrice/Matrice_30_3.png',
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'Matrice 200 V2',
          description: 'Consumer Drone',
          imageUrl: 'assets/images/drones/matrice/Matrice_300_RTK_1.png',
          link: '/products/ab67c-437868-abc573-67bac',
          outOfStock: true,
        },
        {
          id: uid(),
          title: 'Matrice 30T',
          description: 'Enterprise Drone',
          imageUrl: 'assets/images/drones/matrice/Matrice_30T_3.png',
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'Matrice 100',
          description: 'Enterprise Drone',
          imageUrl: 'assets/images/drones/matrice/Matrice_100_2.png',
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'Matrice 600 Pro',
          description: 'Enterprise Drone',
          imageUrl: 'assets/images/drones/matrice/Matrice_600_Pro_4n-1.png',
          link: '/products/ab67c-437868-abc573-67bac',
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
          link: '/products/ab67c-437868-abc573-67bac',
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
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'Agras T20',
          description: 'Agricultiural Drone',
          imageUrl: 'assets/images/drones/agras/Agras_T20_2.png',
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'Agras T30',
          description: 'Agricultiural Drone',
          imageUrl: 'assets/images/drones/agras/Agras_T10_1.png',
          link: '/products/ab67c-437868-abc573-67bac',
        },
        {
          id: uid(),
          title: 'Agras MG-1P',
          description: 'Agricultiural Drone',
          imageUrl: 'assets/images/drones/agras/Agras_T20_2.png',
          link: '/products/ab67c-437868-abc573-67bac',
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

export const latestReleases = [
  {
    id: uid(),
    title: 'DJI Mini 3 Pro',
    description: 'Consumer Drone',
    imageUrl: '/assets/images/drones/mavic/DJI_MIni_3_Pro_1.png',
    link: '/products/ab67c-437868-abc573-67bac',
  },
  {
    id: uid(),
    title: 'DJI FPV',
    description: 'Consumer Drone',
    imageUrl: '/assets/images/latest-releases/DJI_FPV_Drone_1.png',
    link: '/products/ab67c-437868-abc573-67bac',
  },
  {
    id: uid(),
    title: 'Matrice 30T',
    description: 'Consumer Drone',
    imageUrl: '/assets/images/drones/mavic/DJI_Mini2_2.png',
    link: '/products/ab67c-437868-abc573-67bac',
  },
  {
    id: uid(),
    title: 'DJI Air 2S',
    description: 'Consumer Drone',
    imageUrl: '/assets/images/drones/mavic/DJI_Mini2_2.png',
    link: '/products/ab67c-437868-abc573-67bac',
  },
  {
    id: uid(),
    title: 'Zenmuse P1',
    description: 'Aerial Camera',
    imageUrl: '/assets/images/drones/mavic/DJI_Mini2_2.png',
    link: '/products/ab67c-437868-abc573-67bac',
  },
  {
    id: uid(),
    title: 'Zenmuse L1',
    description: 'Aerial Camera',
    imageUrl: '/assets/images/drones/mavic/DJI_Mini2_2.png',
    link: '/products/ab67c-437868-abc573-67bac',
  },
];

export const solutionsItems: ISolutionsItems[] = [
  {
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676298172/donehub-assets/drones/Mavic_Air2_1_czal7u.png',
    categories: ['Surveying', 'Agriculture', 'Construction', 'Public Safety'],
    name: 'Mavic Air 2',
    type: 'Enterprise',
    link: '/products/8577987908709',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676298146/donehub-assets/drones/Mavic_Mini_1_rzimwl.png',
    categories: [
      'Surveying',
      'Construction',
      'Media & Entertainment',
      'Forestry',
    ],
    name: 'Mavic Mini',
    type: 'Enterprise',
    link: '/products/8577987908709',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676298136/donehub-assets/drones/Mavic_Mini_2_cf6g4w.png',
    categories: ['Media & Entertainment', 'Surveying', 'Mining', 'Forestry'],
    name: 'Mavic Mini 2',
    type: 'Enterprise',
    link: '/products/8577987908709',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676298113/donehub-assets/drones/Matrice_30_3_c9n86v.png',
    categories: ['Surveying', 'Forestry', 'Agriculture'],
    name: 'Matrice 30',
    type: 'Consumer',
    link: '/products/8577987908709',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676298057/donehub-assets/drones/Phantom_4_Multispectral_3_sajvta.png',
    categories: ['Security', 'Energy & Infrastructure', 'Forestry'],
    name: 'Phantom 4 Multispectral',
    type: 'Enterprise',
    link: '/products/8577987908709',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676297949/donehub-assets/drones/Mavic_3_Multispectral_1_hzlxxk.png',
    categories: ['Forestry', 'Construction', 'Agriculture'],
    name: 'Mavic 3 Multispectral',
    type: 'Consumer',
    link: '/products/8577987908709',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676297958/donehub-assets/drones/Mavic_3_Thermal_1_ctaqk2.png',
    categories: [
      'Public Safety',
      'Forestry',
      'Energy & Infrastructure',
      'Construction',
    ],
    name: 'Mavic 3 Thermal',
    type: 'Consumer',
    link: '/products/8577987908709',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676297995/donehub-assets/drones/Agras_T20_2_n3x2z1.png',
    categories: ['Construction', 'Media & Entertainment', 'Forestry'],
    name: 'Agras T20',
    type: 'Consumer',
    link: '/products/8577987908709',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676298016/donehub-assets/drones/Phantom_4_Pro_V2_1_iz2iba.png',
    categories: [
      'Surveying',
      'Energy & Infrastructure',
      'Media & Entertainment',
      'Forestry',
    ],
    name: 'Phantom 4 Pro V2',
    type: 'Enterprise',
    link: '/products/8577987908709',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676298033/donehub-assets/drones/Phantom_4_Pro_V2_2_blsanp.png',
    categories: ['Surveying', 'Energy & Infrastructure'],
    name: 'Phantom 4 Pro V1',
    type: 'Enterprise',
    link: '/products/8577987908709',
  },
];
