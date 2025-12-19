import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="mx-6 py-24 md:py-20 lg:py-44">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-2/3 whitespace-pre-line">
              <SectionTitle
                title="About NTRPX"
                paragraph={`NTRPX™ was founded on the principle that your personal mission must be aligned with your biology. Sustained progress depends on biological systems working in concert. Reliable energy activation, neural signaling, and the generation of motivation and focus all rely on the right balance of metabolic substrates, neurotransmitter precursors, and targeted biological activators.

                Equally critical is the integrity of the body’s biological cycles. Meaningful progress depends on repeatable cycles of activation, exertion, recovery, and renewal. The circadian system must be supported and stabilized to maintain momentum over time. When these cycles fall out of sync, performance becomes inconsistent; when they align, trajectory becomes predictable and sustainable.

               Our approach is to develop synergistic formulations that reinforce the full performance cycle: stable morning activation, sustained clarity and stamina throughout the day, and deep, restorative sleep to close the loop. This is how biological systems are engineered to support mission execution—day after day, cycle after cycle.
                `}
  mb="50px"
              />

              <div
                className="mb-12 max-w-[900px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Premium-quality manufacturing" />
                    <List text="Clinically-supported ingredients" />
                    <List text="Synergistic system formulation" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="First-principles science" />
                    <List text="Proven real-world performance" />
                    <List text="Independent third-party verification" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-2 lg:w-1/3">
              <div className="relative mx-auto aspect-[25/25] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/logo/ntrpx-logo-blk-trans.png"
                  alt="NTRPX"
                  // width={300}
                  // height={300}
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/logo/ntrpx-logo.png"
                  alt="NTRPX"
                  // width={300}
                  // height={300}
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
