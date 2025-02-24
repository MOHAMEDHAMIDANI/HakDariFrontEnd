import { useEffect } from "react";
import Card from "./card";

const Scroller = ({ speed = "fast", direction = "down" }) => {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="w-full flex justify-center gap-2 lg:gap-4 items-center flex-row  shadow-innertop ">
      <div
        className={`scroller h-[80vh] max-w-fit px-2 overflow-hidden `}
        data-speed={speed}
        data-direction={direction}
      >
        <ul className="scroller__inner flex flex-col gap-6 py-4">
          <li>
            <Card
              imageSrc="/images/user1.png"
              userName="User One"
              userRole="Designer"
              testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              extraInfo="Additional info here"
            />
          </li>
          <li>
            <Card
              imageSrc="/images/user2.png"
              userName="User Two"
              userRole="Developer"
              testimonial="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              extraInfo="Extra details here"
            />
          </li>
          <li>
            <Card
              imageSrc="/images/user3.png"
              userName="User Three"
              userRole="Project Manager"
              testimonial="Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              extraInfo="More info here"
            />
          </li>
          <li className="block sm:hidden">
            <Card
              imageSrc="/images/user4.png"
              userName="User One"
              userRole="Designer"
              testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              extraInfo="Additional info here"
            />
          </li>
          <li className="block sm:hidden">
            <Card
              imageSrc="/images/user5.png"
              userName="User One"
              userRole="Designer"
              testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              extraInfo="Additional info here"
            />
          </li>
          <li className="block sm:hidden">
            <Card
              imageSrc="/images/user6.png"
              userName="User One"
              userRole="Designer"
              testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              extraInfo="Additional info here"
            />
          </li>
        </ul>

        <style jsx>{`
          .scroller[data-animated="true"] .scroller__inner {
            width: max-content;
            flex-wrap: nowrap;
            animation: scroll var(--_animation-duration, 40s)
              var(--_animation-direction, forwards) linear infinite;
          }
          .scroller[data-direction="up"] {
            --_animation-direction: reverse;
          }
          .scroller[data-direction="down"] {
            --_animation-direction: forwards;
          }
          .scroller[data-speed="fast"] {
            --_animation-duration: 40s;
          }
          .scroller[data-speed="slow"] {
            --_animation-duration: 60s;
          }
          @keyframes scroll {
            to {
              transform: translateY(calc(-50% - 0.5rem));
            }
          }
        `}</style>
      </div>
      <div
        className={`scroller h-[80vh] max-w-fit px-2 overflow-hidden hidden sm:block`}
        data-speed={speed}
        data-direction="up"
      >
        <ul className="scroller__inner flex flex-col gap-6 py-4">
          <li>
            <Card
              imageSrc="/images/user4.png"
              userName="User One"
              userRole="Designer"
              testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              extraInfo="Additional info here"
            />
          </li>
          <li>
            <Card
              imageSrc="/images/user5.png"
              userName="User Two"
              userRole="Developer"
              testimonial="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              extraInfo="Extra details here"
            />
          </li>
          <li>
            <Card
              imageSrc="/images/user6.png"
              userName="User Three"
              userRole="Project Manager"
              testimonial="Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              extraInfo="More info here"
            />
          </li>
        </ul>

        <style jsx>{`
          .scroller[data-animated="true"] .scroller__inner {
            width: max-content;
            flex-wrap: nowrap;
            animation: scroll var(--_animation-duration, 40s)
              var(--_animation-direction, forwards) linear infinite;
          }
          .scroller[data-direction="up"] {
            --_animation-direction: reverse;
          }
          .scroller[data-direction="down"] {
            --_animation-direction: forwards;
          }
          .scroller[data-speed="fast"] {
            --_animation-duration: 40s;
          }
          .scroller[data-speed="slow"] {
            --_animation-duration: 60s;
          }
          @keyframes scroll {
            to {
              transform: translateY(calc(-50% - 0.5rem));
            }
          }
        `}</style>
      </div>
      <div
        className={`scroller h-[80vh] max-w-fit px-2 overflow-hidden hidden lg:block`}
        data-speed={speed}
        data-direction={direction}
      >
        <ul className="scroller__inner flex flex-col gap-6 py-4">
          <li>
            <Card
              imageSrc="/images/user7.png"
              userName="User One"
              userRole="Designer"
              testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              extraInfo="Additional info here"
            />
          </li>
          <li>
            <Card
              imageSrc="/images/user8.png"
              userName="User Two"
              userRole="Developer"
              testimonial="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              extraInfo="Extra details here"
            />
          </li>
          <li>
            <Card
              imageSrc="/images/user9.png"
              userName="User Three"
              userRole="Project Manager"
              testimonial="Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              extraInfo="More info here"
            />
          </li>
        </ul>

        <style jsx>{`
          .scroller[data-animated="true"] .scroller__inner {
            width: max-content;
            flex-wrap: nowrap;
            animation: scroll var(--_animation-duration, 40s)
              var(--_animation-direction, forwards) linear infinite;
          }
          .scroller[data-direction="up"] {
            --_animation-direction: reverse;
          }
          .scroller[data-direction="down"] {
            --_animation-direction: forwards;
          }
          .scroller[data-speed="fast"] {
            --_animation-duration: 40s;
          }
          .scroller[data-speed="slow"] {
            --_animation-duration: 60s;
          }
          @keyframes scroll {
            to {
              transform: translateY(calc(-50% - 0.5rem));
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Scroller;
