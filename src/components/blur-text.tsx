import { useEffect, useRef, useState } from "react";

function BlurredText({ children }: { children: React.ReactNode }) {
  const [isInView, setIsInView] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (textElement) {
      observer.observe(textElement);
    }

    return () => {
      if (observer && textElement) {
        observer.unobserve(textElement);
      }
    };
  }, []);

  return (
    <p
      ref={textRef}
      className={`transition duration-[1.5s] delay-[1s] text-paragraph font-Urbanist ease-in ${
        isInView ? "filter-none" : "filter blur-sm"
      }`}
    >
      {children}
    </p>
  );
}

export default BlurredText;
