import { groq } from 'next-sanity';

export const productCategoryQuery = groq`
*[_type == "category"]{
  "id": _id,
  name,
  "iconUrl": image.asset->url
}
`;

export const homeBannerDataQuery = groq`
*[_type == "homeBannerData"]{
  ...,
  heading,
  tagline,
  "featuredProducts": featuredProducts[]->{
    "id": _key,
    "slug": slug.current,
    "name": title,
    tagline,
    "imageUrl": mainImage.asset->url
  }
}
`;

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
}`;

export const otherProductsQuery = groq`
  *[_type == "other-product"]{
  "id": _id,
  "imageUrl": mainImage.asset->url,
  "name": title,
  "slug": slug.current,
  type,
  outOfStock,
  description,
  "productType": _type ,
}
`;

export const softwareQuery = groq`
  *[_type == "software"]{
  "id": _id,
  "imageUrl": mainImage.asset->url,
  "name": title,
  "slug": slug.current,
  type,
  outOfStock,
  description,
  "productType": _type ,
}
`;
