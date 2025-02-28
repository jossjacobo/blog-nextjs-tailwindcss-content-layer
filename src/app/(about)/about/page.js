import AboutCoverSection from "@/src/components/about/about-cover-section";
import Skills from "@/src/components/about/skills";
import Link from "next/link";

export const metadata = {
  title: "About Me",
  description: "Here are some details about myself.",
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-2xl self-start mx-20 text-dark">
        Have a project in mind? Reach out to me 📞 from{" "}
        <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>{" "}
        and let's make it happen.
      </h2>
    </>
  );
}
