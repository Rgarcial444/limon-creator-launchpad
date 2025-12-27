"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"

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
  { scale: 0.95, y: -30, zIndex: 2 },
  { scale: 0.9, y: -60, zIndex: 1 },
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
    <div className="w-full h-full rounded-2xl overflow-hidden bg-card border border-primary/20 shadow-2xl">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="p-5 space-y-3">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <h3 className="text-lg font-bold text-foreground line-clamp-2">
          {item.title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:text-primary/80"
            onClick={() => onCardClick?.(item)}
          >
            Ver más
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>

          {item.url && (
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={(e) => {
                e.stopPropagation()
                window.open(item.url!, "_blank", "noopener,noreferrer")
              }}
            >
              Visitar
              <ExternalLink className="w-4 h-4 ml-1" />
            </Button>
          )}
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
      initial={index === 2 ? { y: -60, scale: 0.9, opacity: 0 } : false}
      animate={{
        scale: style.scale,
        y: style.y,
        zIndex: index === 0 && isAnimating ? 10 : style.zIndex,
        opacity: 1,
      }}
      exit={{ y: 300, scale: 1, opacity: 0 }}
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

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (items.length <= 1) return
    
    const interval = setInterval(() => {
      handleNext()
    }, 4000)

    return () => clearInterval(interval)
  }, [handleNext, items.length])

  if (items.length === 0) {
    return null
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div 
        className="relative w-full max-w-sm h-[420px]"
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

      <div className="flex items-center gap-2">
        {items.slice(0, Math.min(6, items.length)).map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === (currentIndex - 3 + items.length) % items.length
                ? "bg-primary"
                : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>

      <Button 
        variant="outline" 
        onClick={handleNext}
        className="rounded-full"
      >
        Siguiente
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  )
}
