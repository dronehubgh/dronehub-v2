import { groq } from 'next-sanity';

export const dronesQuery = groq`
*[_type == "drone"] {
  "id": _id,
  "imageUrl": mainImage.asset->url,
  "name": title,
  "slug": slug.current,
  type,
  series,
  outOfStock,
  industry,
  tagline,
  "productType": _type ,
  category->{
    name,
    "imageUrl": image.asset->url
  },
}`;

export const cameraQuery = groq`
*[_type == "camera"] {
  "id": _id,
  "imageUrl": mainImage.asset->url,
  "name": title,
  "slug": slug.current,
  type,
  series,
  outOfStock,
  tagline,
  "productType": _type ,
  category->{
    name,
    "imageUrl": image.asset->url
  },
}`;

export const productsBannerDataQuery = groq`
*[_type == "productsBannerData"] {
     "bannerProducts": bannerProducts[]->{
       "id": _id,
      "imageUrl": mainImage.asset->url,
      "name": title,
      "slug": slug.current,
      type,
      series,
      outOfStock,
      industry,
      tagline,
      "productType": _type ,
      }
}
`;
