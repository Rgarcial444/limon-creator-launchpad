import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const clearTimer = React.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startTimer = React.useCallback(() => {
    clearTimer();
    if (images.length <= 1) return;
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
  }, [images.length, interval, loop, onComplete, clearTimer]);

  React.useEffect(() => {
    if (paused) {
      clearTimer();
    } else {
      startTimer();
    }
    return clearTimer;
  }, [paused, startTimer, clearTimer]);

  React.useEffect(() => {
    onIndexChange?.(currentIndex);
  }, [currentIndex, onIndexChange]);

  React.useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const goPrev = React.useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goNext = React.useCallback(() => {
    setCurrentIndex(prev => (prev >= images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  if (!images || images.length === 0) {
    return <p className="text-muted-foreground text-center py-10">No hay imágenes</p>;
  }

  return (
    <div {...props}>
      {renderImage ? renderImage(currentImage, currentIndex) : (
        <img src={currentImage} alt={`Slide ${currentIndex}`} className="w-full h-full object-cover" />
      )}
      {/* Arrow navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-0 top-0 h-full w-16 md:w-20 z-30 flex items-center justify-center bg-gradient-to-r from-black/30 to-transparent backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-8 w-8 text-white drop-shadow-lg" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-0 h-full w-16 md:w-20 z-30 flex items-center justify-center bg-gradient-to-l from-black/30 to-transparent backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-8 w-8 text-white drop-shadow-lg" />
          </button>
        </>
      )}
    </div>
  );
};
