'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollExpandHeroProps {
  mediaSrc: string;
  bgImageSrc?: string;
  title?: string;
  subtitle?: string;
  scrollToExpand?: string;
  children?: ReactNode;
}

const ScrollExpandHero = ({
  mediaSrc,
  bgImageSrc,
  title,
  subtitle,
  scrollToExpand = "Desliza para explorar",
  children,
}: ScrollExpandHeroProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobileState, setIsMobileState] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaSrc]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div ref={sectionRef} className="relative w-full min-h-screen overflow-hidden bg-background">
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background image */}
        {bgImageSrc && (
          <div className="absolute inset-0 z-0">
            <img
              src={bgImageSrc}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          </div>
        )}

        <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen">
          <div className="flex flex-col items-center justify-center gap-6 w-full px-4">
            {/* Title with parallax effect */}
            <div className="flex items-center justify-center text-center gap-4 w-full relative z-10 flex-col">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
                style={{ transform: `translateX(-${textTranslateX}vw)` }}
              >
                {firstWord}
              </motion.h2>
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground"
                style={{ transform: `translateX(${textTranslateX}vw)` }}
              >
                {restOfTitle}
              </motion.h2>
            </div>

            {/* Media container with expansion */}
            <div
              className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl"
              style={{
                width: `${mediaWidth}px`,
                maxWidth: '95vw',
                height: `${mediaHeight}px`,
                maxHeight: '80vh',
                transition: 'width 0.1s ease-out, height 0.1s ease-out',
              }}
            >
              <div className="relative w-full h-full">
                <img
                  src={mediaSrc}
                  alt={title || 'Hero image'}
                  className="w-full h-full object-cover rounded-xl"
                />
                <motion.div
                  className="absolute inset-0 bg-black/50 rounded-xl"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 0.7 - scrollProgress * 0.5 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              {/* Scroll indicator - always visible until expanded */}
              <motion.div
                className="flex flex-col items-center gap-2 mt-6"
                initial={{ opacity: 1 }}
                animate={{ opacity: mediaFullyExpanded ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {subtitle && (
                  <p className="text-sm md:text-base text-muted-foreground text-center">
                    {subtitle}
                  </p>
                )}
                <p className="text-xs text-muted-foreground/70 font-medium">
                  {scrollToExpand}
                </p>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="mt-1"
                >
                  <ChevronDown className="w-8 h-8 text-primary" />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Content that appears after expansion */}
          <motion.section
            className="flex flex-col w-full px-4 py-10 md:px-16 lg:py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.7 }}
          >
            {children}
          </motion.section>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandHero;
