"use client";
import Image from "next/image";
import { AnimatedDecorativeBar } from "../animated-decorative-bar";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "../container";
import { Button } from "../ui/button";
import BackgroundLogoBottomDark from "../background-logo-bottom-dark";
import Link from "next/link";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

interface WeddingsProps {
  lang?: string;
  dict?: any;
}

const Weddings = ({ lang = "pl", dict }: WeddingsProps) => {
  const weddingsUrl = lang === "en" ? "/en/events" : "/pl/przyjecia";
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animations with no bouncing
  const springConfig = { stiffness: 400, damping: 40, restDelta: 0.001 };

  // Moderate parallax - images move within their frames but don't exceed boundaries
  const leftImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]),
    springConfig
  );
  const rightTopImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]),
    springConfig
  );
  const rightBottomImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]),
    springConfig
  );

  return (
    <Container
      className="relative w-full py-18 md:py-28 md:mb-10"
      ref={sectionRef}
    >
      {/* Background Image */}
      <BackgroundLogoBottomDark />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Content Section */}
        <motion.div
          className="mb-8 md:mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
        >
          <AnimatedDecorativeBar />
          <motion.h1
            variants={fadeInUp}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="title-dark max-w-2xl"
          >
            Małe i wielkie uroczystości rodzinne
          </motion.h1>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8">
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="main-paragraph-dark max-w-2xl"
            >
              Zorganizuj z nami niezapomnianą rodzinną uroczystość – zarówno tę
              dużą i wyjątkową, wymagającą szczególnej oprawy, jak i kameralne
              spotkanie pełne ciepła. Hotel Avangarda, oprócz doskonałej
              gastronomii, oferuje kompleksową obsługę przyjęć, oddając do
              dyspozycji Gości komfortowy hotel z basenem, kręgielnię, salę
              zabaw dla dzieci oraz parking. Pod czujnym okiem koordynatora, z
              pomocą doświadczonych kucharzy i profesjonalnej obsługi
              kelnerskiej, dbamy o każdy detal, tworząc razem wyjątkowe rodzinne
              wspomnienia.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link href={weddingsUrl}>
                <Button size="lg" variant="fillRight" className="border-none">
                  Dowiedz się więcej
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Redesigned Images Grid with Parallax - One large image on left, two horizontal on right */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Left side - large image with parallax */}
          <div className="col-span-1 md:col-span-6 relative w-full h-[250px] md:h-[350px] overflow-hidden">
            <motion.div
              className="relative w-full"
              style={{
                y: leftImageY,
                height: "130%", // Larger than container to accommodate movement
                top: "-15%", // Center the oversized image
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/wedding/wed-room-04.jpg"
                alt="Słodki stół weselny"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* Right side - two horizontal images stacked with parallax */}
          <div className="col-span-1 md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Top right image */}
            <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden">
              <motion.div
                className="relative w-full"
                style={{
                  y: rightTopImageY,
                  height: "120%", // Slightly larger for subtle movement
                  top: "-10%", // Center the oversized image
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                  src="/wedding/table-02.jpg"
                  alt="Nakrycie stołu weselnego"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </motion.div>
            </div>

            {/* Bottom right image */}
            <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden">
              <motion.div
                className="relative w-full"
                style={{
                  y: rightBottomImageY,
                  height: "120%", // Slightly larger for subtle movement
                  top: "-10%", // Center the oversized image
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image
                  src="/wedding/wed-room-06.jpg"
                  alt="Żyrandol i dekoracje"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Weddings;
