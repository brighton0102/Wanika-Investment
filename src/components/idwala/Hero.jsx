import Image from "next/image";
import Link from "next/link";
import jeremy from "@/assets/images/jeremy.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-60">
      <Image
        src={jeremy}
        alt="Exploration Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-40 z-5"></div>
      <div className="relative z-10 items-center px-2 pt-8 md:px-8 lg:px-16 md:max-w-3xl xl:px-52 2xl:px-56 xl:max-w-5xl">
        <p className="pb-5 text-base font-bold text-center text-dark-brown md:text-left">
          YOUR TRUSTED FINANCE PARTNER
        </p>
        <h1 className="pb-5 text-3xl font-bold leading-snug text-center text-white md:text-left">
          Building Wealth With Strength And Resilience.
        </h1>
        <p className="pb-5 text-base text-center text-white md:text-left">
          At Idwala Asset Management, we provide tailored investment solutions and personalized wealth management with the strength and resilience of granite, helping you achieve your financial goals.
        </p>
        <div className="flex flex-col items-center md:items-start">
          <Link href="/companies/idwala-asset-management/about-us" className="px-6 py-3 text-base text-center text-white transition-all duration-300 bg-dark-brown rounded-3xl hover:text-dark-brown hover:bg-white hover:scale-105">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

