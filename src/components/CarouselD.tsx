"use client";
import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import Image from "next/image";
const images = [
  {
    src: "/images/carousel/1.png",
    alt: "House 1",
    label: "Popular",
    labelClass: "text-red-500 bg-[#FFE1E1]",
  },
  {
    src: "/images/carousel/2.png",
    alt: "House 2",
    label: "New Listing",
    labelClass: "text-blue-500 bg-[#D7EEFF]",
  },
  {
    src: "/images/carousel/3.png",
    alt: "House 3",
    label: "Top Location",
    labelClass: "text-purple-500 bg-[#ECE1FF]",
  },
  {
    src: "/images/carousel/4.png",
    alt: "House 4",
    label: "Best Rated",
    labelClass: "text-orange-500 bg-[#FFF4E1]",
  },
  {
    src: "/images/carousel/5.png",
    alt: "House 5",
    label: "Discount Price",
    labelClass: "text-green-500 bg-[#F1FFF1] ",
  },
];

const responsiveOptions = [
  {
    breakpoint: "900px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "768px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "640px",
    numVisible: 2,
    numScroll: 1,
  },
];

const imageTemplate = (image : {src : string , alt : string , label : string , labelClass : string} , index : number) => {
  return (
    <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
      <div className="relative">
        <Image
          src={image.src}
          alt={image.alt}
          width={2000}
          height={2000}
          className="w-44 h-44 lg:w-56 lg:h-56 object-cover shadow-2 rounded-2xl"
        />
        <label
          className={`absolute bottom-2 left-2 px-3 py-1 rounded-full text-smaller ${image.labelClass}`}
        >
          <span className="inline-block align-middle">
            <Image
              src={`/images/icons/${index + 1}.svg`}
              alt="icon"
              width={10}
              height={10}
              className="mx-1 inline-block align-middle"
            />
          </span>
          <span className="inline-block align-middle text-xs">
            {image.label}
          </span>
        </label>
      </div>
    </div>
  );
};

function CarouselD() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-start">
      <h1 className="text-3xl font-bold text-center mt-10">
        Find Your Dream House
      </h1>
      <p className="text-left text-gray-600 mt-2">
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod
        Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim
      </p>
      <div className="mt-10 xl:hidden">
        <Carousel
          value={images}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          itemTemplate={imageTemplate}
          circular
          autoplayInterval={3000}
          className="custom-carousel"
        />
      </div>

      <div className="hidden xl:flex mt-10  justify-evenly items-center">
        {images.map((image, index) => (
          <div key={index}>{imageTemplate(image, index)}</div>
        ))}
      </div>
    </div>
  );
}

export default CarouselD;
