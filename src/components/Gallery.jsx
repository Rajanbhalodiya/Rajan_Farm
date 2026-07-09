import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import img1 from '../assets/mango_harvest_1.jpg';
import img2 from '../assets/hero_orchard.jpg';
import img3 from '../assets/mango_harvest_2.jpg';
import img4 from '../assets/farm_view_1.jpg';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      src: img1,
      titleKey: 'galleryImg1',
      categoryKey: 'galleryCat1',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      id: 2,
      src: img2,
      titleKey: 'galleryImg2',
      categoryKey: 'galleryCat2',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 3,
      src: img3,
      titleKey: 'galleryImg3',
      categoryKey: 'galleryCat3',
      span: 'md:col-span-1 md:row-span-2',
    },
    {
      id: 4,
      src: img4,
      titleKey: 'galleryImg4',
      categoryKey: 'galleryCat4',
      span: 'md:col-span-2 md:row-span-1',
    },
  ];

  return (
    <section
      id="gallery"
      className="relative py-24 lg:py-32 px-6 lg:px-8 bg-bgWarm-light dark:bg-bgWarm-dark transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-sans tracking-[0.2em] font-extrabold text-farm dark:text-mango uppercase block">
            {t('gallerySubtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-farm-dark dark:text-white">
            {t('galleryTitle')}
          </h2>
          <div className="w-12 h-1 bg-mango mx-auto rounded-full" />
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-luxury dark:shadow-luxury-dark ${item.span}`}
              onClick={() => setSelectedImage(item)}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={t(item.titleKey)}
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-farm-deep/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20"
                >
                  <Maximize2 size={16} />
                </motion.div>
              </div>

              {/* Info Banner */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-farm-deep/80 via-farm-deep/40 to-transparent text-white z-20 transition-transform duration-300">
                <span className="text-[9px] font-sans tracking-widest bg-mango text-farm-deep px-2 py-0.5 rounded uppercase font-bold">
                  {t(item.categoryKey)}
                </span>
                <h3 className="text-lg font-serif font-bold mt-2">{t(item.titleKey)}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-farm-deep/95 dark:bg-black/95 z-[100] flex items-center justify-center p-6 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-all duration-300 z-[110]"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            {/* Lightbox Content Area */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-3xl bg-farm-deep/10 border border-white/10 flex flex-col items-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={t(selectedImage.titleKey)}
                className="w-full h-full max-h-[75vh] object-contain"
              />
              <div className="w-full p-6 bg-farm-deep/60 backdrop-blur-md text-white border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-sans tracking-widest text-mango uppercase font-bold">
                    {t(selectedImage.categoryKey)}
                  </span>
                  <h3 className="text-xl font-serif font-bold mt-1">{t(selectedImage.titleKey)}</h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-5 py-2.5 rounded-full bg-mango hover:bg-mango-dark text-farm-deep font-sans font-bold text-xs uppercase tracking-wider transition-colors duration-300"
                >
                  {t('closeBtn')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
