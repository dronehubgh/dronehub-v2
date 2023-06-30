import sanityClient, { SanityClient } from '@sanity/client';

const config = {
  projectId: '20xcokyz',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
  token: process.env.sanityToken,
};

export const client = sanityClient(config);
