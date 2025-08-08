"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Waves,
  Trees,
  Footprints,
  FishIcon as Swimming,
  Baby,
  PlayIcon as Playground,
  Users,
  Target,
  Gamepad2,
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

export default function ForKidsIntro({
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
          {/* 1. HOTEL PRZYJAZNY DZIECIOM */}
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
                  Hotel przyjazny dzieciom
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  Zaplanuj rodzinny weekend, święta czy wakacje w miejscu, które
                  naprawdę dba o potrzeby całej rodziny. Stworzyliśmy tu
                  prawdziwy raj dla najmłodszych – z salą zabaw, kręgielnią,
                  basenem i animacjami, które gwarantują uśmiech każdego dnia.
                  Rodzinne pakiety, komfortowe pokoje i praktyczne udogodnienia
                  sprawiają, że pobyt z dziećmi staje się czystą przyjemnością.
                  Do tego pyszne i zdrowe menu, które zadowoli nawet małych
                  niejadków. U nas każdy członek rodziny czuje się wyjątkowo!
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
                    <h3 className="font-medium text-primary">
                      Rodzinne pakiety
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Mnogość atrakcji w cenie
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Swimming className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Pokoje dla całej rodziny
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Wygodne pokoje dla małych i dużych gości.
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Udogodnienia w pokojach
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">Dostępne na życzenie</p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Zdrowa kuchnia</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Pysznie dla małych smakoszy
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
          {/* 2. CZTERY STREFY DZIECIĘCEJ ZABAWY */}
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
                  Cztery strefy dziecięcej zabawy
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  W Hotelu Avangarda zabawa nie ma końca – stworzyliśmy
                  wyjątkowe przestrzenie, w których dzieci czują się jak w
                  bajce! W kolorowej sali zabaw czeka na nie strefa z kulkami i
                  interaktywny magiczny dywan, który zamienia podłogę w świat
                  pełen gier i przygód. Nasza rodzinna kręgielnia z ułatwieniami
                  dla najmłodszych to świetna okazja do wspólnej zabawy i
                  zdrowej rywalizacji. Na zewnątrz maluchy znajdą plac zabaw z
                  huśtawkami, piaskownicą i zabawkami – idealną przestrzeń na
                  beztroskie chwile. A latem prawdziwą atrakcją jest Przystań
                  Avangarda, z piaskowym placem zabaw, huśtawkami i dmuchanym
                  zamkiem – tu możliwości zabawy na świeżym powietrzu są
                  nieograniczone!
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
                    <h3 className="font-medium text-primary">Sala zabaw</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Małpi gaj i magiczny dywan
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Kręgielnia</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Rodzinne centrum rozrywki
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad2 className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Plac zabaw</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Zabawa w cieniu wielkiego klonu
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Baby className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Przystań Avangarda
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Plaża, piasek i zabawa
                  </p>
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

      {/* Cztery Strefy with Dark Background */}
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
          {/* 3. Wellness & SPA dla dzieci */}
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
                  Wellness & SPA dla dzieci
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  W naszej strefie Wellness & SPA dbamy o dobre samopoczucie
                  najmłodszych – bo dzieci zasługują na wyjątkową troskę. Nasz
                  płytki basen (120 cm) i bezpieczny brodzik to idealne miejsce
                  na pierwsze wodne przygody. W ramach Kids SPA oferujemy
                  delikatne masażyki i zabiegi dopasowane do dziecięcych
                  potrzeb. Dla lokalnych rodzin przygotowaliśmy specjalną ofertę
                  Familijna Niedziela, łączącą wypoczynek, wodne szaleństwo i
                  rodzinny obiad z rodzinną atmosferą. To doskonały sposób na
                  wspólne chwile i dobre samopoczucie całej rodziny!
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
                    <h3 className="font-medium text-primary">
                      Brodzik dla dzieci
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Bezpieczna zabawa w wodzie
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Baby className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Płytki basen</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Idealny na pierwsze pływanie
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Swimming className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Kids SPA</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Małe spa, wielka frajda
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Familijna niedziela
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">Dzień pełen atrakcji</p>
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
                  Sezonowe atrakcje dla dzieci
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  W Hotelu Avangarda każda pora roku przynosi nowe przygody dla
                  najmłodszych! Zimą dzieci przenoszą się do największego w
                  regionie, magicznego Miasteczka Świętego Mikołaja, pełnego
                  światełek, niespodzianek i świątecznych animacji. Jesienią
                  zapraszamy na kolorową Farmę Dyniową, gdzie czekają dyniowe
                  dekoracje, zabawy na świeżym powietrzu i kreatywne warsztaty.
                  W chłodniejsze dni maluchy mogą wyszaleć się w naszej ogromnej
                  sali z dmuchańcami, która dostarcza mnóstwo energii i radości.
                  A latem? Czas na wakacje pełne atrakcji, animacji i zabaw na
                  świeżym powietrzu! Atrakcje sezonowe są również dostępne jako
                  zorganizowane warsztaty dla szkół i przedszkoli.
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
                      Miasteczko Świętego Mikołaja
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">Magia Świąt na żywo</p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Swimming className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Farma dyniowa</h3>
                  </div>
                  <p className="text-sm text-slate-600">Jesień pełna zabawy</p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <VolleyballIcon className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Ogromna sala z dmuchańcami
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Skacz, baw się i śmiej !
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Bike className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Wakacje pełne atrakcji
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">Lato pełne przygód</p>
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
                  Urodzinki dla dzieci
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  W Hotelu Avangarda spełniamy dziecięce marzenia o wyjątkowych
                  urodzinach! Organizujemy niezapomniane przyjęcia przez cały
                  rok w kolorowej sali zabaw w Klubie Coola z salą zabaw dla
                  młodszych dzieci lub kręglami dla nastolatków. Od wiosny do
                  jesieni organizujemy urodzinki także w plenerze - na Dymnej
                  Polanie przy ognisku lub w specjalnej dziecięcej strefie na
                  Przystani Avangarda. Każda impreza to moc śmiechu i kreatywnej
                  zabawy dzięki bogatej ofercie animacji dopasowanej do wieku
                  dzieci. Serwujemy pyszne przekąski i słodkości dla
                  najmłodszych, a dla rodziców przygotowujemy komfortową strefę
                  z poczęstunkiem. Zorganizuj z nami urodziny dla swojej
                  pociechy!
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
                    <h3 className="font-medium text-primary">Klub Coola</h3>
                  </div>
                  <p className="text-sm text-slate-600">Komfortowo i pysznie</p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Dymna Polana</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Rodzinnie przy ognisku
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Utensils className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      Przystań Avangarda
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">Urodziny na plaży</p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Animacje</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Dostosowane do zainteresowań
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
