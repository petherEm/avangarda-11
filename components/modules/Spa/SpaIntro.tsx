"use client";
import Image from "next/image";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Sparkles,
  Dumbbell,
  Calendar,
  Banknote,
  Star,
  Quote,
  Download,
} from "lucide-react";
import { SPA_FEATURED_SERVICES } from "@/constants";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";
import Link from "next/link";
import { fileUrl } from "@/lib/fileUrl";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface SpaIntroProps {
  dict: any;
  lang: string;
  spaOffers: any[];
}

// Testimonials data for Spa
const testimonials = [
  {
    id: 1,
    name: "Marta",
    location: "Białystok",
    rating: 5,
    text: "Spa w Hotel Avangarda to prawdziwy raj dla ciała i duszy! Masaż relaksacyjny był niesamowity, a grota solna pomogła mi się zregenerować po stresującym tygodniu. Personel bardzo profesjonalny i miły. Zdecydowanie wrócę!",
    date: "Maj 2024",
  },
  {
    id: 2,
    name: "Krzysztof",
    location: "Suwałki",
    rating: 5,
    text: "Spędziliśmy weekend wellness z żoną i było fantastycznie! Zabiegi na twarz, masaże i relaks w strefie spa. Wszystko na najwyższym poziomie. Szczególnie polecam pakiet dla par - romantycznie i relaksująco.",
    date: "Sierpień 2024",
  },
];

