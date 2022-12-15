import { INewsletterFormValues } from '../models/app';

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
