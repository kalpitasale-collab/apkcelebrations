import React, { useState, useEffect } from 'react';
import { GALLERY_DATA } from '../data/gallery';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredImages, setFilteredImages] = useState(GALLERY_DATA);
  const [selectedImage, setSelectedImage] = useState(null); // stores the currently selected image object

  const filters = ['All', 'Birthdays', 'Balloon Decor', 'Theme Parties', 'Private Events'];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredImages(GALLERY_DATA);
    } else {
      setFilteredImages(GALLERY_DATA.filter(img => img.category === activeFilter));
    }
  }, [activeFilter]);

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Lightbox keyboard navigation & escape close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // prevent background body scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // restore background body scrolling
  };

  return (
    <section id="work" className="section" style={{ backgroundColor: 'var(--background-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">Our Work</span>
          <h2 className="section-title">Moments We've Made Special</h2>
          <p className="section-description">
            Take a look at some of the celebrations and event setups brought to life by APK Celebrations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter(filter);
                setSelectedImage(null); // Reset lightbox to prevent index errors
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid Layout Container */}
        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item fade-in cursor-pointer overflow-hidden"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.imageUrl} 
                alt={image.title} 
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-overlay-cat">{image.category}</span>
                <h3 className="gallery-overlay-title">{image.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--spacing-xs)', color: 'var(--accent-color)' }}>
                  <Maximize2 size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Full-Screen Lightbox Modal */}
        {selectedImage && (
          <div className="lightbox-backdrop open" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close Lightbox">
              <X size={32} />
            </button>

            {/* Navigation buttons */}
            <button 
              className="lightbox-nav-btn lightbox-prev" 
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              aria-label="Previous Image"
            >
              <ChevronLeft size={28} />
            </button>

            <button 
              className="lightbox-nav-btn lightbox-next" 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              aria-label="Next Image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Lightbox Content Card with smooth transition entry */}
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-img-wrapper">
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title} 
                  className="lightbox-img"
                />
              </div>
              <div className="lightbox-info">
                <span className="lightbox-cat">{selectedImage.category}</span>
                <h3 className="lightbox-title">{selectedImage.title}</h3>
                <p className="lightbox-desc">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
