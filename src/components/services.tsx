import React, { useState, useEffect } from "react";
import Image from "next/image";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: "Sell a Property",
      description:
        "Sell your property at the best price with our comprehensive selling services. From professional marketing to closing coordination, we ensure a smooth and profitable sale.",
      stats: "+ 83 seller",
      buttonText: "Become a Seller",
      bgColorLeft: "bg-Landingpages-card-color",
      bgColorRight: "bg-Landingpages-lighter-bleu",
      arrowIconLeft: "/images/icons/arr-link1.svg",
      arrowIconRight: "/images/icons/arr-link2.svg",
    },
    {
      title: "Buy a Property",
      description:
        "Find your dream property with our expert buying services. We provide personalized assistance to help you navigate the market and make the right purchase.",
      stats: "+ 120 buyers",
      buttonText: "Find a Home",
      bgColorLeft: "bg-Landingpages-card-color",
      bgColorRight: "bg-Landingpages-lighter-bleu",
      arrowIconLeft: "/images/icons/arr-link1.svg",
      arrowIconRight: "/images/icons/arr-link2.svg",
    },
    {
      title: "Rent a Property",
      description:
        "Rent a property with ease using our comprehensive rental services. We help you find the perfect rental home or tenant quickly and efficiently.",
      stats: "+ 65 rentals",
      buttonText: "Find a Rental",
      bgColorLeft: "bg-Landingpages-card-color",
      bgColorRight: "bg-Landingpages-lighter-bleu",
      arrowIconLeft: "/images/icons/arr-link1.svg",
      arrowIconRight: "/images/icons/arr-link2.svg",
    },
    {
      title: "Prop Manage",
      description:
        "Our property management services ensure your property is well-maintained and profitable. We handle everything from tenant placement to maintenance.",
      stats: "+ 50 managed",
      buttonText: "Manage Your Property",
      bgColorLeft: "bg-Landingpages-card-color",
      bgColorRight: "bg-Landingpages-lighter-bleu",
      arrowIconLeft: "/images/icons/arr-link1.svg",
      arrowIconRight: "/images/icons/arr-link2.svg",
    },
  ];

  const handleItemClick = (index) => {
    if (index === activeIndex) {
      return;
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="flex flex-col min860:flex-row gap-10 justify-center items-center md:item-start w-full">
      <ul className="flex flex-col gap-6 justify-start items-center w-[100%] sm:w-[70%] min860:w-[40%]">
        {services.map((service, index) => (
          <li
            key={index}
            className={`flex flex-row px-6 py-5 border rounded-full border-solid border-Landingpages-text-gray justify-between w-full items-center cursor-pointer transition-all duration-300
                            ${
                              activeIndex === index
                                ? "bg-black text-white"
                                : "bg-Landingpages-bg-color text-Landingpages-textPrimary"
                            }`}
            onClick={() => handleItemClick(index)}
          >
            <div className="flex justify-start gap-4 px-1 items-center">
              <h1
                className={`text-paragraph font-bold ${
                  activeIndex === index
                    ? "text-Landingpages-brand-primary"
                    : "text-Landingpages-textPrimary"
                }`}
              >{`0${index + 1}`}</h1>
              <h2 className="text-paragraph font-Urbanist font-medium">
                {service.title}
              </h2>
            </div>
            <Image
              src={
                activeIndex === index
                  ? "/images/icons/Arrow1.svg"
                  : "/images/icons/Arrow2.svg"
              }
              alt="arrow"
              width={200}
              height={200}
              className="w-6"
            />
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center gap-6 items-center w-[100%] min860:w-[60%]">
        <div className="flex flex-col sm:flex-row justify-center w-full h-full sm:h-[18em] gap-6">
          <div
            className={`w-full sm:w-[50%] h-[100%] ${services[activeIndex].bgColorLeft} shadow-custom rounded-3xl flex flex-col justify-between p-6`}
          >
            <div className="font-unbounded text-headline">
              <span className="block">{services[activeIndex].stats}</span>
            </div>
            <div className="flex flex-row justify-between items-center">
              <h2 className="font-Poppins text-small font-medium">
                <span className="block">
                  {services[activeIndex].buttonText}
                </span>
              </h2>
              <a href="#agents">
                <Image
                  src={services[activeIndex].arrowIconLeft}
                  alt="arrow"
                  width={200}
                  height={200}
                  className="w-12"
                />
              </a>
            </div>
          </div>
          <div
            className={`w-full sm:w-[50%] h-full ${services[activeIndex].bgColorRight} shadow-custom rounded-3xl flex flex-col justify-center gap-10 p-6`}
          >
            <div className="font-Poppins text-sm">
              {services[activeIndex].description}
            </div>
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-small font-normal leading-[170%]  font-Poppins">
                <span className="block">Meet </span>
                <span className="block"> our expert</span>
              </h2>
              <a href="#agents">
                <Image
                  src={services[activeIndex].arrowIconRight}
                  alt="arrow"
                  width={200}
                  height={200}
                  className="w-12"
                />
              </a>
            </div>
          </div>
        </div>

        <p className="text-Landingpages-textPrimary font-Poppins font-normal text-small leading-[180%] ">
          {services[activeIndex].description}
        </p>
      </div>
    </section>
  );
};

export default Services;
