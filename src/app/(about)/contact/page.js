import ContactForm from "@/src/components/contact/contact-form";
import LottieAnimation from "@/src/components/contact/lottie-animation";
import siteMetadata from "@/src/utils/site-meta-data";

export const metadata = {
  title: "Contact Me",
  description: `Contact me through this form or email me at ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <section
      className="w-full h-[75vh] border-b-2 border-solid border-dark 
        flex flex-row items-center justify-center text-dark"
    >
      <div className="inline-block w-2/5 h-full border-r-2 border-solid border-dark">
        <LottieAnimation />
      </div>
      <div className="w-3/5 flex flex-col items-start justify-center px-16 pb-8">
        <h2 className="font-bold capitalize text-4xl">Let's Connect!</h2>
        <ContactForm />
      </div>
    </section>
  );
}
