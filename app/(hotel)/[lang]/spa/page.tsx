import SpaCTA from "@/components/modules/Spa/SpaCTA";
import SpaHero from "@/components/modules/Spa/SpaHero";
import SpaIntro from "@/components/modules/Spa/SpaIntro";
import SpaPopup from "@/components/spa-popup";

import { getDictionary } from "@/lib/dictionary";
import { getAllSpaOffers } from "@/sanity/lib/offers/getSpaOffer";
import { getActiveSpaPopups } from "@/sanity/lib/popups/getSpaPopup";

export default async function SpaMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  // Fetch spa offers
  const spaOffers = await getAllSpaOffers();
  const activeSpaPopups = await getActiveSpaPopups();

  return (
    <>
      <SpaHero />
      <SpaIntro dict={dict} lang={lang} spaOffers={spaOffers} />
      <SpaCTA dict={dict} lang={lang} />
      <SpaPopup lang={lang} popups={activeSpaPopups} />
      {/* Additional components can be added here */}
    </>
  );
}
