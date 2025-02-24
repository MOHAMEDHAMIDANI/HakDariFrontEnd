"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { debounce } from "lodash";
import BlurredText from "@/components/blur-text";
import Services from "@/components/services";
import Scroller from "@/components/testamonial-card";
import FAQPage from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
const handleScroll = debounce(() => {
  setScrollY(window.scrollY);
}, 50);

function Home() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="capitalize box-border bg-[#FCFCFC] leading-[170%] font-Poppins font-[500] ">
      <section
        id="home"
        className="h-[80vh] sm:h-[90vh] relative lg:h-[900px]  md:h-screen min860:h-[800px] bg-[url('/images/home-page-sky.png')] overflow-hidden z-[1] w-full bg-cover flex flex-col justify-start items-center min1100:h-[970px]"
      >
        <Image
          src="/images/hero-img.png"
          alt="hero img"
          width={3000}
          height={3000}
          className="absolute z-[3] w-[100vw]  bottom-[20%] min500:bottom-[10%] scale-125 min500:scale-110 sm:scale-100 min1100:w-[90vw] min1100:bottom-[6%]"
        />
        <h1
          className="absolute z-[2] mb-5 text-[3em] min500:text-[4em] md:text-[5em] text-white font-unbounded font-black bottom-[70%] md:bottom-[75%] min1100:text-[6em]"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          {" "}
          hak-dari
        </h1>
        <div className="absolute  flex-row  justify-between items-start min860:items-center gap-3 lg:gap-6 min860:gap-0 z-[100] w-[100%] bottom-36 lg:bottom-44 p-6 hidden md:flex">
          <div className="flex justify-between items-center text-smaller  flex-row flex-nowrap gap-[1em] px-3 lg:px-8 bg-Landingpages-bg-color py-1 lg:py-2 rounded-full ">
            <Image
              src="/images/icons/company.svg"
              alt="search"
              width={2000}
              height={2000}
              className="w-8 rounded-full bg-Landingpages-brand-secondary p-1 "
            />
            <span className=" font-medium">
              the best real estate agency in Algeria
            </span>
          </div>
          <div className="flex justify-between items-center my-2  flex-row flex-nowrap gap-[1em] px-3 lg:px-8 bg-Landingpages-bg-color py-1 lg:py-2 rounded-[10em] ">
            <Image
              src="/images/icons/arrow-up.svg"
              alt="search"
              width={2000}
              height={2000}
              className="w-8 rounded-full bg-Landingpages-brand-secondary p-0 "
            />
            <span className=" font-medium">+42 experienced agents</span>
          </div>
        </div>
        <div
          className="w-[200vw] min500:w-[140vw] md:w-[110vw] lg:w-screen absolute sm:translate-y-4 z-30"
          style={{ bottom: `-2%` }}
        >
          <Image
            src="/images/scroll.png"
            alt="scroll down"
            width={4000}
            height={4000}
            className="w-full"
          />
        </div>
      </section>

      <section
        id="about"
        className=" flex justify-start align-center flex-col lg:flex-row gap-10 pb-12 px-4 sm:px-10 lg:px-12"
      >
        <div className="max-w-[70em] flex justify-center items-start flex-col flex-nowrap gap-4">
          <div className="flex justify-between items-center flex-row flex-nowrap gap-[.6em] px-4 py-1 rounded-[10em] border border-[#119BFF] border-solid">
            <Image
              src="/images/icons/search.svg"
              alt="search"
              width={2000}
              height={2000}
              className="w-6"
            />
            <span className="smaller">about us</span>
          </div>
          <h2 className=" h1">our story</h2>
          <div>
            <p className="small ">
              {" "}
              Welcome to HAK-DAR, Algeria&apos s premier real estate platform
              dedicated to simplifying the process of buying, renting, and
              selling homes. Our mission is to provide a seamless and
              user-friendly experience, connecting you with your dream property
              effortlessly, HAK-DAR is transforming the real estate landscape in
              Algeria.
            </p>
          </div>
          <div className="flex justify-start items-center font-Urbanist flex-row flex-wrap gap-[1.2em] w-[80%]">
            <h3 className=" text-paragraph font-Urbanist font-semibold text-Landingpages-brand-secondary">
              Values
            </h3>
            <div className="flex justify-between items-center flex-row flex-nowrap gap-[.6em] px-4 py-1 rounded-[10em] border border-[#119BFF] border-solid">
              <Image
                src="/images/icons/shine.svg"
                alt="search"
                width={2000}
                height={2000}
                className="w-6"
              />
              <span className="smaller">Integrity</span>
            </div>
            <div className="flex justify-between items-center flex-row flex-nowrap gap-[.6em] px-4 py-1 rounded-[10em] border border-[#119BFF] border-solid">
              <Image
                src="/images/icons/verified.svg"
                alt="search"
                width={2000}
                height={2000}
                className="w-6"
              />
              <span className="smaller">professionalism</span>
            </div>
            <div className="flex justify-between items-center flex-row flex-nowrap gap-[.6em] px-4 py-1 rounded-[10em] border border-[#119BFF] border-solid">
              <Image
                src="/images/icons/emoji-happy.svg"
                alt="search"
                width={2000}
                height={2000}
                className="w-6"
              />
              <span className="smaller">client satisfaction</span>
            </div>
            <div className="flex justify-between items-center flex-row flex-nowrap gap-[.6em] px-4 py-1 rounded-[10em] border border-[#119BFF] border-solid">
              <Image
                src="/images/icons/work.svg"
                alt="search"
                width={2000}
                height={2000}
                className="w-6"
              />
              <span className="smaller">exceptional service</span>
            </div>
          </div>
        </div>
        <Image
          className=" lg:max-w-[560px] w-[100%] lg:w-[40%] rounded-lg"
          width={3000}
          height={3000}
          src="/images/about.png"
          alt="about img"
        />
      </section>

      <div className="flex max-w-screen align-middle justify-center p-4 py-10 items-center overflow-hidden">
        <BlurredText className="text-center">
          &quot; We simplify real estate in Algeria with an intuitive,
          feature-rich platform &quot;
        </BlurredText>
      </div>

      <section
        id="services"
        className="flex flex-col justify-center items-start gap-6 px-6 lg:px-16 py-10 "
      >
        <div className="flex justify-between items-center flex-row flex-nowrap gap-[.6em] px-4 py-1 rounded-[10em] border border-[#119BFF] border-solid w-fit">
          <Image
            src="/images/icons/work.svg"
            alt="search"
            width={2000}
            height={2000}
            className="w-6"
          />
          <span className="text-smaller">what we do</span>
        </div>
        <h2 className="h1">our services</h2>
        <Services />
      </section>

      <section className=" p-4 py-10 shadow-bottom bg-Landingpages-bg-color flex justify-center items-start md:items-center gap-4 lg:gap-2 flex-col">
        <div className="flex justify-between items-center flex-row flex-nowrap gap-[.6em] px-4 py-1 rounded-[10em] border border-[#119BFF] border-solid w-fit">
          <Image
            src="/images/icons/chat.svg"
            alt="search"
            width={2000}
            height={2000}
            className="w-6"
          />
          <span className="text-smaller">testimonial</span>
        </div>
        <h2 className="h1">Kind Words from Clients</h2>
        <p className="md:w-[70%]  sm:w-[80%] max-w-[800px] text-left md:text-center small pb-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum
          placeat dolorem quasi corporis dolor, sapiente qui adipisci
          voluptatibus labore, natus eos. Eaque, in. Obcaecati quod vel aut
          similique cumque?
        </p>

        <Scroller />
      </section>

      <section className="min-h-screen  flex justify-center items-start sm:items-center flex-col p-6 lg:p-10 gap-2 pb-0 pt-10">
        <h2 className="h1 text-left sm:text-center">q&a</h2>
        <p className="md:w-[70%]  sm:w-[80%] max-w-[800px] text-left sm:text-center small ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cum
          placeat dolorem quasi corporis dolor, sapiente qui adipisci
          voluptatibus labore, natus eos. Eaque, in. Obcaecati quod vel aut
          similique cumque?
        </p>
        <FAQPage />
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center gap-2 w-full px-4 lg:px-16 py-10 " id='contact'>
        <div className="flex flex-col justify-start items-start gap-4 w-[100%] md:w-[40%] px-4 py-2 ">
          <h1 className="h1">Get in Touch with Us!</h1>
          <p className="p">We are waiting for your message</p>
          <div className="flex flex-col justify-start items-center gap-6">
            <div className="flex flex-row justify-center items-center gap-4">
              <Image
                src="/images/icons/bag.svg"
                alt="search"
                width={200}
                height={200}
                className="w-8"
              />
              <div className="flex flex-col gap-1">
                <p className="text-paragraph font-semibold font-Poppins text-Landingpages-textPrimary">
                  phone
                </p>
                <p className="text-small font-Poppins text-Landingpages-text-gray">
                  +213 0578753234444
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <Image
                src="/images/icons/text.svg"
                alt="search"
                width={200}
                height={200}
                className="w-8"
              />
              <div className="flex flex-col gap-1">
                <p className="text-paragraph font-semibold font-Poppins text-Landingpages-textPrimary">
                  email
                </p>
                <p className="text-small font-Poppins text-Landingpages-text-gray">
                  hak-dari@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
}

export default Home;
