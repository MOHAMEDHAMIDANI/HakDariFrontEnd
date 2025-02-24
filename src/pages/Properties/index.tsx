"use client";
import Property from "@/components/property";

const properties = [
  {
    imageSrc: "/images/about.png",
    houseName: "Property Name",
    price: "$ 100,000,000",
    description: "Modern two-story house ..",
    city: "Algeria",
    bed: "3 Beds",
    bath: "1 Bathroom",
    meters: "5x7 m²",
    isPopular: true,
  },
  {
    imageSrc: "/images/about.png",
    houseName: "Property Name",
    price: "$ 100,000,000",
    description: "Modern two-story house ..",
    city: "Algeria",
    bed: "3 Beds",
    bath: "1 Bathroom",
    meters: "5x7 m²",
    isPopular: true,
  },
  {
    imageSrc: "/images/about.png",
    houseName: "Property Name",
    price: "$ 100,000,000",
    description: "Modern two-story house ..",
    city: "Algeria",
    bed: "3 Beds",
    bath: "1 Bathroom",
    meters: "5x7 m²",
    isPopular: true,
  },
  {
    imageSrc: "/images/about.png",
    houseName: "Property Name",
    price: "$ 100,000,000",
    description: "Modern two-story house ..",
    city: "Algeria",
    bed: "3 Beds",
    bath: "1 Bathroom",
    meters: "5x7 m²",
  },
  {
    imageSrc: "/images/about.png",
    houseName: "Property Name",
    price: "$ 100,000,000",
    description: "Modern two-story house ..",
    city: "Algeria",
    bed: "3 Beds",
    bath: "1 Bathroom",
    meters: "5x7 m²",
  },
  {
    imageSrc: "/images/about.png",
    houseName: "Property Name",
    price: "$ 100,000,000",
    description: "Modern two-story house ..",
    city: "Algeria",
    bed: "3 Beds",
    bath: "1 Bathroom",
    meters: "5x7 m²",
  },
];

function PropertiesPage() {
  return (
    <main>
      <div className="flex pt-20 flex-row justify-center items-center gap-10 p-4 md:px-10 flex-wrap">
        {properties.map((property, index) => (
          <Property key={index} {...property} />
        ))}
      </div>
    </main>
  );
}

export default PropertiesPage;
