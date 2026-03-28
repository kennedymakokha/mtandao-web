"use client";

import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

/**
 * 👉 PUT THESE FILES IN /public:
 * /public/demo.mp4
 * /public/screens/sale.png
 * /public/screens/payment.png
 * /public/screens/inventory.png
 * /public/screens/report.png
 * /public/phone-frame.png   (optional but recommended)
 */

const slides = [
  {
    type: "video",
    src: "/screens/dmo.mp4",
    title: "Live POS Demo",
  },
  {
    type: "image",
    src: "/screens/sale.png",
    title: "Make a Sale",
    icon: "💳",
  },
  {
    type: "image",
    src: "/screens/payment.png",
    title: "Accept Payments",
    icon: "💰",
  },
  {
    type: "image",
    src: "/screens/inventory.png",
    title: "Manage Inventory",
    icon: "📦",
  },
  {
    type: "image",
    src: "/screens/report.png",
    title: "View Reports",
    icon: "📊",
  },
];

export default function POSLandingPage() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    slides: { perView: 1 },

    created(slider) {
      let timeout: any;

      const next = () => {
        timeout = setTimeout(() => {
          slider.next();
        }, 3500);
      };

      slider.on("created", next);
      slider.on("animationEnded", next);
      slider.on("updated", next);
    },
  });

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
        alt="POS background"
        fill
        className="object-cover"
        unoptimized
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#007A5E]/90 via-[#004d3a]/80 to-black/90 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <section className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

          {/* PHONE MOCKUP */}
          <div className="relative w-[75%] sm:w-[60%] max-w-sm mx-auto drop-shadow-2xl">
            
            {/* Optional frame */}
            <Image
              src="/screens/photo-frame.png"
              alt="Phone Frame"
              width={400}
              height={800}
              className="relative z-10"
            />

            {/* Screen */}
            <div className="absolute top-[13%] left-[16.5%] w-[66.5%] h-[75.5%] overflow-hidden rounded-lg">
              
              <div
                ref={sliderRef}
                className="keen-slider h-full w-full rounded-lg overflow-hidden"
              >
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className="keen-slider__slide relative w-full h-full"
                  >
                    {/* VIDEO */}
                    {slide.type === "video" ? (
                      <video
                        src={slide.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        {/* IMAGE */}
                        <Image
                          src={slide.src}
                          alt={slide.title}
                          fill
                          className="object-cover scale-105 animate-zoom"
                        />

                        {/* Overlay Label */}
                        <div className="absolute bottom-3 left-3 right-3 bg-black/60 text-white text-xs rounded-lg px-3 py-2 backdrop-blur-md">
                          <span className="mr-2">{slide.icon}</span>
                          {slide.title}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/20 text-center md:text-left">
            
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Smart POS for Modern Businesses
            </h1>

            <p className="mt-4 text-gray-200">
              Sell faster, track inventory, and accept payments with ease — all in one powerful system.
            </p>

            <div className="mt-4 text-sm text-gray-300">
              MPESA • Offline Mode • Real-time Reports
            </div>

            {/* CTA */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <button className="bg-[#007A5E] hover:bg-[#00614a] text-white px-6 py-3 rounded-xl shadow-lg">
                Start Free Trial
              </button>
              <button className="bg-white hover:bg-gray-200 text-[#007A5E] px-6 py-3 rounded-xl shadow-lg">
                Book Demo
              </button>
            </div>

            {/* TRUST */}
            <div className="mt-6 text-sm text-gray-300">
              Trusted by 500+ businesses in Kenya 🇰🇪
            </div>
          </div>
        </section>
      </div>

      {/* BUSINESS TYPES */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { title: "Retail Shops", desc: "Track sales and stock in real-time" },
            { title: "Restaurants", desc: "Manage orders and payments" },
            { title: "Wholesale", desc: "Handle bulk sales and invoices" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-md"
            >
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="absolute bottom-4 w-full text-center text-sm text-gray-300 z-10">
        &copy; {new Date().getFullYear()} mtandao.app — All rights reserved.
      </footer>

      {/* GLOBAL ANIMATION */}
      <style jsx global>{`
        @keyframes zoom {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1.05); }
        }
        .animate-zoom {
          animation: zoom 8s linear infinite;
        }
      `}</style>
    </div>
  );
}