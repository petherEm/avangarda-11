import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllBusinessOffers = async () => {
  const ALL_BUSINESS_OFFERS_QUERY = defineQuery(
    `*[_type == "businessOffer"] {
      _id,
      offerName,
      slug,
      offerFile,
      description
    } | order(_createdAt desc)`
  );
  
  try {
    const businessOffers = await sanityFetch({
      query: ALL_BUSINESS_OFFERS_QUERY,
    });
    return businessOffers.data || [];
  } catch (error) {
    console.error("Error fetching business offers", error);
    return [];
  }
};