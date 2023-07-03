import { createClient, ClientConfig } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const clientConfig: ClientConfig = {
  projectId: '20xcokyz',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
  token: process.env.sanityToken,
};

export const client = createClient(clientConfig);

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
