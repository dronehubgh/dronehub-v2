import { ReactNode } from 'react';

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
