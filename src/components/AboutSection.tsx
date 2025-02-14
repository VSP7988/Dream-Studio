import React from 'react';
import { Camera, Award, Users, Heart } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
              About Dream Studio
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Dream Studio was born in 2005 out of a personal necessity. Then it became part of me! It has grown into a decent business over the years serving many and capturing beautiful moments for all the customers. I am a designer with passion. Websites and Apps has become a common nominal work for us over the years. We have delivered number of websites for the clients.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              As a professional team, we cover flower decorations, wedding video coverage, LED background screens, drones, etc. One-stop for your house dedications, parties, promo, and wedding needs. We genuinely love our jobs, and we enjoy working and consulting with our clients. DS combines strategy, creativity, and technical excellence to produce successful work for a wide range of clients.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                <Award className="w-8 h-8 text-purple-600 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">20+ Years</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Experience</p>
              </div>
              
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                <Users className="w-8 h-8 text-green-600 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">1000+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</p>
              </div>
              
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                <Camera className="w-8 h-8 text-purple-600 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">5000+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Photo Sessions</p>
              </div>
              
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                <Heart className="w-8 h-8 text-green-600 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">100%</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80"
                alt="Photography work"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
                alt="Photography work"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80"
                alt="Photography work"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80"
                alt="Photography work"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};