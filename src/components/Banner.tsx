import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Banner } from '../types';

const banners: Banner[] = [
  {
    id: 1,
    title: "Capture Your Perfect Moments",
    subtitle: "Professional Photography Services",
    image: "https://lctech.in/dreamstudio/banner1.jpg"
  },
  {
    id: 2,
    title: "Wedding Photography",
    subtitle: "Your Special Day, Perfectly Captured",
    image: "https://lctech.in/dreamstudio/banner2.jpg"
  },
  {
    id: 3,
    title: "Baby Photography",
    subtitle: "Precious Moments, Timeless Memories",
    image: "https://lctech.in/dreamstudio/banner3.jpg"
  },
  {
    id: 4,
    title: "Professional Portraits",
    subtitle: "Stand Out with Perfect Shots",
    image: "https://lctech.in/dreamstudio/banner4.jpg"
  }
];

export const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-center text-center pb-20">
            <div className="max-w-4xl px-4">
              <h1 className="text-5xl font-bold text-white mb-4 transform transition-all duration-1000 translate-y-0 opacity-100">
                {banner.title}
              </h1>
              <p className="text-xl text-gray-200 transform transition-all duration-1000 translate-y-0 opacity-100">
                {banner.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};