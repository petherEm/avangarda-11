import EntertainmentHero from "@/components/modules/Entertainment/EntertainmentHero";
import EntertainmentIntro from "@/components/modules/Entertainment/EntertainmentIntro";
import ForKidsHero from "@/components/modules/ForKids/ForKidsHero";
import ForKidsIntro from "@/components/modules/ForKids/ForKidsIntro";
import { getDictionary } from "@/lib/dictionary";

export default async function EntertainmentMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Rozrywka i atrakcje" : "Entertainment";

  return (
    <>
      <ForKidsHero />
      <ForKidsIntro dict={dict} lang={lang} />
    </>
  );
}
