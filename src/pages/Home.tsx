import React from 'react';
import { BannerSlider } from '../components/Banner';
import { Services } from '../components/Services';
import { AboutSection } from '../components/AboutSection';
import { Gallery } from '../components/Gallery';

export const Home = () => {
  return (
    <main>
      <BannerSlider />
      <Services />
      <AboutSection />
      <Gallery />
    </main>
  );
};