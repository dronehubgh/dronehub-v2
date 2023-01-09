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
    heading: 'Call',
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
