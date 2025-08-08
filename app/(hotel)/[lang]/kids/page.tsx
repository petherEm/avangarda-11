import ForKidsHero from "@/components/modules/ForKids/ForKidsHero";
import ForKidsIntro from "@/components/modules/ForKids/ForKidsIntro";
import { getDictionary } from "@/lib/dictionary";

export default async function KidsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  return (
    <>
      <ForKidsHero />
      <ForKidsIntro dict={dict} lang={lang} />
    </>
  );
}
