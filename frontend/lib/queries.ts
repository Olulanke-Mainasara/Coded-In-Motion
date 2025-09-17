export const options = {
  next: {
    revalidate: 3600,
  },
};

export const SERVICE_QUERY = `*[_type == "service"]{
  _id,
  title,
  description,
  exampleMedia[]{
    _key,
    _type,
    // For images
    "assetRef": asset->_id,
    "imageUrl": asset->url,

    // For videos (Mux)
    "playbackId": asset->playbackId,
    "assetId": asset->assetId
  }
}
`;

export const ABOUT_QUERY = `
  *[_type == "about" && _id == "about"][0]{
    title,
    description,
    "imageUrl": image.asset->url,
    "alt": image.alt,

    pricing[]->{
      _id,
      title,
      description,
      types[]{
        title,
        duration,
        price
      }
    },

    testimonials[]{
      name,
      quote,
      "avatarUrl": avatar.asset->url
    }
  }
`;

export const OUR_TRUTH_QUERY = `*[_type == "others" && slug.current == "footer-video"][0]{
  _id,
  title,
  "slug": slug.current,

  // For images
  "assetRef": media.image.asset->_id,
  "imageUrl": media.image.asset->url,
  "alt": media.image.alt,

  // For videos (Mux)
  "playbackId": media.video.asset->playbackId,
  "assetId": media.video.asset->assetId
}
`;

export const FOOTER_QUERY = `*[_type == "others" && slug.current == "our-truth-video"][0]{
  _id,
  title,
  "slug": slug.current,

  // For images
  "assetRef": media.image.asset->_id,
  "imageUrl": media.image.asset->url,
  "alt": media.image.alt,

  // For videos (Mux)
  "playbackId": media.video.asset->playbackId,
  "assetId": media.video.asset->assetId
}
`;
