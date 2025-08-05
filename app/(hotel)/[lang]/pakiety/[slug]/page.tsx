import Image from "next/image";
import { Container } from "@/components/container";
import { getOfferBySlug } from "@/sanity/lib/offers/getOfferBySlug";
import { getDictionary } from "@/lib/dictionary";
import { imageUrl } from "@/lib/imageUrl";
import {
  ArrowRight,
  Tag,
  Calendar,
  Utensils,
  Wifi,
  Coffee,
  SpadeIcon as Spa,
  Check,
  Clock,
  Users,
  Info,
  CalendarDays,
  BadgeCheck,
  Star,
  Gift,
  Camera,
  Shield,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import OffersCTA from "@/components/modules/Offers/OffersCTA";
import Link from "next/link";

interface Params {
  lang: string;
  slug: string;
}

interface Offers {
  _id: string;
  enname: string;
  plname: string;
  endescription: any[];
  pldescription: any[];
  image: any;
  price?: number;
  currency?: string;
  validUntil?: string;
  people?: number;
  minNights?: number;
  offerListing?: Array<{
    _id: string;
    name?: string;
    icon?: string;
  }>;
  amenities?: Array<{
    _id: string;
    name?: string;
    icon?: string;
  }>;
}

// Mock data only for elements that are not coming from Sanity yet
const packageDetails = {
  amenities: [
    { name: "Śniadanie w formie bufetu", icon: Coffee },
    { name: "Kolacja w restauracji hotelowej", icon: Utensils },
    { name: "Dostęp do strefy SPA & Wellness", icon: Spa },
    { name: "Bezpłatne Wi-Fi", icon: Wifi },
    { name: "Parking", icon: Check },
    { name: "Późne wymeldowanie", icon: Clock },
  ],
  terms: [
    "Oferta ważna w wybrane dni tygodnia",
    "Rezerwacja z minimum 7-dniowym wyprzedzeniem",
    "Pełna płatność wymagana przy rezerwacji",
    "Brak możliwości zwrotu w przypadku anulowania",
    "Psy są mile widziane, ale prosimy o wcześniejsze zgłoszenie",
    "Dostępność pokoi zależna od terminu rezerwacji",
  ],
  relatedOffers: [
    { id: 1, name: "Pakiet Rodzinny", image: "/outdoor/out-04.jpg" },
    { id: 2, name: "Weekend SPA", image: "/spa/spa-14.jpg" },
  ],
  gallery: [
    "/spa/spa-14.jpg",
    "/restaurant/rest-03.jpg",
    "/outdoor/out-02.jpg",
    "/spa/pool-01.jpg",
  ],
  roomType: "Pokój Deluxe",
};

const OffersPageId = async ({ params }: { params: Params }) => {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  // Fetch the offer data using the slug
  const offer = await getOfferBySlug(slug);

  // Function to get localized content
  const getLocalizedContent = (offer: Offers) => {
    const name = lang === "pl" ? offer.plname : offer.enname;
    const description =
      lang === "pl" ? offer.pldescription : offer.endescription;
    return {
      name: name || "No title available",
      description:
        description
          ?.map((block) =>
            block._type === "block"
              ? block.children?.map((child) => child.text).join("")
              : ""
          )
          .join("") || "No description available",
      price: offer.price || 0,
      currency: offer.currency || (lang === "pl" ? "PLN" : "PLN"),
    };
  };

  // Get the localized content for the current offer
  const localizedContent = offer
    ? getLocalizedContent(offer)
    : {
        name: "Package Offer",
        description: "Details not available",
        price: 0,
        currency: lang === "pl" ? "PLN" : "USD",
      };

  // Format price with currency
  const formattedPrice = new Intl.NumberFormat(
    lang === "pl" ? "pl-PL" : "en-US",
    {
      style: "currency",
      currency: localizedContent.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }
  ).format(localizedContent.price);

  // Format price per night (for display purposes)
  const pricePerNight = new Intl.NumberFormat(
    lang === "pl" ? "pl-PL" : "en-US",
    {
      style: "currency",
      currency: localizedContent.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }
  ).format(localizedContent.price / (offer?.minNights || 2));

  // Calculate duration based on minNights
  const getDuration = (minNights?: number) => {
    if (!minNights || minNights <= 0) return "1 dzień / 1 noc";
    return `${minNights + 1} dni / ${minNights} noce`;
  };

  // Format validUntil date if available
  const formatValidUntil = (dateString?: string) => {
    if (!dateString) return "31.12.2025"; // Default fallback
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat(lang === "pl" ? "pl-PL" : "en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(date);
    } catch (e) {
      return "31.12.2025"; // Fallback in case of parsing error
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen font-raleway">
      {/* Hero Section with space for navbar */}
      <section className="relative md:min-h-screen bg-[#404042] text-white">
        {/* Solid background color for the content area */}
        <div className="absolute top-0 left-0 bottom-0 md:w-1/2 w-full bg-[#404042] z-0"></div>

        {/* Top gradient for menu visibility */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent z-20"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-avangarda z-10"></div>

        {/* Mobile image - shown first on mobile, completely full width */}
        <div className="block md:hidden">
          <div className="relative w-full min-h-[100vw] bg-gray-200">
            <Image
              src={
                offer?.image
                  ? imageUrl(offer.image)
                      .width(800)
                      .height(800)
                      .quality(90)
                      .url()
                  : "/placeholder.svg?height=800&width=800&query=luxury+hotel+room"
              }
              alt={localizedContent.name}
              width={800}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
            {/* Enhanced gradient overlay for better visibility at top and bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/70"></div>
          </div>
        </div>

        <div className="relative z-10 md:min-h-screen flex flex-col md:block">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:h-screen">
              {/* Left content - positioned at bottom on desktop, normal flow on mobile */}
              <div className="md:col-span-5 flex flex-col md:justify-end pb-8 md:pb-16 pt-6 md:pt-0">
                <div className="space-y-4 md:space-y-6">
                  {/* Header */}
                  <div>
                    <Badge className="mb-3 bg-avangarda hover:bg-avangarda/90 border-0 text-white px-3 py-1">
                      {lang === "pl" ? "Oferta Specjalna" : "Special Offer"}
                    </Badge>
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
                      {localizedContent.name}
                    </h1>
                    <div className="flex items-center mb-4">
                      <Tag className="mr-2 h-6 w-6 text-avangarda" />
                      <span className="text-2xl md:text-3xl font-bold text-white/95">
                        {formattedPrice}
                      </span>
                      <span className="text-sm text-white/70 ml-2">
                        / pakiet
                      </span>
                    </div>
                  </div>

                  {/* Key package details */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-5 w-5 text-avangarda flex-shrink-0" />
                      <span className="text-white/90">
                        {getDuration(offer?.minNights)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="h-5 w-5 text-avangarda flex-shrink-0" />
                      <span className="text-white/90">
                        Dla {offer?.people || 2} osób
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CalendarDays className="h-5 w-5 text-avangarda flex-shrink-0" />
                      <span className="text-white/90">
                        Ważne do: {formatValidUntil(offer?.validUntil)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <BadgeCheck className="h-5 w-5 text-avangarda flex-shrink-0" />
                      <span className="text-white/90">
                        {packageDetails.roomType}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 text-lg leading-relaxed line-clamp-3">
                    {localizedContent.description}
                  </p>

                  {/* Action Button - Removed Contact Us button */}
                  <div className="pt-1 md:pt-2">
                    <Link href="#CTA">
                      <Button
                        size="lg"
                        className="bg-avangarda hover:bg-avangarda/90 text-white border-0 shadow-lg shadow-[#E31C79]/20"
                      >
                        {dict?.common?.bookNow || "Book Now"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Empty columns to maintain grid spacing */}
              <div className="hidden md:block md:col-span-7"></div>
            </div>
          </div>
        </div>

        {/* Full height, full width image positioned absolutely - hidden on mobile */}
        <div className="absolute top-0 right-0 bottom-0 md:w-1/2 w-full h-screen md:h-auto hidden md:block">
          {/* Gradient overlay for darkening the image from top to middle */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-10"></div>
          <Image
            src={
              offer?.image
                ? imageUrl(offer.image)
                    .width(800)
                    .height(1200)
                    .quality(90)
                    .url()
                : "/placeholder.svg?height=1200&width=800&query=luxury+hotel+room"
            }
            alt={localizedContent.name}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Enhanced Content Section */}
      <Container className="py-12 md:py-20">
        {offer ? (
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Package Overview - Enhanced */}
            <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                    <Gift className="h-6 w-6 text-avangarda" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {dict?.common?.offerDetails || "Szczegóły oferty"}
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none mb-10">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {localizedContent.description}
                  </p>
                </div>

                {/* What's included section - Enhanced grid */}
                <div className="mb-10">
                  <div className="flex items-center mb-6">
                    <Star className="h-6 w-6 text-avangarda mr-3" />
                    <h3 className="text-xl font-semibold text-gray-800">
                      W pakiecie otrzymujesz
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {packageDetails.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-avangarda/30 hover:shadow-md transition-all duration-300 group"
                      >
                        <div className="p-2 bg-avangarda/10 rounded-full mr-3 group-hover:bg-avangarda/20 transition-colors">
                          <amenity.icon className="h-5 w-5 text-avangarda" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {amenity.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Package highlights - Enhanced */}
                <div className="bg-gradient-to-br from-avangarda/5 to-transparent p-6 border border-avangarda/20 hover:border-avangarda/40 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <Check className="h-6 w-6 text-avangarda mr-3" />
                    <h3 className="text-xl font-semibold text-gray-800">
                      Najważniejsze atrakcje
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {offer.offerListing && offer.offerListing.length > 0 ? (
                      offer.offerListing.map((item, index) => {
                        const displayName =
                          lang === "pl" ? item.plname : item.enname;
                        return (
                          <li
                            key={item._id || index}
                            className="flex items-start group"
                          >
                            <div className="p-1 bg-avangarda rounded-full mr-4 mt-1 group-hover:scale-110 transition-transform">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium leading-relaxed">
                              {displayName || "Atrakcja pakietu"}
                            </span>
                          </li>
                        );
                      })
                    ) : (
                      <li className="flex items-start">
                        <Info className="h-5 w-5 text-avangarda mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          Brak informacji o atrakcjach pakietu
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Enhanced Image Gallery with Bigger Images */}
            <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                    <Camera className="h-6 w-6 text-avangarda" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Galeria</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {packageDetails.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-[4/3] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Terms and Conditions */}
            <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-avangarda" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Warunki rezerwacji
                  </h2>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 border border-gray-200">
                  <ul className="space-y-4">
                    {packageDetails.terms.map((term, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="p-1 bg-gray-300 rounded-full mr-4 mt-1 group-hover:bg-avangarda transition-colors">
                          <Info className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">
                          {term}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Location & Contact Info */}
            <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-avangarda" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Informacje praktyczne
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                    <Clock className="h-8 w-8 text-avangarda mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Check-in / Check-out
                    </h3>
                    <p className="text-gray-600 text-sm">15:00 / 11:00</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                    <Users className="h-8 w-8 text-avangarda mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Rezerwacje
                    </h3>
                    <p className="text-gray-600 text-sm">+48 574 383 282</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                    <MapPin className="h-8 w-8 text-avangarda mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Lokalizacja
                    </h3>
                    <p className="text-gray-600 text-sm">Różan nad Narwią</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Offer not found.</p>
          </div>
        )}
      </Container>

      {/* Enhanced Call to action */}
      <div id="CTA">
        <OffersCTA dict={dict} lang={lang} />
      </div>
    </main>
  );
};

export default OffersPageId;
