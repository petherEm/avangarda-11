import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllSpaOffers = async () => {
  const ALL_SPA_OFFERS_QUERY = defineQuery(
    `*[_type == "spaOffer"] {
      _id,
      offerName,
      slug,
      offerFile,
      description
    } | order(_createdAt desc)`
  );
  
  try {
    const spaOffers = await sanityFetch({
      query: ALL_SPA_OFFERS_QUERY,
    });
    return spaOffers.data || [];
  } catch (error) {
    console.error("Error fetching spa offers", error);
    return [];
  }
};