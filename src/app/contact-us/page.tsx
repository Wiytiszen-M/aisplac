import Image from "next/image";
import ContactData from "./components/contact-data";

const About = () => {
  return (
    <section className="w-full overflow-hidden pb-[180px]">
      <div className="relative h-[300px] w-full overflow-hidden sm:h-[450px] md:h-[597px]">
        <Image
          className="absolute left-0 top-0 h-full w-full object-cover md:object-center"
          src="/contact/hero.webp"
          fill
          priority
          alt="aisplac hero contact-us"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>
      <ContactData />
    </section>
  );
};

export default About;
