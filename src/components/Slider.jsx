import React, { useState, useEffect } from "react";

const Slider = () => {
  const slides = [
    { text: "🚀 Welcome to our website!", header: "THE COOLEST COLLECTION", btn: "Shop Now" },
    { text: "🎉 Big sale this week — up to 50% off!", header: "SUMMER SALE COLLECTION", btn: "Grab Deal" },
    { text: "💡 We build modern web experiences.", header: "INNOVATE WITH US", btn: "Get Started" },
    { text: "📞 Contact us for custom web solutions.", header: "LET’S CONNECT", btn: "Contact Now" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const nextSlide = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // Swipe (Touch)
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="relative w-full bg-[#EBE6E3] overflow-hidden">
      {/* Background Image */}
      <img
        className="object-cover w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh]"
        src="https://preview.colorlib.com/theme/ashion/img/banner/banner-1.jpg.webp"
        alt="banner"
      />

      {/* Sliding Text Section */}
      <div
        className="absolute inset-0 flex justify-center items-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          key={currentIndex}
          className={`text-center px-4 sm:px-8 transition-transform duration-700 ease-in-out ${
            direction === "next"
              ? "animate-slide-left"
              : "animate-slide-right"
          }`}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl text-red-600 mb-2">
            {slides[currentIndex].header}
          </h2>
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-800 leading-snug mb-4">
            {slides[currentIndex].text}
          </p>
          <a
            href="#"
            className="inline-block text-sm sm:text-base font-bold text-gray-900 border-b-2 border-gray-700 hover:text-red-600 hover:border-red-600 transition-colors"
          >
            {slides[currentIndex].btn}
          </a>
        </div>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`text-lg cursor-pointer transition-colors ${
              index === currentIndex ? "text-blue-600" : "text-gray-400"
            }`}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
