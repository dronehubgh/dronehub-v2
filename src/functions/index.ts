import {
  CameraSeries,
  DroneSeries,
  ICameraProperties,
  IDroneProperties,
  INewsletterFormValues,
  IOtherProductsProperties,
  IProductOverview,
} from '../models/app';

export const validateNewsLetterFormValues = ({
  industry,
  name,
  email,
}: INewsletterFormValues) => {
  let errors: any = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!email) {
    errors.email = 'Email is required';
  } else if (!regex.test(email)) {
    errors.email = 'Invalid Email';
  }

  if (!name) {
    errors.name = 'Name is required';
  }

  if (!industry) {
    errors.industry = 'Select industry';
  }
  return errors;
};

export function capitalizeFirstLetter(text: string) {
  const newTest = text.replaceAll('-', ' ');
  return newTest.charAt(0).toUpperCase() + newTest.slice(1);
}

export const mapProductPropsToProductOverview = (
  drones: IDroneProperties[] | ICameraProperties[],
  series: DroneSeries | CameraSeries
): IProductOverview[] => {
  return drones
    .filter((item) => item.series === series)
    .map((drone) => ({
      id: drone.id,
      title: drone.name,
      description: capitalizeFirstLetter(drone.type),
      imageUrl: drone.imageUrl,
      link: `products/${drone.slug}`,
      outOfStock: drone.outOfStock || false,
    }));
};

export const mapOtherProductsToProductOverview = (
  products: IOtherProductsProperties[]
): IProductOverview[] => {
  return products.map((product) => ({
    id: product.id,
    title: product.name,
    description: capitalizeFirstLetter(product.type),
    imageUrl: product.imageUrl,
    link: `products/${product.slug}`,
    outOfStock: product.outOfStock || false,
  }));
};
