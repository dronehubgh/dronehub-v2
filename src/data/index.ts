import { FiMail, FiPhone } from 'react-icons/fi';
import { FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IContactItem } from '../models/app';
import { v4 as uid } from 'uuid';

export const fields: string[] = [
  'Media',
  'Surveying',
  'Agriculture',
  'Public Safety',
  'Security',
  'Forestry',
  'Energy',
  'Mining',
];

export { productCategories, carouselItems } from './products';

export const contactList: IContactItem[] = [
  {
    id: uid(),
    icon: FiPhone,
    heading: 'Call Us',
    text: 'To book repair service, we will need a brief',
    link: 'tel: +233 (0) 55 446 0012',
  },
  {
    id: uid(),
    icon: FiMail,
    heading: 'Send a Message',
    text: 'Drop off your drone at our shop.  On a ',
    link: 'mailto:  connect@dronehubgh.com',
  },
  {
    id: uid(),
    icon: FaLinkedin,
    heading: 'Send a Message',
    text: 'Once we receive your drone, our drone',
    link: 'https://linkedin.com',
  },

  {
    id: uid(),
    icon: FaTwitter,
    heading: 'Send a Message',
    text: 'Upon approval, we repair your drone. ',
    link: 'https://twitter.com',
  },
  {
    id: uid(),
    icon: FaInstagramSquare,
    heading: 'Send a Message',
    text: 'When repair is complete, we will',
    link: 'https://instagram.com',
  },
];

export const OurServicesData = [
  {
    title: 'Drone Education',
    description: 'Enhance your skills. Become a pro.',
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1675907080/donehub-assets/Accesories/illus-1_nzxg7m.png',
  },
  {
    title: 'Drone Consulting',
    description: 'Get expert advice for the best drone experience.',
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1675907404/donehub-assets/Accesories/illus-13_tarlur.png',
  },
  {
    title: 'Drone Repair',
    description: 'Have a drone problem? Let’s help you fix it.',
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1675907261/donehub-assets/Accesories/illus-4_vtgl3j.png',
  },
  {
    title: 'Drone Rental',
    description:
      'Need drone support for whatever reason? No problem. Rent a drone for your needs.',
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1675907291/donehub-assets/Accesories/illus-5_vegu2n.png',
  },
];

export const AllServicesData = [
  ...OurServicesData,
  {
    title: 'Drone Maintenance',
    description: 'Top-level maintenance to keep your drone airworthy.',
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1677543416/donehub-assets/services/illus-23_sq5q1s.png',
  },
  {
    title: 'Drone Detection Solution',
    description: 'Protect your airspace.',
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1676505622/donehub-assets/industry-images/aerial_surveying_zg22fl.png',
  },
  {
    title: 'Custom Solutions',
    description: 'Unique drone solutions for each project.',
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1677543417/donehub-assets/services/illus-18_mbxnv5.png',
  },
  {
    title: 'Drone Applied Research',
    description: 'Get accurate research results with drones.',
    imageUrl:
      'https://res.cloudinary.com/djmx11b6s/image/upload/v1677543416/donehub-assets/services/illus-29_dcrmh6.png',
  },
];
