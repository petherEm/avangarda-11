"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Download, Star, TreePine, Users } from "lucide-react";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import Link from "next/link";
import { useRef } from "react";
import { fileUrl } from "@/lib/fileUrl";

interface EventTypesProps {
  dict?: any;
  lang?: string;
  eventsData?: any[];
}

export default function EventTypes({
  dict,
  lang = "pl",
  eventsData = [],
}: EventTypesProps) {
  // Group events by type
  const eventsByType = eventsData.reduce(
    (acc, event) => {
      if (!acc[event.eventType]) {
        acc[event.eventType] = [];
      }
      acc[event.eventType].push(event);
      return acc;
    },
    {} as Record<string, any[]>
  );

  const eventTypes = [
    {
      id: "wesela",
      title: "Twoje wymarzone przyjęcie weselne",
      subtitle: "Niezapomniane chwile w wyjątkowej scenerii",
      description:
        "Hotel Avangarda położony zaledwie godzinę drogi od Warszawy, to miejsce, w którym spełniają się marzenia o niezapomnianym przyjęciu weselnym. Imponująca sala bankietowa, doskonała kuchnia i profesjonalna obsługa to idealne połączenie, aby stworzyć wesele marzeń. Organizujemy zarówno eleganckie przyjęcia weselne w stylu glamour, jak i stylowe wesela w plenerze czy rodzinne kameralne obiady weselne. Nasze doświadczenie, pasja i znajomość najnowszych trendów sprawią, że Twój wielki dzień będzie naprawdę niezapomniany.",
      features: [
        "Opieka doświadczonego koordynatora weselnego",
        "Komfortowy hotel do dyspozycji gości",
        "Sala bankietowa dla 300 osób",
        "Stylowe wesela w plenerze",
        "Kameralne obiady weselne",
        "Doskonała kuchnia",
        "Rekomenowani dekoratorzy, muzycy i twórcy tortów",
        "Bogata oferta atrakcji dla dzieci",
      ],
      icon: Heart,
      color: "bg-avangarda/10",
      accentColor: "text-pink-600",
      image: "/wedding/wed-room-04.jpg",
      galleryImages: ["/wedding/wed-room-03.jpg", "/wedding/wed-room-04.jpg"],
      imagePosition: "left",
      events: eventsByType["wesela"] || [],
    },
    {
      id: "komunie",
      title: "Komunie - rodzinne przyjęcia, jak z dziecięcych snów",
      subtitle: "Świętowanie ważnych momentów w życiu",
      description:
        "Pierwsza Komunia Święta to szczególny moment w życiu dziecka i jego najbliższych. Tak podniosłe wydarzenie zasługuje na odpowiednią oprawę. W Hotelu Avangarda zadbamy o pełną ciepła atmosferę tego wyjątkowego dnia. Oferujemy eleganckie sale, dopracowane menu i mnóstwo dziecięcych atrakcji – wszystko po to, by wspólne świętowanie pozostało w pamięci na długie lata.",
      features: [
        "Sale na 20-150 osób",
        "Doskonała kuchnia",
        "Bogata oferta atrakcji dla dzieci",
        "Ścianka do rodzinnych zdjęć",
        "SŁodki bufet z fontanną czekoladową",
        "Rekomendowani dekoratorzy i twórcy tortów",
      ],
      icon: Star,
      color: "bg-blue-50",
      accentColor: "text-blue-600",
      image: "/wedding/wed-room-07.jpg",
      galleryImages: ["/wedding/wed-room-04.jpg", "/wedding/wed-room-03.jpg"],
      imagePosition: "right",
      events: eventsByType["komunie"] || [],
    },
    {
      id: "uroczystosci-rodzinne",
      title: "Wyjątkowe uroczystości rodzinne",
      subtitle: "Świętuj z rodziną w wyjątkowej atmosferze",
      description:
        "Zorganizuj z nami niezapomniane rodzinne uroczystości – urodziny, chrzciny czy ważne jubileusze. Hotel Avangarda poza doskonałą gastronomią, zapewnia kompleksową usługę organizacji rodzinnych przyjęć, oddając do dyspozycji Państwa gości komfortowy hotel z basenem, kręgielnią, salą zabaw dla dzieci i parkingiem. Wraz z zespołem doświadczonych kucharzy, profesjonalną obsługą kelnerską, z dbałością o każdy szczegół - tworzymy wyjątkowe rodzinne chwile!",
      features: [
        "Opieka doświadczonego koordynatora",
        "Sale na 20-150 osób",
        "Doskonała kuchnia",
        "Bogata oferta atrakcji dla dzieci",
        "Rekomendowani dekoratorzy i twórcy tortów",
        "Oprawa muzyczna i atrakcje dodatkowe",
      ],
      icon: Users,
      color: "bg-amber-50",
      accentColor: "text-amber-600",
      image: "/wedding/wed-room-03.jpg",
      galleryImages: ["/wedding/wed-room-07.jpg", "/outdoor/out-02.jpg"],
      imagePosition: "left",
      events: eventsByType["uroczystosci-rodzinne"] || [],
    },
    {
      id: "przyjecia-plenerowe",
      title: "Stylowe przyjęcia plenerowe",
      subtitle: "Celebracja pod gwiazdami",
      description:
        "Skorzystaj z uroków naturalnego otoczenia i wyjątkowej infrastruktury Hotelu Avangarda i zorganizuj z nami przyjęcie w plenerze. Do wyboru mamy trzy lokalizacje: piękny, kamienno- drewniany Fort No. 4, ognisko Dymna Polana oraz Przystań Avangarda, malowniczo położoną nad Narwią. W swobodnej atmosferze, bez szpilek i krawatów, blisko natury, ale w pełni komfortowo - tworzymy niezapomniane rodzinne przyjęcia plenerowe.",
      features: [
        "Trzy niezwykłe lokalizacje",
        "Miejsca w plenerze na 30-120 osób",
        "Urok natury i komfort hotelowej jakości",
        "Opieka doświadczonego koordynatora wydarzenia",
        "Indywidualnie skomponowane menu",
        "Rekomendowani dekoratorzy i twórcy tortów",
        "Oprawa muzyczna i atrakcje dodatkowe",
        "Bogata oferta atrakcji dla dzieci",
      ],
      icon: TreePine,
      color: "bg-green-50",
      accentColor: "text-green-600",
      image: "/outdoor/out-02.jpg",
      galleryImages: ["/outdoor/out-01.jpg", "/outdoor/out-04.jpg"],
      imagePosition: "right",
      events: eventsByType["przyjecia-plenerowe"] || [],
    },
  ];

  return (
    <div className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-14">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Event Types Sections */}
        <div className="space-y-20 px-4 sm:px-0">
          {eventTypes.map((event, index) => {
            const isImageLeft = event.imagePosition === "left";
            return (
              <EventSection
                key={event.id}
                event={event}
                index={index}
                isImageLeft={isImageLeft}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Separate component for each event section to handle parallax
function EventSection({
  event,
  index,
  isImageLeft,
}: {
  event: any;
  index: number;
  isImageLeft: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animations
  const springConfig = { stiffness: 400, damping: 40, restDelta: 0.001 };

  // Parallax movements for images
  const mainImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]),
    springConfig
  );
  const galleryImage1Y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]),
    springConfig
  );
  const galleryImage2Y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]),
    springConfig
  );

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="md:mb-28"
    >
      {/* Main Content */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch mb-12`}
      >
        {/* Main Image - Enhanced with Parallax - Hidden on mobile/tablet */}
        <div
          className={`hidden lg:block lg:col-span-6 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="relative w-full aspect-[4/3] lg:aspect-square overflow-hidden shadow-lg">
            <motion.div
              className="relative w-full"
              style={{
                y: mainImageY,
                height: "130%", // Larger than container for parallax
                top: "-15%", // Center the oversized image
              }}
            >
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Text Content - Full width on mobile/tablet */}
        <div
          className={`lg:col-span-6 space-y-6 ${isImageLeft ? "lg:order-2" : "lg:order-1"} flex flex-col`}
        >
          <div className="flex-1">
            <AnimatedDecorativeBar />
            <div className="flex items-center gap-2 mb-2">
              <h1 className="title-light">{event.title}</h1>
            </div>
            <p className="main-paragraph-light mb-6">{event.description}</p>

            <h4 className="font-medium mb-3">Co nas wyróżnia:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
              {event.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Download Buttons */}
          <div className="flex flex-col gap-3">
            {event.events.length > 0 ? (
              event.events.map((eventItem: any) => (
                <a
                  key={eventItem._id}
                  href={eventItem.menuFile ? fileUrl(eventItem.menuFile) : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="w-fit">
                    <Download className="h-4 w-4 mr-2" />
                    {eventItem.menuName.toUpperCase()}
                  </Button>
                </a>
              ))
            ) : (
              <Link
                href="/business/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full bg-avangarda hover:bg-avangarda/90 text-white font-alata px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                  variant="default"
                >
                  <Download className="h-4 w-4 mr-2" />
                  POBIERZ OFERTĘ
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Gallery Section with Parallax - Fixed Height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-80">
        {/* Large Gallery Image */}
        <div className="lg:col-span-8">
          <div className="relative w-full h-full aspect-[16/9] lg:aspect-auto overflow-hidden shadow-lg">
            <motion.div
              className="relative w-full h-full"
              style={{
                y: galleryImage1Y,
                height: "120%", // Larger for parallax movement
                top: "-10%", // Center the oversized image
              }}
            >
              <Image
                src={event.galleryImages[0] || "/placeholder.svg"}
                alt={`${event.title} gallery 1`}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Smaller Gallery Image */}
        <div className="lg:col-span-4">
          <div className="relative w-full h-full aspect-[16/9] lg:aspect-auto overflow-hidden shadow-lg">
            <motion.div
              className="relative w-full h-full"
              style={{
                y: galleryImage2Y,
                height: "125%", // Larger for parallax movement
                top: "-12%", // Center the oversized image
              }}
            >
              <Image
                src={event.galleryImages[1] || "/placeholder.svg"}
                alt={`${event.title} gallery 2`}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
