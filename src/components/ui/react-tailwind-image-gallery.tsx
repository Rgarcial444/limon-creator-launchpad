import React from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  span: string;
}

interface GalleryProps {
  data: GalleryImage[];
  onImageClick: (src: string) => void;
  title?: string;
}

interface ImageModalProps {
  src: string | null;
  onClose: () => void;
}

export function Gallery({ data, onImageClick, title = "Descubrir" }: GalleryProps) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent text-center mb-8">
          {title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {data.map((img) => (
            <div
              key={img.id}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${img.span}`}
              onClick={() => onImageClick(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                    {img.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImageModal({ src, onClose }: ImageModalProps) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <img
        src={src}
        alt="Enlarged view"
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute top-4 right-4 text-white text-4xl font-light hover:text-primary transition-colors"
        onClick={onClose}
        aria-label="Cerrar"
      >
        ×
      </button>
    </div>
  );
}

export type { GalleryImage, GalleryProps, ImageModalProps };
