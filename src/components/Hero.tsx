import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["800", "700", "600", "500", "400", "300", "200", "100"],
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div
      className={`w-full relative flex justify-center items-center ${poppins.className}`}
    >
      <div className="relative h-full w-[90%] bg-red-700 lg:h-100 md:h-96 rounded-3xl overflow-hidden ">
        <video
          src="video/herosection.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>

        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-start lg:px-12 px-8 lg:py-12 py-6 w-[100%]">
          <div className="bg-hero-tagbg text-hero-tagtext xl:text-2xl lg:text-xl lg:w-[55%] md:w-[60%] md:text-base sm:text-sm w-[65%] 2xl:text-3xl px-4 py-2 border-white border-2 rounded-full mb-4 xl:w-[40%] text-center flex justify-center items-center font-medium">
            <span>
              {}
              <Image
                src={"images/pin-drop.svg"}
                alt="Pin Drop"
                width={34}
                height={34}
                className="inline"
              />
              We Have 42 Offices Around Algeria
            </span>
          </div>
          <p className="text-white text-lg md:text-base sm:text-sm lg:text-xl xl:text-2xl">
            We Can Help You To Find You
          </p>
          <p className="text-white text-lg md:text-base sm:text-sm lg:text-xl xl:text-2xl">
            Dream Property
          </p>
        </div>
      </div>

      <div className="absolute -bottom-14 flex justify-center items-center lg:left-44 md:left-40 xl:left-48 sm:left-32 z-10 p-1 bg-white rounded-[50%] w-auto h-auto">
        {/* Already has an alt attribute */}
        <Link href={"/"}>
          <Image src="/images/Btn.png" alt="Button" width={116} height={116} />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
