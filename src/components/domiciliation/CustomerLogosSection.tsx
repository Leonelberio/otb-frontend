"use client";

import { useEffect, useRef } from "react";

const logos = [
  "/maeimmo.png",
  "/possibleafrica.png",
  "/maeimmo.png",
  "/possibleafrica.png",
  "/maeimmo.png",
  "/possibleafrica.png",
  "/maeimmo.png",
  "/possibleafrica.png",
];

export default function CustomerLogosSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    let animationFrame: number;
    let scrollAmount = 0;

    function animate() {
      if (!slider) return; // Add null check inside animate function
      scrollAmount += 1;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(animate);
    }
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sliderRef}
          className="overflow-x-hidden whitespace-nowrap flex items-center relative group"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          {allLogos.map((logo, idx) => (
            <div
              key={idx}
              className="inline-block mx-4 flex items-center justify-center"
              style={{ minWidth: "calc(20% - 2rem)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo}
                alt={`Client logo ${idx + 1}`}
                className="w-32 h-auto object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
