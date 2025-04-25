"use client"
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TypewriterEffect from "./components/typewriter";


const features = [
  {
    title: "Real-time notifications",
    image: "/genZ.png",
  },
  {
    title: "Secure and private",
    image: "/secure.png",
  },
  {
    title: "Offline support",
    image: "/support.png",
  },
  {
    title: "Cross-device sync",
    image: "/sync.png",
  },
];

const AppLandingPage: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
    detailsChanged(slider) {
      slider.container.style.transition = "transform 1s ease";
    },
    drag: false,
    created(slider) {
      setInterval(() => slider.next(), 3000);
    },
  });

  return (
    <div className="bg-gray-400 h-[100vh] overflow-hidden max-h-[100vh]  w-screen relative z-0">
      <img src="/bg.jpg" alt="Phone Frame" className="  " />
      <div className="absolute bg-[#007A5E] opacity-90 inset-0 flex justify-center items-center z-10"></div>

      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className=" w-full overflow-hidden text-gray-800">
          <section className="max-w-5xl py-2 mx-auto px-4 grid md:grid-cols-2 gap-12 items-center justify-center">
            {/* Phone Mockup with Slide */}
            <div className="relative sm:w-[60%] w-[70%]  max-w-sm mx-auto">
              <img src="/photo-frame.png" alt="Phone Frame" className="z-10 top-2 h-1/2 relative" />
              <div className="absolute top-[13%] left-[16.5%] w-[66.5%] h-[75.5%] z-20  overflow-hidden">
                <div ref={sliderRef} className="keen-slider h-full">
                  {features.map((f, i) => (
                    <div className="keen-slider__slide flex flex-col items-center justify-center bg-white" key={i}>
                      <h2 className="font-bold text-xl text-[#ffaa1d]">{f.title}</h2>
                      <img src={f.image} alt={f.title} className="object-contain h-full w-full" />
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Feature List */}
            <div >
              <h2 className=" hidden sm:flex  text-2xl font-semibold text-slate-100 mb-6">Key Features</h2>
              <ul className=" hidden sm:flex flex-col space-y-4 text-gray-700">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-[#ffaa1d] rounded-full"></div>
                    <span className="text-slate-200">{f.title}</span>
                  </li>
                ))}
              </ul>
              <header className="text-center  sm:py-16 px-4">
                {TypewriterEffect({ text: "Get Our Mobile App", speed: 200, title: true })}

                {/* <p className="text-slate-100 mb-6"> */}
                  {TypewriterEffect({ text: "Enjoy the best features, right in your pocket.", speed: 100 })}
                {/* </p> */}
                <div className="flex justify-center gap-4">
                  <a href="#" className="bg-black text-white px-5 py-3 rounded-xl">App Store</a>
                  <a href="#" className="bg-white text-[#007A5E] px-5 py-3 rounded-xl">Google Play</a>
                </div>
              </header>
            </div>

          </section>

          <footer className="text-center py-6 text-sm text-[#ffaa1d]">
            &copy; {new Date().getFullYear()} mtandao.app . All rights reserved.
          </footer>
        </div>
      </div>
    </div>

  );
};

export default AppLandingPage;
