"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-28 md:py-20 lg:py-48 whitespace-pre-line">
      <div className=" mx-8 max-w-full sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-full">
        <SectionTitle
          title="Our Mission"
          paragraph={`NTRPX™ is committed to engineering biological energy and cognition systems from first principles.

          We develop system-level solutions that support energy, focus, motivation, and recovery — because optimal human performance requires biology and mission to be aligned.
          
          We prioritize clinical evidence, clean ingredients, verifiable quality, and real-world efficacy to help our customers achieve their goals through consistent performance, motivation, and mental clarity.
          
          Our mission is to provide biological-support systems that help you achieve your mission.`}

          center
          mb="80px"
        />

        {/* <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[820px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[177/100] items-center justify-center">
                <Image src="/images/video/rfk-pouches.png" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="CtTJF7uunEM"
        onClose={() => setOpen(false)}
      /> */}

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
