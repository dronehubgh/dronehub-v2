import { createClient, ClientConfig } from 'next-sanity';

export const clientConfig: ClientConfig = {
  projectId: '20xcokyz',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
  token: process.env.sanityToken,
};

export const client = createClient(clientConfig);
