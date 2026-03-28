"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TypewriterEffect from "./components/typewriter";

const features = [
  { title: "Real-time notifications", image: "/genZ.png", icon: "🔔" },
  { title: "Secure and private", image: "/secure.png", icon: "🔒" },
  { title: "Offline support", image: "/support.png", icon: "📡" },
  { title: "Cross-device sync", image: "/sync.png", icon: "🔄" },
];

const AppLandingPage: React.FC = () => {
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
      <img
        src="/bg.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#007A5E]/90 via-[#004d3a]/80 to-black/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <section className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center animate-fadeInUp">

          {/* Phone Mockup */}
          <div className="relative w-[75%] sm:w-[60%] max-w-sm mx-auto drop-shadow-2xl animate-float">
            <img
              src="/photo-frame.png"
              alt="Phone Frame"
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
                    <img
                      src={f.image}
                      alt={f.title}
                      className="object-contain h-full w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 mt-1 shadow-xl border border-white/20 text-center md:text-left">
            <TypewriterEffect text="Get Our Mobile App" speed={80} title />
            <TypewriterEffect
              text="Enjoy the best features, right in your pocket."
              speed={40}
            />

            {/* Buttons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a className="bg-black hover:bg-gray-900 transition text-white px-6 py-3 rounded-xl shadow-lg cursor-pointer">
                App Store
              </a>
              <a className="bg-white hover:bg-gray-200 transition text-[#007A5E] px-6 py-3 rounded-xl shadow-lg cursor-pointer">
                Google Play
              </a>
            </div>

            {/* Feature List */}
            <div className="hidden sm:block mt-10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Key Features
              </h2>
              <ul className="space-y-4">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200">
                    <span className="w-8 h-8 flex items-center justify-center bg-[#ffaa1d]/20 rounded-lg">
                      {f.icon}
                    </span>
                    {f.title}
                  </li>
                ))}
              </ul>
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
};

export default AppLandingPage;