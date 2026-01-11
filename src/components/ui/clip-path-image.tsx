import React from 'react';

interface ClippedMediaItem {
  src: string;
  type: 'image' | 'video';
  alt: string;
  clipId: 'clip-squiggle' | 'clip-rect' | 'clip-another';
  onClick?: () => void;
}

interface ClippedMediaGalleryProps extends React.ComponentPropsWithoutRef<'section'> {
  mediaItems?: ClippedMediaItem[];
}

const ClippedMediaGallery = React.forwardRef<HTMLElement, ClippedMediaGalleryProps>(
  ({ mediaItems, className, ...props }, ref) => {
    const defaultMediaItems: ClippedMediaItem[] = [
      {
        src: 'https://images.unsplash.com/photo-1727889490721-4f27ef9b6673?q=80&w=870&auto=format&fit=crop',
        alt: 'Abstract Squiggle Art',
        clipId: 'clip-squiggle',
        type: 'image',
      },
      {
        src: 'https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4',
        alt: 'Abstract Rectangular Video',
        clipId: 'clip-rect',
        type: 'video',
      },
      {
        src: 'https://images.unsplash.com/photo-1695239510467-f1e93d649c2b?q=80&w=874&auto=format&fit=crop',
        alt: 'Abstract Another Clip',
        clipId: 'clip-another',
        type: 'image',
      },
    ];

    const itemsToRender = mediaItems || defaultMediaItems;

    return (
      <>
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="clip-squiggle" clipPathUnits="objectBoundingBox">
              <path d="M0.5,0 C0.776,0,1,0.224,1,0.5 C1,0.776,0.776,1,0.5,1 C0.224,1,0,0.776,0,0.5 C0,0.224,0.224,0,0.5,0 M0.5,0.1 C0.279,0.1,0.1,0.279,0.1,0.5 C0.1,0.721,0.279,0.9,0.5,0.9 C0.721,0.9,0.9,0.721,0.9,0.5 C0.9,0.279,0.721,0.1,0.5,0.1" />
            </clipPath>
            <clipPath id="clip-rect" clipPathUnits="objectBoundingBox">
              <path d="M0.1,0 L0.9,0 Q1,0 1,0.1 L1,0.9 Q1,1 0.9,1 L0.1,1 Q0,1 0,0.9 L0,0.1 Q0,0 0.1,0" />
            </clipPath>
            <clipPath id="clip-another" clipPathUnits="objectBoundingBox">
              <path d="M0.5,0 L1,0.25 L1,0.75 L0.5,1 L0,0.75 L0,0.25 Z" />
            </clipPath>
          </defs>
        </svg>

        <section
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 py-12 ${className || ''}`}
          {...props}
        >
          {itemsToRender.map((item, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.02] group"
              style={{ clipPath: `url(#${item.clipId})` }}
              onClick={item.onClick}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-sm truncate">{item.alt}</span>
              </div>
            </div>
          ))}
        </section>
      </>
    );
  }
);

ClippedMediaGallery.displayName = 'ClippedMediaGallery';

export default ClippedMediaGallery;
export type { ClippedMediaItem, ClippedMediaGalleryProps };
