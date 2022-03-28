/* This file is to connect to the sanity backend, so we can fetch data from it */

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

// for images
const builder = imageUrlBuilder(client);
// syntax when working with images
export const urlFor = (source) => builder.image(source);
