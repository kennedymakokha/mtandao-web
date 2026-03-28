"use client";

import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TypewriterEffect from "./components/typewriter";

const features = [
  { title: "Real-time notifications", image: "/genZ.png", icon: "🔔" },
  { title: "Secure and private", image: "/secure.png", icon: "🔒" },
  { title: "Offline support", image: "/support.png", icon: "📡" },
  { title: "Cross-device sync", image: "/sync.png", icon: "🔄" },
];

export default function AppLandingPage() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    drag: false,
    created(slider) {
      setInterval(() => slider.next(), 3000);
    },
  });

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      
      {/* Background */}
      <Image
        src="/bg.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#007A5E]/90 via-[#004d3a]/80 to-black/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <section className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

          {/* Phone Mockup */}
          <div className="relative w-[75%] sm:w-[60%] max-w-sm mx-auto drop-shadow-2xl">
            <Image
              src="/photo-frame.png"
              alt="Phone Frame"
              width={400}
              height={800}
              className="relative z-10"
            />

            <div className="absolute top-[13%] left-[16.5%] w-[66.5%] h-[75.5%] overflow-hidden rounded-lg">
              <div ref={sliderRef} className="keen-slider h-full">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="keen-slider__slide flex flex-col items-center justify-center bg-white"
                  >
                    <div className="text-3xl mb-2">{f.icon}</div>
                    <h2 className="font-bold text-lg text-[#ffaa1d] text-center px-2">
                      {f.title}
                    </h2>
                    <Image
                      src={f.image}
                      alt={f.title}
                      width={300}
                      height={500}
                      className="object-contain h-full w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/20 text-center md:text-left">
            <TypewriterEffect text="Get Our Mobile App" speed={80} title />
            <TypewriterEffect
              text="Enjoy the best features, right in your pocket."
              speed={40}
            />

            {/* Buttons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl shadow-lg cursor-pointer">
                App Store
              </a>
              <a className="bg-white hover:bg-gray-200 text-[#007A5E] px-6 py-3 rounded-xl shadow-lg cursor-pointer">
                Google Play
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-sm text-gray-300 z-10">
        &copy; {new Date().getFullYear()} mtandao.app . All rights reserved.
      </footer>
    </div>
  );
}