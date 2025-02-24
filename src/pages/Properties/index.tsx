"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Property from "@/components/property";

function PropertiesPage() {
  return (
    <main>
      <div className="flex pt-20 flex-row justify-center items-center gap-10 p-4 md:px-10 flex-wrap ">
        <Property
          imageSrc="/images/about.png"
          houseName="property name"
          price="$ 100,000,000"
          description="modern two-story house .."
          city="algeria"
          bed="3 Beds"
          bath="1 Bathrooms"
          meters="5x7 m²"
          isPopular="true"
        />
        <Property
          imageSrc="/images/about.png"
          houseName="property name"
          price="$ 100,000,000"
          description="modern two-story house .."
          city="algeria"
          bed="3 Beds"
          bath="1 Bathrooms"
          meters="5x7 m²"
          isPopular="true"
        />
        <Property
          imageSrc="/images/about.png"
          houseName="property name"
          price="$ 100,000,000"
          description="modern two-story house .."
          city="algeria"
          bed="3 Beds"
          bath="1 Bathrooms"
          meters="5x7 m²"
          isPopular="true"
        />

        <Property
          imageSrc="/images/about.png"
          houseName="property name"
          price="$ 100,000,000"
          description="modern two-story house .."
          city="algeria"
          bed="3 Beds"
          bath="1 Bathrooms"
          meters="5x7 m²"
        />
        <Property
          imageSrc="/images/about.png"
          houseName="property name"
          price="$ 100,000,000"
          description="modern two-story house .."
          city="algeria"
          bed="3 Beds"
          bath="1 Bathrooms"
          meters="5x7 m²"
        />
        <Property
          imageSrc="/images/about.png"
          houseName="property name"
          price="$ 100,000,000"
          description="modern two-story house .."
          city="algeria"
          bed="3 Beds"
          bath="1 Bathrooms"
          meters="5x7 m²"
        />

        <Property
          imageSrc="/images/about.png"
          houseName="property name"
          price="$ 100,000,000"
          description="modern two-story house .."
          city="algeria"
          bed="3 Beds"
          bath="1 Bathrooms"
          meters="5x7 m²"
        />
        <Property
          imageSrc="/images/about.png"
          houseName="property name"
          price="$ 100,000,000"
          description="modern two-story house .."
          city="algeria"
          bed="3 Beds"
          bath="1 Bathrooms"
          meters="5x7 m²"
        />
        <Property
          imageSrc="/images/about.png"
          houseName="property name"
          price="$ 100,000,000"
          description="modern two-story house .."
          city="algeria"
          bed="3 Beds"
          bath="1 Bathrooms"
          meters="5x7 m²"
        />
      </div>
    </main>
  );
}

export default PropertiesPage;
