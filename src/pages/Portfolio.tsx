import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Elegant Wedding Ceremony",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    description: "A beautiful outdoor wedding ceremony captured in natural light."
  },
  {
    id: 2,
    title: "Newborn Joy",
    category: "Baby",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80",
    description: "Capturing precious moments of a newborn baby."
  },
  {
    id: 3,
    title: "Corporate Excellence",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80",
    description: "Professional corporate photography for business needs."
  },
  {
    id: 4,
    title: "Creative Portrait",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80",
    description: "Artistic portrait photography with creative lighting."
  },
  {
    id: 5,
    title: "Wedding Reception",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
    description: "Capturing the joy and celebration of a wedding reception."
  },
  {
    id: 6,
    title: "Professional Headshot",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80",
    description: "Professional headshot for corporate use."
  },
  {
    id: 7,
    title: "Baby Milestones",
    category: "Baby",
    image: "https://images.unsplash.com/photo-1533483595632-c5f0e57a1936?auto=format&fit=crop&q=80",
    description: "Documenting precious baby milestones."
  },
  {
    id: 8,
    title: "Product Photography",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?auto=format&fit=crop&q=80",
    description: "Professional product photography for e-commerce."
  }
];

export const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-green-600 to-purple-600">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-2xl">
            Explore our collection of professional photography work
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-500 to-purple-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-lg'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-200">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-white">
              <h3 className="text-2xl font-semibold mb-2">{selectedItem.title}</h3>
              <p className="text-gray-300 mb-2">{selectedItem.category}</p>
              <p className="text-gray-400">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};