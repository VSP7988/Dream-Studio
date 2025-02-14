import React from 'react';
import { Camera, Baby, Users, Building, Heart, Clock, Star, Sparkles, Globe, Smartphone } from 'lucide-react';

const services = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    description: 'Comprehensive wedding photography services to capture your special moments.',
    icon: Users,
    features: [
      'Pre-wedding photoshoot',
      'Full-day wedding coverage',
      'Cinematic video coverage',
      'Same-day photo preview',
      'Premium photo album'
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80'
  },
  {
    id: 'baby',
    title: 'Baby Photography',
    description: 'Specialized photography sessions for newborns and children.',
    icon: Baby,
    features: [
      'Newborn sessions',
      'Monthly milestone photos',
      'First birthday specials',
      'Family portraits',
      'Digital & printed packages'
    ],
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80'
  },
  {
    id: 'commercial',
    title: 'Commercial Photography',
    description: 'Professional photography solutions for businesses and brands.',
    icon: Building,
    features: [
      'Product photography',
      'Corporate events',
      'Real estate photography',
      'Food & restaurant shots',
      'Marketing materials'
    ],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80'
  },
  {
    id: 'portrait',
    title: 'Portrait Photography',
    description: 'Professional portraits that capture personality and essence.',
    icon: Camera,
    features: [
      'Individual portraits',
      'Corporate headshots',
      'Family portraits',
      'On-location shoots',
      'Retouching services'
    ],
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80'
  },
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'Custom website solutions for businesses and individuals.',
    icon: Globe,
    features: [
      'Responsive design',
      'E-commerce solutions',
      'CMS integration',
      'SEO optimization',
      'Performance optimization'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    id: 'app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications.',
    icon: Smartphone,
    features: [
      'iOS & Android apps',
      'Cross-platform development',
      'UI/UX design',
      'App maintenance',
      'Performance optimization'
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80'
  }
];

const features = [
  { icon: Heart, title: 'Passionate Team', description: 'Dedicated professionals who love what they do' },
  { icon: Clock, title: 'Quick Turnaround', description: 'Fast delivery without compromising quality' },
  { icon: Star, title: 'Premium Quality', description: 'High-quality deliverables with perfect execution' },
  { icon: Sparkles, title: 'Creative Approach', description: 'Innovative solutions for modern needs' }
];

export const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-green-600 to-purple-600">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Professional photography and digital solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-shadow">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-green-500 to-purple-500 text-white mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="flex flex-col md:flex-row gap-8 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="md:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-green-500 to-purple-500 text-white mb-4">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-purple-500 mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 px-6 py-3 w-full rounded-lg bg-gradient-to-r from-green-500 to-purple-500 text-white font-medium hover:from-green-600 hover:to-purple-600 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};