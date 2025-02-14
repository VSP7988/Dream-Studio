import React from 'react';
import { Camera, Baby, Globe, Smartphone, Users, Building } from 'lucide-react';
import { Service } from '../types';
import { useNavigate } from 'react-router-dom';

const services: Service[] = [
  {
    id: 1,
    title: "Wedding Photography",
    description: "Comprehensive wedding photography services with cinematic video coverage and same-day previews.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Baby Photography",
    description: "Specialized newborn and children photography with milestone documentation packages.",
    icon: "Baby",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Commercial Photography",
    description: "Professional photography solutions for businesses, products, and real estate.",
    icon: "Building",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Portrait Photography",
    description: "Professional portraits and headshots with expert retouching services.",
    icon: "Camera",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Website Development",
    description: "Custom responsive websites with modern design and optimal performance.",
    icon: "Globe",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: "Smartphone",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
  }
];

const IconComponent = ({ name }: { name: string }) => {
  switch (name) {
    case 'Users':
      return <Users className="w-6 h-6" />;
    case 'Baby':
      return <Baby className="w-6 h-6" />;
    case 'Building':
      return <Building className="w-6 h-6" />;
    case 'Camera':
      return <Camera className="w-6 h-6" />;
    case 'Globe':
      return <Globe className="w-6 h-6" />;
    case 'Smartphone':
      return <Smartphone className="w-6 h-6" />;
    default:
      return null;
  }
};

export const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col h-full relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-slide-up"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="flex flex-col flex-grow p-6 relative">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-gradient-to-r from-green-500 to-purple-500 text-white transform group-hover:scale-110 transition-transform duration-500 shadow-md">
                    <IconComponent name={service.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 pt-1.5">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 transform group-hover:translate-y-[-3px] transition-transform duration-500 flex-grow">
                  {service.description}
                </p>
                
                <button 
                  onClick={() => navigate('/services')}
                  className="w-full px-6 py-2.5 rounded-lg bg-gradient-to-r from-green-500 to-purple-500 text-white font-medium relative overflow-hidden transition-all duration-500 hover:from-green-600 hover:to-purple-600 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
                >
                  <span className="relative z-10 inline-flex items-center justify-center">
                    View More
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </button>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10 rotate-45 bg-gradient-to-r from-green-500/10 to-purple-500/10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};