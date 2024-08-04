import Image from "next/image";
import Link from "next/link";
import africanWoman from "@/assets/images/african-woman.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-60">
      <Image
        src={africanWoman}
        alt="Exploration Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-30 z-5"></div>
      <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 xl:px-52 2xl:px-72 xl:max-w-5xl 2xl:max-w-6xl md:max-w-3xl">
        <p className="pb-5 text-lg font-bold text-center text-white md:text-base md:text-left">
          YOUR TRUSTED CAPITAL PARTNER
        </p>
        <h1 className="pb-5 text-3xl font-extrabold text-center text-white md:leading-snug md:text-left md:text-5xl">
          Resilient Financial Solutions for Sustainable Growth
        </h1>
        <p className="pb-5 text-lg text-center text-white md:text-base md:text-left">
          At Mopane Capital, we specialize in capital raising and financial consultancy, harnessing the power of expertise and strategic partnerships to drive business success.
        </p>
        <div className="flex flex-col gap-5 md:flex-row md:justify-start">
          <Link
            href="/contact-us"
            className="px-6 py-3 text-lg text-center text-white md:text-base bg-dark-brown rounded-3xl"
          >
            Contact Us
          </Link>

          <Link
            href="/companies/mopane-capital/about-us"
            className="px-6 py-3 text-lg text-center bg-white border md:text-base rounded-3xl text-dark-brown"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;