export default function SpaIntro({ dict, lang, spaOffers }: SpaIntroProps) {
  const phoneNumber = "+48 505 158 200";

  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  // Get the first spa offer for download
  const primarySpaOffer = spaOffers?.[0];

  return (
    <>
      <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* SPA SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 sm:px-0">
            {/* Main Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-square w-full overflow-hidden"
            >
              <Image
                src="/spa/spa-02.jpeg"
                alt="Spa Avangarda - zabiegi wellness"
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>

            <div>
              <AnimatedDecorativeBar />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  Avangarda SPA
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                ></motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-light"
              >
                Zapraszamy do wyjątkowej strefy SPA - miejsca stworzonego z
                myślą o pełnym komforcie i regeneracji naszych Gości. To
                przestrzeń, w której cisza, aromaty i dotyk profesjonalnych
                zabiegów pozwolą oderwać się od codzienności. Oferujemy szeroki
                wybór masaży, zabiegów na twarz i ciało wykonywanych na
                kosmetykach światowych marek, a także autorskie rytuały
                stworzone z myślą o tym miejscu. Nasz zespół doświadczonych
                terapeutów zadba o każdy szczegół, tak, by chwile spędzone w
                strefie Spa były prawdziwym odprężeniem dla ciała i umysłu.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                {/* Improved Download Buttons Layout */}
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-slate-600 mb-3">
                    Pobierz menu zabiegów:
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {primarySpaOffer && primarySpaOffer.offerFile && (
                    <>
                      <Link
                        href={fileUrl(primarySpaOffer.offerFile)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Button
                          variant="avangarda"
                          size="sm"
                          className="w-full text-xs"
                        >
                          <Download className="h-3 w-3" />
                          Masaże i rytuały
                        </Button>
                      </Link>

                      <Link
                        href={fileUrl(primarySpaOffer.offerFile)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Button
                          variant="avangarda"
                          size="sm"
                          className="w-full text-xs"
                        >
                          <Download className="h-3 w-3" />
                          Zabiegi na twarz
                        </Button>
                      </Link>

                      <Link
                        href={fileUrl(primarySpaOffer.offerFile)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Button
                          variant="avangarda"
                          size="sm"
                          className="w-full text-xs"
                        >
                          <Download className="h-3 w-3" />
                          Zabiegi na ciało
                        </Button>
                      </Link>

                      <Link
                        href={fileUrl(primarySpaOffer.offerFile)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Button
                          variant="avangarda"
                          size="sm"
                          className="w-full text-xs"
                        >
                          <Download className="h-3 w-3" />
                          Kids SPA
                        </Button>
                      </Link>
                    </>
                  )}
                </div>

                {/* Main CTA Button */}
                {/* <Link
                  href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2"
                >
                  <Button className="w-full" variant="fillRight">
                    <Calendar className="h-4 w-4" />
                    Zarezerwuj wizytę
                  </Button>
                </Link> */}
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Testimonials Section */}
      <Container className="bg-white w-full text-primary">
        {/* Spa Testimonials - RIGHT AFTER BESTSELLERS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 sm:px-0"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Quote className="h-8 w-8 text-avangarda" />
            <h2 className="text-3xl font-semibold text-center">Opinie Gości</h2>
          </div>
          <p className="main-paragraph-light mb-8 text-center max-w-3xl mx-auto">
            Poznaj opinie naszych gości o relaksujących chwilach spędzonych w
            Avangarda SPA
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-avangarda/10 p-6 relative"
              >
                <div className="absolute top-4 right-4">
                  <Quote className="h-6 w-6 text-avangarda" />
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-avangarda text-avangarda"
                    />
                  ))}
                </div>
                <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-600">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">{testimonial.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>

      {/* Spa Bestsellers - FULL WIDTH DARK BACKGROUND - RIGHT AFTER SPA INTRO */}
      <div className="relative mb-16 py-16 sm:pb-24 md:pb-28 bg-avangarda text-white">
        <BackgroundLogoBottomDark position="right" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 sm:px-0"
          >
            <h3 className="text-2xl font-medium mb-6 text-center text-white">
              {lang === "pl"
                ? "Nasze autorskie zabiegi"
                : "Our preferred treatments"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SPA_FEATURED_SERVICES.map((service, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-none bg-white/95 backdrop-blur-sm flex flex-col"
                >
                  {/* Image container - no padding at top */}
                  <div className="relative h-64 w-full">
                    <Image
                      src={service.imageKey || "/placeholder.svg"}
                      alt={t(service.nameKey)}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content container with proper spacing */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h4 className="font-medium text-primary mb-2 text-lg">
                      {t(service.nameKey)}
                    </h4>
                    <p className="text-md text-gray-600 mb-4 leading-relaxed flex-grow">
                      {t(service.descriptionKey)}
                    </p>
                    <p className="text-avangarda font-medium leading-relaxed mt-auto">
                      {t(service.priceKey)} / {t(service.durationKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>

      <Container className="bg-white w-full text-primary ">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* SWIMMING POOL SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-square w-full overflow-hidden"
            >
              <Image
                src="/spa/pool-01.jpg"
                alt="Basen Hotel Avangarda"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
              />
            </motion.div>

            <div>
              <AnimatedDecorativeBar />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  Basen
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-light"
              >
                Zapraszamy do strefy basenowej Hotelu Avangarda – znajdziesz tu
                basen rekreacyjny, brodzik dla dzieci, 8 osobowe jacuzzi, dwie
                kojące sauny – fińską i Infrared – oraz komfortową strefę
                relaksu z podgrzewaną leżanką, brodzikami do moczenia stóp przed
                saunowaniem oraz studnią lodową, dzięki której można ochłodzić
                ciało płatkami lodu . Tu woda, ciepło i cisza tworzą doskonałą
                harmonię wypoczynku.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-light"
              >
                Basen dostępny jest wyłącznie dla Gości hotelowych. Jeżeli nie
                nocujesz w naszym hotelu, a chcesz skorzystać z basenu zapoznaj
                się z pakietami Familijna Niedziela i DAY SPA.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-slate-600 mb-3">
                    Pobierz informacje o pakietach:
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {primarySpaOffer && primarySpaOffer.offerFile && (
                    <>
                      <Link
                        href={fileUrl(primarySpaOffer.offerFile)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Button
                          variant="avangarda"
                          size="sm"
                          className="w-full text-xs"
                        >
                          <Download className="h-3 w-3" />
                          Familijna Niedziela
                        </Button>
                      </Link>

                      <Link
                        href={fileUrl(primarySpaOffer.offerFile)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Button
                          variant="avangarda"
                          size="sm"
                          className="w-full text-xs"
                        >
                          <Download className="h-3 w-3" />
                          Day Spa
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Pool Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-20 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-avangarda"></div>
              <h2 className="text-2xl font-semibold text-center text-primary">
                Zapraszamy
              </h2>
              <div className="h-px flex-1 bg-avangarda"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First image - always visible */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/spa/pool-kids.jpg"
                  alt="Basen z hydromasażem"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Second image - always visible */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/spa/pool-03.jpg"
                  alt="Strefa relaksu przy basenie"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Third image - hidden on mobile */}
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/spa/pool-02.jpg"
                  alt="Widok na basen z góry"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Fourth image - hidden on mobile */}
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/spa/pool-01.jpg"
                  alt="Oświetlenie basenu"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* GROTA SOLNA SECTION - FULL WIDTH DARK BACKGROUND */}
      <div className="relative mb-16 py-16">
        <BackgroundLogoBottomDark position="right" />
        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-square w-full overflow-hidden"
            >
              <Image
                src="/spa/spa-1.png"
                alt="Grota solna Avangarda"
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>

            <div>
              <AnimatedDecorativeBar />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-dark"
                >
                  Grota Solna
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-dark"
              >
                Nasza grota solna to naturalne środowisko terapeutyczne, które
                tworzy unikalny mikroklimat bogaty w jony ujemne oraz
                mikroelementy takie jak jod, potas, wapń, magnez, brom i selen –
                występujące tu w stężeniu kilkukrotnie wyższym niż nad morzem.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-dark"
              >
                W tężni używamy solanki z Zabłocia wydobywanej od ponad 120 lat
                z odwiertu „KORONA" w uzdrowisku Zabłocie-Solanka z głęboko
                położonych złóż wód leczniczych jodowo-bromowych.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-dark"
              >
                Seanse w grocie wspomagają leczenie chorób dróg oddechowych,
                nadciśnienia, niedoczynności tarczycy oraz dolegliwości
                sercowo-naczyniowych. Wzmacniają odporność, redukują stres,
                zmęczenie i wspierają regenerację układu nerwowego – także u
                dzieci.
              </motion.p>
            </div>
          </div>
        </Container>
      </div>

      <Container className="bg-white w-full text-primary">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* Salt Room Gallery - RIGHT AFTER GROTA SOLNA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-20 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-avangarda"></div>
              <h2 className="text-2xl font-semibold text-center text-primary">
                Zapraszamy
              </h2>
              <div className="h-px flex-1 bg-avangarda"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First image - always visible */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/spa/spa-03.jpeg"
                  alt="Wnętrze groty solnej"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Second image - always visible */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/spa/spa-12.jpg"
                  alt="Strefa relaksu w grocie"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Third image - hidden on mobile */}
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/spa/spa-09.jpg"
                  alt="Sól himalajska w grocie"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Fourth image - hidden on mobile */}
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/spa/spa-05.jpg"
                  alt="Oświetlenie w grocie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* GYM SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-[7/6] w-full overflow-hidden"
            >
              <Image
                src="/gym/gym-06.jpg"
                alt="Siłownia Matrix Avangarda"
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>

            <div>
              <AnimatedDecorativeBar />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  Siłownia & Fitness
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-light"
              >
                Nowoczesna siłownia wyposażona w profesjonalny sprzęt marki
                Matrix to idealne miejsce na trening o każdej porze dnia.
                Oferujemy szeroki wybór urządzeń cardio i siłowych,
                dostosowanych do potrzeb zarówno początkujących, jak i
                zaawansowanych użytkowników. Znajdziesz tu m.in. bieżnie,
                rowery, orbitreki, a także maszyny do treningu siłowego i wolne
                ciężary. Przestrzeń jest klimatyzowana, dobrze oświetlona i
                sprzyja komfortowemu treningowi.
              </motion.p>
              <p></p>
            </div>
          </div>

          {/* Gym Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-20 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-avangarda"></div>
              <h2 className="text-2xl font-semibold text-center text-primary">
                Zapraszamy
              </h2>
              <div className="h-px flex-1 bg-avangarda"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First image - always visible */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/gym/gym-05.jpg"
                  alt="Sprzęt cardio Matrix"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Second image - always visible */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/gym/gym-04.jpg"
                  alt="Strefa siłowa"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Third image - hidden on mobile */}
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/gym/gym-02.jpg"
                  alt="Wolne ciężary"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Fourth image - hidden on mobile */}
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/gym/gym-01.jpg"
                  alt="Panorama siłowni"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </>
  );
}
