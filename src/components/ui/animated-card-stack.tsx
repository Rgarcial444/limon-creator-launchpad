"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CardItem {
  id: number
  title: string
  description: string
  imageUrl: string
  url?: string
  etiquetas?: string
}

interface AnimatedCardStackProps {
  items: CardItem[]
  onCardClick?: (item: CardItem) => void
}

const positionStyles = [
  { scale: 1, y: 0, zIndex: 3 },
  { scale: 0.96, y: -20, zIndex: 2 },
  { scale: 0.92, y: -40, zIndex: 1 },
]

const parseTags = (etiquetas?: string) =>
  etiquetas
    ? etiquetas
        .split(/[,;]+/g)
        .map((t) => t.trim())
        .filter(Boolean)
    : []

function CardContent({ 
  item, 
  onCardClick 
}: { 
  item: CardItem
  onCardClick?: (item: CardItem) => void 
}) {
  const tags = parseTags(item.etiquetas)

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-card border border-border shadow-xl">
      {/* Image section - horizontal aspect ratio */}
      <div className="relative h-40 md:h-48 overflow-hidden bg-muted">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content section */}
      <div className="p-4 space-y-3">
        {tags.length > 0 && (
          <Badge variant="outline" className="text-xs font-medium uppercase tracking-wider">
            {tags[0]}
          </Badge>
        )}

        <h3 className="text-base font-bold text-foreground line-clamp-2 leading-tight">
          {item.title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between pt-1">
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground hover:text-primary p-0 h-auto font-medium"
            onClick={() => onCardClick?.(item)}
          >
            Ver más
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}

function AnimatedCard({
  item,
  index,
  isAnimating,
  onCardClick,
}: {
  item: CardItem
  index: number
  isAnimating: boolean
  onCardClick?: (item: CardItem) => void
}) {
  const style = positionStyles[index] ?? positionStyles[2]

  return (
    <motion.div
      layout
      initial={index === 2 ? { y: -40, scale: 0.92, opacity: 0 } : false}
      animate={{
        scale: style.scale,
        y: style.y,
        zIndex: index === 0 && isAnimating ? 10 : style.zIndex,
        opacity: 1,
      }}
      exit={{ y: 250, scale: 1, opacity: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.5 
      }}
      className="absolute w-full cursor-pointer"
      style={{ zIndex: style.zIndex }}
    >
      <CardContent item={item} onCardClick={onCardClick} />
    </motion.div>
  )
}

export default function AnimatedCardStack({ items, onCardClick }: AnimatedCardStackProps) {
  const [visibleItems, setVisibleItems] = useState<CardItem[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (items.length > 0) {
      setVisibleItems(items.slice(0, 3))
      setCurrentIndex(3)
    }
  }, [items])

  const handleNext = useCallback(() => {
    if (items.length <= 1 || isAnimating) return

    setIsAnimating(true)

    setTimeout(() => {
      setVisibleItems((prev) => {
        const nextItem = items[currentIndex % items.length]
        return [...prev.slice(1), nextItem]
      })
      setCurrentIndex((prev) => (prev + 1) % items.length)
      setIsAnimating(false)
    }, 100)
  }, [items, currentIndex, isAnimating])

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (items.length <= 1) return
    
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [handleNext, items.length])

  if (items.length === 0) {
    return null
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div 
        className="relative w-full h-[340px] md:h-[380px]"
        onClick={handleNext}
      >
        <AnimatePresence mode="popLayout">
          {visibleItems.slice(0, 3).map((item, index) => (
            <AnimatedCard
              key={item.id}
              item={item}
              index={index}
              isAnimating={isAnimating}
              onCardClick={onCardClick}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="flex items-center gap-1.5">
        {items.slice(0, Math.min(6, items.length)).map((_, idx) => (
          <div
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              idx === (currentIndex - 3 + items.length) % items.length
                ? "bg-foreground w-3"
                : "bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>

      <Button 
        variant="outline" 
        onClick={handleNext}
        className="rounded-full border-border"
      >
        Siguiente
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  )
}
