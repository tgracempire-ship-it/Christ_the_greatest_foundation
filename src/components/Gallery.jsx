import React from 'react';

const Gallery = () => {
  // Placeholder images - you can replace these paths with your actual images later
  const images = [
    { id: 1, src: '/pioneer.png', alt: 'Gallery Image 1' },
    { id: 2, src: '/hero-bg.jpg', alt: 'Gallery Image 2' },
    { id: 3, src: '/pioneer.png', alt: 'Gallery Image 3' },
    { id: 4, src: '/hero-bg.jpg', alt: 'Gallery Image 4' },
    { id: 5, src: '/pioneer.png', alt: 'Gallery Image 5' },
    { id: 6, src: '/hero-bg.jpg', alt: 'Gallery Image 6' },
  ];

  return (
    <section className="gallery" id="gallery" style={{ padding: '120px 0 96px 0', background: 'var(--white)', minHeight: '100vh' }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><span className="dot"></span>In Action</span>
          <h2>Our Gallery</h2>
          <p>A visual record of our impact across schools, communities, and correctional facilities.</p>
        </div>

        <div className="gallery-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '24px',
          marginTop: '40px'
        }}>
          {images.map((img) => (
            <div key={img.id} className="gallery-item" style={{
              position: 'relative',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              aspectRatio: '4/3',
              boxShadow: '0 4px 12px rgba(15,23,42,0.08)',
              backgroundColor: 'var(--off-white)'
            }}>
              <img 
                src={img.src} 
                alt={img.alt} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  transition: 'transform 0.3s var(--ease)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
