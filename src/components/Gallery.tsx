import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: "https://lctech.in/dreamstudio/gallery1.jpg"
  },
  {
    id: 2,
    url: "https://lctech.in/dreamstudio/gallery2.jpg"
  },
  {
    id: 3,
    url: "https://lctech.in/dreamstudio/gallery3.jpg"
  },
  {
    id: 4,
    url: "https://lctech.in/dreamstudio/gallery4.jpg"
  },
  {
    id: 5,
    url: "https://lctech.in/dreamstudio/gallery5.jpg"
  },
  {
    id: 6,
    url: "https://lctech.in/dreamstudio/gallery6.jpg"
  },
  {
    id: 7,
    url: "https://lctech.in/dreamstudio/gallery7.jpg"
  },
  {
    id: 8,
    url: "https://lctech.in/dreamstudio/gallery8.jpg"
  },
  {
    id: 9,
    url: "https://lctech.in/dreamstudio/gallery9.jpg"
  },
  {
    id: 10,
    url: "https://lctech.in/dreamstudio/gallery10.jpg"
  },
  {
    id: 11,
    url: "https://lctech.in/dreamstudio/gallery11.jpg"
  },
  {
    id: 12,
    url: "https://lctech.in/dreamstudio/gallery12.jpg"
  },
  {
    id: 13,
    url: "https://lctech.in/dreamstudio/gallery13.jpg"
  }
];

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
          Our Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={image.url}
                alt="Gallery image"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-sm transition-opacity duration-300" />
            
            {/* Modal Content */}
            <div className="relative max-w-7xl w-full mx-auto" onClick={e => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Container */}
              <div className="relative bg-black/50 rounded-lg overflow-hidden">
                <img
                  src={galleryImages[currentIndex].url}
                  alt="Gallery image"
                  className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                />
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};