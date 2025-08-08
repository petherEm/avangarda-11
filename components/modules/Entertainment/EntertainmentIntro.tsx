"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Waves,
  Trees,
  Footprints,
  FishIcon as Swimming,
  Clock,
  Baby,
  PlayIcon as Playground,
  Leaf,
  Users,
  Target,
  Gamepad2,
  Flame,
  UtensilsCrossed,
  VolleyballIcon,
  Circle,
  Sparkles,
  Calendar,
  Music,
  Utensils,
  MapPin,
  Bike,
  Dumbbell,
} from "lucide-react";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";

export default function OutdoorEntertainment({
  dict,
  lang,
}: {
  dict: any;
  lang: string;
}) {
  return (
    <>
      <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* 1. HOTEL PEŁEN MOŻLIWOŚCI SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 sm:px-0">
            {/* Main Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative w-full h-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
            >
              <Image
                src="/outdoor/out-02.jpg"
                alt="Hotel pełen możliwości - aktywny wypoczynek"
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>

            <div className="flex flex-col justify-between">
              <div>
                <AnimatedDecorativeBar />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  Hotel pełen możliwości
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  W Hotelu Avangarda nie ma czasu na nudę – tu coś się dzieje
                  przez cały rok! Na najmłodszych i całe rodziny czeka Klub
                  Coola, czyli rodzinne centrum rozrywki z salą zabaw,
                  kręgielnią i mnóstwem atrakcji. Dla szukających relaksu
                  przygotowaliśmy strefę wellness z basenem, jacuzzi, grotą
                  solną i dwiema saunami oraz pełną paletę masaży i zabiegów
                  pielęgnacyjnych. Miłośnikom aktywnego wypoczynku polecamy
                  spływy malowniczą Narwią, mecze siatkówki plażowej,
                  wypożyczenie rowerów czy kijów nordic walking. W weekendowe
                  wieczory hotel tętni życiem! Organizujemy wtedy wyjątkowe
                  imprezy taneczne, wieczorne koncerty czy klimatyczne kolacje
                  degustacyjne.
                </motion.p>
              </div>

              {/* Activity Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              >
                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad2 className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Klub Coola</h3>
                  </div>
                  <p className="text-sm text-slate-600">Zabawa non stop!</p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Swimming className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Basen</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    8-osobowe jacuzzi i 2 sauny
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Avangarda SPA</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Autorskie zabiegi i rytuały
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Atrakcyjne weekendy
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Tu nie ma czasu na nudę
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4 sm:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Na styku Mazowsza i Kurpi
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Okolica pełna folkloru
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Hotel Gallery with Dark Background */}
      <div className="relative mb-16 py-28">
        <BackgroundLogoBottomDark position="right" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-white/30"></div>
              <h2 className="text-2xl font-semibold text-center text-white">
                Zapraszamy
              </h2>
              <div className="h-px flex-1 bg-white/30"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/outdoor/out-01.jpg"
                  alt="Spływy kajakowe po Narwi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/outdoor/out-03.jpg"
                  alt="Spacery po okolicy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/outdoor/out-02.jpg"
                  alt="Nordic Walking"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/outdoor/out-04.jpg"
                  alt="Siatkówka plażowa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      <Container className="bg-white w-full text-primary">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* 2. KLUB COOLA SECTION - INVERTED */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 sm:px-0">
            <div className="order-2 lg:order-1 flex flex-col justify-between">
              <div>
                <AnimatedDecorativeBar />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  Klub Coola - serce rodzinnej rozrywki
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  Zapraszamy do miejsca, gdzie śmiech i dobra zabawa trwają non
                  stop! Znajdziesz tu kręgielnię, kolorową salę zabaw, strefę
                  gier oraz wygodne miejsce do wspólnego spędzania czasu. Na
                  gości czeka również bar serwujący włoskie pizze, rzemieślnicze
                  burgery oraz klasyczne i autorskie drinki. Miłośnikom
                  słodkości polecamy pyszne kawy i prawdziwe, domowe ciasta z
                  hotelowej cukierni.
                </motion.p>
              </div>

              {/* Games Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              >
                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Circle className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Kręgle</h3>
                  </div>
                  <p className="text-sm text-slate-600">Dwa tory do gry</p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Bilard</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Rywalizacja w dobrym stylu
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad2 className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Strefa gier</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Piłkarzyki, cymbergaj i rzutki
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Baby className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Sala zabaw</h3>
                  </div>
                  <p className="text-sm text-slate-600">70 m2 dobrej zabawy</p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <UtensilsCrossed className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Bar</h3>
                  </div>
                  <p className="text-sm text-slate-600">Napoje i przekąski</p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Wygodne loże</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Odpoczynek w klubowym wydaniu
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="order-1 lg:order-2 relative w-full h-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
            >
              <Image
                src="/klub/klub-05.jpg"
                alt="Klub Coola - centrum rodzinnej rozrywki"
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Klub Coola Gallery with Dark Background */}
      <div className="relative mb-16 py-28">
        <BackgroundLogoBottomDark position="right" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-white/30"></div>
              <h2 className="text-2xl font-semibold text-center text-white">
                Zapraszamy
              </h2>
              <div className="h-px flex-1 bg-white/30"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/klub/klub-06.jpg"
                  alt="Rzutki w Klubie Coola"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/klub/klub-07.jpg"
                  alt="Cymbergaj w Klubie Coola"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/klub/klub-05.jpg"
                  alt="Bilard w Klubie Coola"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/klub/klub-04.JPG"
                  alt="Bar w Klubie Coola"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      <Container className="bg-white w-full text-primary">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* 3. SPA SUBSECTION SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative w-full h-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
            >
              <Image
                src="/outdoor/out-07.jpg"
                alt="Atrakcje dla dzieci - plac zabaw"
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>

            <div className="flex flex-col justify-between">
              <div>
                <AnimatedDecorativeBar />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  Poczuj luksus pełnego wyciszenia
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  W strefie Wellness Hotelu Avangarda odkryjesz wyjątkowy,
                  ekskluzywny świat relaksu. Zanurz się w niezwykłej atmosferze
                  naszego SPA, gdzie ciepło jacuzzi, kojące sauny i leczniczy
                  mikroklimat groty solnej pozwolą Ci zapomnieć o codzienności.
                  Dla prawdziwego odprężenia przygotowaliśmy autorskie rytuały,
                  które zapewnią głęboki relaks i ukojenie zmysłów. Zapraszamy
                  również do skorzystania z szerokiego wyboru masaży oraz
                  zabiegów na twarz i ciało, wykonywanych przez doświadczone
                  terapeutki. Avangarda SPA to miejsce stworzone z myślą o
                  chwili tylko dla Ciebie – tutaj czas zwalnia, a Ty odzyskujesz
                  wewnętrzną harmonię.
                </motion.p>
              </div>

              {/* Kids Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              >
                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Playground className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Masaże</h3>
                  </div>
                  <p className="text-sm text-slate-600">Relaks i wyciszenie</p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Baby className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Zabiegi pielęgnacyjne
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Światowe marki kosmetyków
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Swimming className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Basen rekreacyjny
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Wodne szaleństwo przez cały rok
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Jacuzzi</h3>
                  </div>
                  <p className="text-sm text-slate-600">Kojące ciepło wody</p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Dwie sauny</h3>
                  </div>
                  <p className="text-sm text-slate-600">Fińska i Infrared</p>
                </div>
                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Grota solna</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Leczniczy mikroklimat
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Kids Gallery with Dark Background */}
      <div className="relative mb-16 py-28">
        <BackgroundLogoBottomDark position="right" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-white/30"></div>
              <h2 className="text-2xl font-semibold text-center text-white">
                Zapraszamy
              </h2>
              <div className="h-px flex-1 bg-white/30"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/outdoor/out-04.jpg"
                  alt="Plac zabaw dla dzieci"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/outdoor/out-06.jpg"
                  alt="Ścieżka edukacyjna"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/outdoor/out-07.jpg"
                  alt="Brodzik dla dzieci"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/spa/pool-kids.jpg"
                  alt="Pokój gier dla dzieci"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      <Container className="bg-white w-full text-primary">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* 4. AKTYWNY WYPOCZYNEK SECTION - INVERTED */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 sm:px-0">
            <div className="order-2 lg:order-1 flex flex-col justify-between">
              <div>
                <AnimatedDecorativeBar />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  Aktywny wypoczynek
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  W Hotelu Avangarda aktywny wypoczynek to czysta przyjemność –
                  dla małych i dużych! Spływy kajakowe po Narwi to świetny
                  sposób na rodzinny relaks wśród natury. Na aktywnych Gości
                  czekają rowery, kije nordic walking oraz siatkówka plażowa,
                  która dostarcza mnóstwo frajdy w słoneczne dni. Dla miłośników
                  treningu o każdej porze roku dostępna jest również nowoczesna
                  siłownia ze profesjonalnym sprzętem marki Matrix Fitness.
                </motion.p>
              </div>

              {/* Activity Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              >
                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Waves className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Spływy kajakowe
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">Odkryj piękno Narwi</p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Swimming className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Rowerki wodne</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Rodzinny relaks na wodzie
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <VolleyballIcon className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Siatkówka plażowa
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Sportowa rywalizacja na piasku
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Bike className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Rowery</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Odkrywaj okolicę aktywnie
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Footprints className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Nordic walking</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Krok za krokiem idź po zdrowie
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Dumbbell className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Siłownia</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Profesjonalny sprzęt Matrix Fitness
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="order-1 lg:order-2 relative w-full h-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
            >
              <Image
                src="/spa/pool-01.jpg"
                alt="Aktywny wypoczynek - basen i relaks"
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Activity Gallery with Dark Background */}
      <div className="relative mb-16 py-28">
        <BackgroundLogoBottomDark position="right" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-white/30"></div>
              <h2 className="text-2xl font-semibold text-center text-white">
                Zapraszamy
              </h2>
              <div className="h-px flex-1 bg-white/30"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/spa/pool-kids.jpg"
                  alt="Basen z hydromasażem"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/spa/pool-03.jpg"
                  alt="Strefa relaksu przy basenie"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/spa/pool-01.jpg"
                  alt="Widok na basen z góry"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/spa/pool-02.jpg"
                  alt="Oświetlenie basenu"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      <Container className="bg-white w-full text-primary">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* 5. WEEKENDY PEŁNE ATRAKCJI SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative w-full h-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
            >
              <Image
                src="/fort/fort-05.png"
                alt="Weekendy pełne atrakcji - Fort no.5"
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>

            <div className="flex flex-col justify-between">
              <div>
                <AnimatedDecorativeBar />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  Weekendy pełne atrakcji
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  Weekendy w Hotelu Avangarda to czas pełen energii, smaków i
                  niezapomnianych wrażeń! Czekają na Ciebie wieczory z muzyką na
                  żywo, wyjątkowe imprezy taneczne czy klimatyczne kolacje
                  degustacyjne. Sezonowo zapraszamy na takie atrakcje, jak
                  Miasteczko Świętego Mikołaja czy Farma Dyniowa. Nasz hotel
                  leży na styku Mazowsza i Kurpi, dzięki czemu w najbliższej
                  okolicy możesz doświadczyć najbardziej barwnego polskiego
                  folkloru.
                </motion.p>
              </div>

              {/* Weekend Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              >
                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Music className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Muzyka na żywo</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Lokalni muzycy pełni pasji
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Imprezy taneczne
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Klimat najlepszej zabawy
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Utensils className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Kolacje degustacyjne
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Dobra kuchnia to nasza specjalność!
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Atrakcje sezonowe
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">Cztery sezony zabawy</p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Wydarzenia lokalne
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Folklor Mazowsza i Kurpi
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Trees className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Na grzyby, na ryby…
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Czyste rzeki i piękne lasy
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Fort Gallery with Dark Background */}
      <div className="relative mb-16 py-28">
        <BackgroundLogoBottomDark position="right" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-white/30"></div>
              <h2 className="text-2xl font-semibold text-center text-white">
                Zapraszamy
              </h2>
              <div className="h-px flex-1 bg-white/30"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/fort/fort-06.jpg"
                  alt="Fort no.5 - wnętrze"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/fort/fort-04.jpg"
                  alt="Fort no.5 - miejsce grillowe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/fort/fort-05.png"
                  alt="Fort no.5 - zewnętrzny widok"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/fort/fort-03.jpg"
                  alt="Fort no.5 - historyczne wnętrze"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
    </>
  );
}
