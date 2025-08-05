"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ChefHat,
  Wine,
  Music,
  ArrowRight,
  FileText,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";
import { fileUrl } from "@/lib/fileUrl";
import type { ALL_MENUS_QUERYResult } from "@/sanity.types";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface GastroIntroProps {
  dict: any;
  lang: string;
  menus: {
    "dzika-roza": ALL_MENUS_QUERYResult;
    "klub-coola": ALL_MENUS_QUERYResult;
    "bar-przystan": ALL_MENUS_QUERYResult;
  };
}

const GastroIntro = ({ dict, lang, menus }: GastroIntroProps) => {
  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  const gastronomicPlaces = [
    {
      id: "dzika-roza",
      name: "Restauracja Dzika Róża",
      description:
        "Elegancka restauracja z wykwintną kuchnią polską i międzynarodową.",
      image: "/restaurant/rest-01.jpg",
      icon: ChefHat,
      badge: "Premium",
      features: [
        "Kuchnia polska i międzynarodowa",
        "Eleganckie wnętrze",
        "Menu sezonowe",
        "Obsługa bankietów",
      ],
      link: `/#dzika-roza`,
      menus: menus["dzika-roza"] || [],
    },
    {
      id: "klub-coola",
      name: "Klub Coola",
      description: "Centrum rozrywki z restauracją, kręglami i biliard.",
      image: "/klub/klub-01.JPG",
      icon: Music,
      badge: "Rozrywka",
      features: [
        "Kręgle i bilard",
        "Menu barowe",
        "Imprezy tematyczne",
        "Rozrywka dla rodzin",
      ],
      link: `/#klub-coola`,
      menus: menus["klub-coola"] || [],
    },
    {
      id: "bar-przystan",
      name: "Bar Przystań",
      description:
        "Klimatyczny bar nad Narwią z daniami z grilla i świeżymi rybami.",
      image: "/outdoor/out-01.jpg",
      icon: Wine,
      badge: "Nad rzeką",
      features: [
        "Widok na Narew",
        "Dania z grilla",
        "Świeże ryby",
        "Taras nad rzeką",
      ],
      link: `/#bar-przystan`,
      menus: menus["bar-przystan"] || [],
    },
  ];

  return (
    <div className="w-full">
      {/* Header Section - White Background */}
      <div className="bg-white text-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <AnimatedDecorativeBar className="w-20 h-2 bg-avangarda mb-6 mx-auto" />
            <h1 className="title-light mb-6">Pyszna Avangarda</h1>
            <p className="main-paragraph-light max-w-4xl mx-auto text-lg leading-relaxed">
              Hotel Avangarda oferuje trzy wyjątkowe miejsca gastronomiczne - od
              eleganckiej restauracji, przez rozrywkowy klub, po klimatyczny bar
              nad rzeką. Każde z nich zapewnia niepowtarzalne doznania kulinarne
              i atmosferę idealną na różne okazje.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Three Places Section - Dark Background */}
      <div className="text-white w-full py-20 md:py-32 relative">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <BackgroundLogoBottomDark position="right" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Three Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {gastronomicPlaces.map((place, index) => {
              const IconComponent = place.icon;
              return (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg"
                >
                  {/* Image with enhanced overlay */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={place.image || "/placeholder.svg"}
                      alt={place.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-avangarda/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {place.badge}
                    </div>

                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-avangarda transition-colors">
                      {place.name}
                    </h3>
                    <p className="text-white/90 mb-5 text-base leading-relaxed">
                      {place.description}
                    </p>

                    {/* Features as enhanced list */}
                    <div className="space-y-2 mb-6">
                      {place.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-avangarda shrink-0"></div>
                          <span className="text-sm text-white/80">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      {/* Menu Button - Outline variant */}
                      {place.menus.length > 0 && (
                        <a
                          href={fileUrl(place.menus[0].menuFile)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button className="bg-avangarda hover:bg-avangarda/90 flex items-center gap-2 w-full">
                            <Utensils className="h-4 w-4" />
                            Zobacz Menu
                          </Button>
                        </a>
                      )}

                      {/* Main CTA Button */}
                      <Link
                        href={`/${lang}/${lang === "pl" ? "restauracja" : "restaurants"}${place.link}`}
                        className="block"
                      >
                        <Button
                          variant="fillRight"
                          className="w-full border-none"
                        >
                          Zobacz więcej
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GastroIntro;
