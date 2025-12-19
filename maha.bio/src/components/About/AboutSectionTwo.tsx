import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-6 mb-12 aspect-[32/23] max-w-[600px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/capsules.png"
                alt="Capsules"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/capsules.png"
                alt="Capsules"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[570px]">
              <div className="mx-6 mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                First-Principles Biologics
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                NTRPX™ develops energy and cognitive support systems grounded in first-principles science, not nutrition fads. Our energy formulations incorporate ParaCaffeine™ for cleaner, smoother stimulation. Combined with synergistic neural and metabolic precursors, it supports stable energy, enhanced focus, and reliable motivation while minimizing the drawbacks associated with caffeine.
                </p>
              </div>
              <div className="mx-6 mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Mission-Optimized Systems
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our systems approach reinforces stable circadian function to support sustained performance: predictable activation, steady energy and focus, and resilient biological rhythms. NTRPX™ products are designed to support the entire performance cycle — from activation to recovery — so individuals can maintain mission-focused clarity and consistency to compound daily wins.
                </p>
              </div>
              <div className="mx-6 mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                NSF-Verified Quality
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our products are manufactured in NSF-audited facilities with GFSI-recognized certification for Good Manufacturing Practices (GMP), ISO/FCS 22000, and the highest quality standards in dietary supplement industry. Every batch undergoes third-party NSF testing for identity, purity, potency, heavy metals, microbes and contaminants to ensure they exceed regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
