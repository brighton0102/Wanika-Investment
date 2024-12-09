import Image from "next/image";
import adeolu from "@/assets/images/adeolu.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-60">
      <Image
        src={adeolu}
        alt="hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#1b4336] opacity-50 z-5"></div>
      <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:max-w-5xl md:max-w-3xl 2xl:max-w-5xl xl:px-52 2xl:px-56">
        <p className="pb-5 text-base font-bold text-center text-white md:text-left md:text-white">
          YOUR TRUSTED FINANCE PARTNER
        </p>
        <h1 className="pb-5 text-3xl font-bold leading-snug text-center text-white md:text-left">
          Exploration And Discovery In African Financial Solutions
        </h1>
        <p className="pb-5 text-base text-center text-white md:text-left">
          Wanika Group is committed to innovation, agility, and value creation for underserved stakeholders. Our values are built on trust, transparency, and professionalism.
        </p>
        <div className="flex flex-col gap-5 md:flex-row md:justify-start">
          <Link
            href="/contact-us"
            className="px-6 py-3 text-base text-center text-white transition-all duration-300 bg-custorm-green rounded-3xl hover:text-custorm-green hover:bg-white hover:scale-105"
          >
            Contact Us
          </Link>

          <Link
            href="/about-us"
            className="px-6 py-3 text-base text-center transition-all duration-300 bg-white rounded-3xl text-custorm-green hover:bg-custorm-green hover:text-white hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
