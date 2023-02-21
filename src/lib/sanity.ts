import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const config = {
  projectId: '20xcokyz',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
  token: process.env.sanityToken,
};

export const client = sanityClient(config);

const builder = imageUrlBuilder(client);
export const urlFor = (source: SanityImageSource) => builder.image(source);