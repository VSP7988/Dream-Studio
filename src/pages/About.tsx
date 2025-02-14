import React from 'react';
import { Camera, Users, Award, Heart } from 'lucide-react';

const stats = [
  { icon: Camera, label: 'Projects Completed', value: '1000+' },
  { icon: Users, label: 'Happy Clients', value: '500+' },
  { icon: Award, label: 'Awards Won', value: '25+' },
  { icon: Heart, label: 'Positive Reviews', value: '950+' },
];

const team = [
  {
    name: 'John Doe',
    role: 'Lead Photographer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: 'Professional photographer with 10+ years of experience specializing in wedding and portrait photography.'
  },
  {
    name: 'Jane Smith',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    bio: 'Award-winning creative director with a passion for capturing life\'s beautiful moments.'
  },
  {
    name: 'Mike Johnson',
    role: 'Senior Photographer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    bio: 'Specialized in commercial and product photography with an eye for detail.'
  },
  {
    name: 'Sarah Wilson',
    role: 'Photo Editor',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    bio: 'Expert in post-processing and photo enhancement with modern techniques.'
  }
];

export const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-green-600 to-purple-600">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-6">About Dream Studio</h1>
          <p className="text-xl max-w-2xl">
            We are a team of passionate photographers dedicated to capturing your precious moments
            with creativity and professionalism.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-green-500 to-purple-500 text-white mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</div>
                <div className="text-gray-600 dark:text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Founded in 2010, Dream Studio has grown from a small photography studio to a full-service 
              creative agency. Our journey has been marked by a commitment to excellence and a passion 
              for capturing life's most precious moments.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We believe that every moment tells a story, and we're here to help you tell yours through 
              our lens. Our team of professional photographers combines technical expertise with artistic 
              vision to deliver stunning results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};