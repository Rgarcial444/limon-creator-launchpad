import * as React from 'react';

interface ImagePlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
  interval?: number;
  loop?: boolean;
  onComplete?: () => void;
  onIndexChange?: (index: number) => void;
  paused?: boolean;
  renderImage?: (src: string, index: number) => React.ReactNode;
}

export const ImagePlayer: React.FC<ImagePlayerProps> = ({
  images,
  interval = 3500,
  loop = true,
  onComplete,
  onIndexChange,
  paused = false,
  renderImage,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const currentImage = React.useMemo(() => images[currentIndex], [images, currentIndex]);

  React.useEffect(() => {
    if (images.length <= 1 || paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev + 1;
        if (next >= images.length) {
          if (loop) return 0;
          onComplete?.();
          return prev;
        }
        return next;
      });
    }, interval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length, interval, loop, onComplete, paused]);

  React.useEffect(() => {
    onIndexChange?.(currentIndex);
  }, [currentIndex, onIndexChange]);

  React.useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const goTo = React.useCallback((i: number) => setCurrentIndex(i), []);

  if (!images || images.length === 0) {
    return <p className="text-muted-foreground text-center py-10">No hay imágenes</p>;
  }

  return (
    <div {...props}>
      {renderImage ? renderImage(currentImage, currentIndex) : (
        <img src={currentImage} alt={`Slide ${currentIndex}`} className="w-full h-full object-cover" />
      )}
      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
