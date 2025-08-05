"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Wine,
  Clock,
  Music,
  Users,
  Utensils,
  Flame,
  TreePine,
  Fish,
  Waves,
  SandwichIcon as Hamburger,
  VibrateIcon as Volleyball,
  Bike,
  Cherry,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

interface BusinessEntertainmentProps {
  dict?: any;
  lang?: string;
}

export default function BusinessEntertainment({
  dict,
  lang = "pl",
}: BusinessEntertainmentProps) {
  const [selectedTab, setSelectedTab] = useState<string>("club");
  const phoneNumber = "+48 29 752 50 34";

  return (
    <div className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Introduction Section - Image on left, text on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 px-4 sm:px-0">
          {/* Image on the left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-auto"
          >
            <div className="relative aspect-square w-full h-[660px] overflow-hidden">
              <Image
                src="/conference/team-building.png"
                alt="Klub Coola"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text on the right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedDecorativeBar />
            <h1 className="title-light">Integracje i Team Building</h1>
            <p className="main-paragraph-light">
              Zamień zwykłe spotkanie firmowe w niezapomnianą przygodę!
              Integracje w Hotelu Avangarda to połączenie świetnej zabawy,
              budowania relacji i relaksu w wyjątkowym otoczeniu. Nasze
              wydarzenia są tworzone z myślą o tym, by każdy uczestnik poczuł
              się częścią zespołu – niezależnie od stanowiska czy wieku.
            </p>
            <p className="main-paragraph-light">
              Oferujemy szeroki wachlarz aktywności integracyjnych i team
              buildingowych od gier zespołowych przez warsztaty kreatywne czy
              kulinarne, aż po niezwykłe wieczory tematyczne. Integralną częścią
              naszej oferty są również działania w obszarze CSR, które pozwalają
              uczestnikom realnie zaangażować się w inicjatywy społeczne i
              ekologiczne.
            </p>
            <p className="main-paragraph-light">
              Nieszablonowe pomysły to nasza specjalność, ogranicza nas tylko
              Państwa wyobraźnia…
            </p>
          </motion.div>
        </div>

        {/* Entertainment Options Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 px-4 sm:px-0"
        >
          <Tabs
            defaultValue="club"
            className="w-full"
            onValueChange={setSelectedTab}
          >
            <TabsList className="flex flex-wrap justify-center gap-2 w-full max-w-5xl mx-auto mb-12 bg-gray-100 rounded-2xl p-3 h-auto min-h-[60px]">
              <TabsTrigger
                value="club"
                className="data-[state=active]:bg-white data-[state=active]:text-avangarda data-[state=active]:shadow-md rounded-xl font-semibold px-4 py-2.5 text-sm whitespace-nowrap transition-all duration-200 hover:bg-white/50"
              >
                Klub Coola
              </TabsTrigger>
              <TabsTrigger
                value="outdoor"
                className="data-[state=active]:bg-white data-[state=active]:text-avangarda data-[state=active]:shadow-md rounded-xl font-semibold px-4 py-2.5 text-sm whitespace-nowrap transition-all duration-200 hover:bg-white/50"
              >
                Outdoor
              </TabsTrigger>
              <TabsTrigger
                value="fort"
                className="data-[state=active]:bg-white data-[state=active]:text-avangarda data-[state=active]:shadow-md rounded-xl font-semibold px-4 py-2.5 text-sm whitespace-nowrap transition-all duration-200 hover:bg-white/50"
              >
                Fort No. 4
              </TabsTrigger>
              <TabsTrigger
                value="dymna"
                className="data-[state=active]:bg-white data-[state=active]:text-avangarda data-[state=active]:shadow-md rounded-xl font-semibold px-4 py-2.5 text-sm whitespace-nowrap transition-all duration-200 hover:bg-white/50"
              >
                Dymna Polana
              </TabsTrigger>
              <TabsTrigger
                value="przystan"
                className="data-[state=active]:bg-white data-[state=active]:text-avangarda data-[state=active]:shadow-md rounded-xl font-semibold px-4 py-2.5 text-sm whitespace-nowrap transition-all duration-200 hover:bg-white/50"
              >
                Przystań Avangarda
              </TabsTrigger>
            </TabsList>

            <TabsContent value="club" className="space-y-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">Klub Coola</h3>
                      <Badge className="bg-avangarda/10 text-avangarda rounded-md">
                        Rozrywka & Relaks
                      </Badge>
                    </div>
                    <p className="main-paragraph-light">
                      Po dniu intensywnej pracy zapraszamy do Klubu Coola –
                      przestrzeni stworzonej z myślą o nieformalnych
                      spotkaniach, integracji i dobrej zabawie. Kręgle, bilard i
                      rzutki sprzyjają luźnej atmosferze, w której łatwiej o
                      swobodny networking i wspólne świętowanie sukcesów.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Kręgle</p>
                      <p className="text-xs">2 tory do gry</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Bilard</p>
                      <p className="text-xs">Strefa gier</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Sport</p>
                      <p className="text-xs">na dużym ekranie</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Wine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Wyłączność</p>
                      <p className="text-xs">zapytaj o możliwość</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Wine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Bar</p>
                      <p className="text-xs">Szeroki wybór drinków</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Music className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Muzyka</p>
                      <p className="text-xs">DJ lub koncerty</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="relative aspect-video w-full h-[500px] overflow-hidden ">
                    <Image
                      src="/klub/klub-04.JPG"
                      alt="Klub Coola"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="outdoor" className="space-y-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">
                        Aktywności na naprawdę (!) świeżym powietrzu
                      </h3>
                      <Badge className="bg-avangarda/10 text-avangarda rounded-md">
                        Rekreacja
                      </Badge>
                    </div>
                    <p className="main-paragraph-light">
                      Zadbaj o równowagę między pracą a regeneracją dzięki
                      aktywnościom na łonie natury. Proponujemy szeroki wachlarz
                      form rekreacji na świeżym powietrzu – idealnych jako
                      przerywnik w intensywnym dniu lub element budowania
                      zespołu. Bliskość rzeki, zieleń i ruch to sprawdzony
                      sposób na odświeżenie umysłu i pozytywną energię w
                      zespole.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-avangarda/10 p-4 text-center ">
                      <Waves className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        Zaginiony Skarb Avangardów
                      </p>
                      <p className="text-xs">Nasza flagowa gra terenowa</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center ">
                      <Hamburger className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        Wyjazdy na strzelnicę
                      </p>
                      <p className="text-xs">Rywalizacja w zespole</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center ">
                      <Volleyball className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Paintball</p>
                      <p className="text-xs">Wyrzuć z siebie złość</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center ">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Quady</p>
                      <p className="text-xs">Zastrzyk adrenaliny</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center ">
                      <Bike className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Nordic Walking</p>
                      <p className="text-xs">Urocza okolica Dolnej Narwi</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center ">
                      <Cherry className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">CSR</p>
                      <p className="text-xs">Bo warto pomagać</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  {/* Full-width image for outdoor tab */}
                  <div className="relative aspect-video w-full h-[500px] overflow-hidden ">
                    <Image
                      src="/outdoor/out-02.JPG"
                      alt="Aktywności plenerowe"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fort" className="space-y-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">Fort No. 4</h3>
                      <Badge className="bg-avangarda/10 text-avangarda rounded-md">
                        Integracja & BBQ
                      </Badge>
                    </div>
                    <p className="main-paragraph-light">
                      Fort No. 4 to unikalna infrastruktura plenerowa, gdzie
                      historia splata się z nowoczesnością, tworząc idealne
                      warunki do integracji zespołowej w nieformalnej
                      atmosferze. Proponujemy różne tematy przewodnie kolacji od
                      American BBQ Party, przez wieczór we włoskiej Trattorii po
                      tradycyjną polską biesiadę. Niezależnie od wybranego
                      motywu kolacji, gwarantujemy moc atrakcji i niepowtarzalną
                      atmosferę, które sprawią, że każde wydarzenie w Forcie No.
                      4 stanie się niezapomnianym doświadczeniem dla całego
                      zespołu.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Flame className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Dostępność</p>
                      <p className="text-xs">maj-wrzesień</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Kamienny amfiteatr</p>
                      <p className="text-xs">
                        Przestrzeń dla wyjątkowych zdjęć
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <TreePine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Pokazy kulinarne</p>
                      <p className="text-xs">Stacja live cooking</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        Zadaszona przestrzeń
                      </p>
                      <p className="text-xs">Patent na niepogodę</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Utensils className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Wciągające animacje</p>
                      <p className="text-xs">Tematyczne imprezy</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Music className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Muzyka</p>
                      <p className="text-xs">DJ lub muzyka na żywo</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="relative aspect-video w-full h-[500px] overflow-hidden">
                    <Image
                      src="/fort/fort-02.jpg"
                      alt="Fort No. 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="dymna" className="space-y-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">
                        Dymna Polana - miejsce gdzie ogień opowiada historie
                      </h3>
                    </div>
                    <p className="main-paragraph-light">
                      Położona w zacisznym otoczeniu drzew, zlokalizowana nad
                      Fortem No.4., Dymna Polana to miejsce, które pozwala
                      oderwać się od codziennej rutyny i przenieść spotkania na
                      nowy, bardziej naturalny poziom.
                    </p>
                    <p className="main-paragraph-light">
                      Ognisko wraz z ogromnym paleniskiem sprzyja otwartym
                      rozmowom, swobodnej wymianie pomysłów i prawdziwej
                      integracji, a ciepło ognia łączy ludzi skuteczniej niż
                      niejeden konferencyjny stolik. Polana wyposażona jest w
                      zadaszone altany, zapewniające komfort niezależnie od
                      pogody, oraz w drewniane pnie do siedzenia – naturalne,
                      klimatyczne i wygodne.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Fish className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Dostępność</p>
                      <p className="text-xs">maj - wrzesień</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Utensils className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Ognisko</p>
                      <p className="text-xs">
                        Spotkania w swobodnej atmosferze
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Wine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Zadaszone altany</p>
                      <p className="text-xs">Komfort niezależnie od pogody</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Leżaki i hamaki</p>
                      <p className="text-xs">Dla pełni relaksu</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <TreePine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Naturalne otoczenie</p>
                      <p className="text-xs">Przyroda w zasięgu ręki</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="relative aspect-video w-full h-[500px] overflow-hidden">
                    <Image
                      src="/outdoor/out-03.jpg"
                      alt="Bar Przystań"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="przystan" className="space-y-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">
                        Przystań Avangarda - tu czasz płynie wolniej...
                      </h3>
                    </div>
                    <p className="main-paragraph-light">
                      Położona nad samym brzegiem Narwi Przystań Avangarda to
                      miejsce stworzone do relaksu wśród natury. Woda, zieleń,
                      cisza i wyjątkowy, wakacyjny klimat sprawiają, że każda
                      chwila tu staje się niezapomniana. Przystań ze swoją
                      bogatą infrastrukturą oferuje wiele możliwości zarówno do
                      aktywnego spędzenia czasu, swobodnej rekreacji jak i
                      wyjątkowych wieczorów na tarasie pod żaglami.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Fish className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Dostępność</p>
                      <p className="text-xs">maj - wrzesień</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Utensils className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Spływy kajakowe</p>
                      <p className="text-xs">pod opieką ratowników</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Wine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        Plażowy turniej sportowy
                      </p>
                      <p className="text-xs">Siatkówka & badminton</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Plażing nad Narwią</p>
                      <p className="text-xs">Łóżka i kosze plażowe</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <TreePine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Kolacje</p>
                      <p className="text-xs">W śródziemnomorskim stylu</p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Muzyka</p>
                      <p className="text-xs">DJ lub na żywo</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="relative aspect-video w-full h-[500px] overflow-hidden">
                    <Image
                      src="/outdoor/out-03.jpg"
                      alt="Bar Przystań"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
