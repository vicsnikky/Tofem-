import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const galleryItems = [
    {
      title: "Tofem Primary School Building",
      category: "Campuses",
      image: "https://i.ibb.co/m5N6T7h8/Whats-App-Image-2026-07-24-at-2-22-42-PM.jpg",
      campus: "32, Bodunrin Street, Agbado crossing"
    },
    {
      title: "Tofem College Secondary Building",
      category: "Campuses",
      image: "https://i.ibb.co/Q3yH3N0T/Whats-App-Image-2026-07-31-at-6-42-54-AM.jpg",
      campus: "22, Olaoluwa Street, Agbado crossing"
    },
    {
      title: "Interactive Primary Classroom",
      category: "Classrooms",
      image: "/images/tofem_hero_banner_1785475269203.jpg",
      campus: "Tofem Primary Campus"
    },
    {
      title: "Science & Chemistry Practical",
      category: "Academics",
      image: "https://picsum.photos/seed/tofem-science/600/400",
      campus: "Tofem College Science Lab"
    },
    {
      title: "Annual Inter-House Sports & Relay",
      category: "Sports",
      image: "https://picsum.photos/seed/tofem-sports/600/400",
      campus: "Tofem Sports Ground"
    },
    {
      title: "Cultural Day & Drama Presentation",
      category: "Events",
      image: "https://picsum.photos/seed/tofem-culture/600/400",
      campus: "Tofem Assembly Hall"
    }
  ];

  const categories = ['All', 'Campuses', 'Classrooms', 'Academics', 'Sports', 'Events'];

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(i => i.category === filter);

  return (
    <section className="py-20 bg-blue-950 text-white border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 text-white shadow-sm">
            <ImageIcon className="w-4 h-4" />
            <span>Campus Life & Facilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Photo Gallery
          </h2>
          <p className="text-blue-100 text-base leading-relaxed">
            Take a glimpse into daily student life, primary and college facilities, academic activities, and sports across our dual campuses.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                filter === cat
                  ? 'bg-red-600 text-white font-bold shadow-md'
                  : 'bg-blue-900 text-blue-100 hover:bg-blue-800 border border-blue-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden bg-blue-900 border border-blue-800 shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-red-600 px-2 py-0.5 rounded shadow-sm">
                  {item.category}
                </span>
                <h4 className="text-base font-bold text-white pt-1">{item.title}</h4>
                <p className="text-xs text-blue-200">{item.campus}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
