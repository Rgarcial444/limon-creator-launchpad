"use client";
import { FC } from "react";

interface iCardItem {
  id?: number;
  title: string;
  description: string;
  tag: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
}

interface iCardProps extends Omit<iCardItem, "link" | "tag"> {
  i: number;
  src: string;
  onClick?: () => void;
}

const TOP_VALUES: Record<number, string> = {
  1: "0%",
  2: "10%",
  3: "20%",
  4: "30%",
};

const Card: FC<iCardProps> = ({
  title,
  description,
  color,
  textColor,
  i,
  src,
  onClick,
}) => {
  return (
    <div
      className="h-screen flex items-center justify-center sticky"
      style={{ top: TOP_VALUES[i] || "0%" }}
    >
      <div
        className="relative flex flex-col md:flex-row items-center justify-between h-[500px] w-full max-w-5xl rounded-3xl p-6 md:p-12 origin-top overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={src}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full w-full md:w-1/2">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: textColor }}
          >
            {title}
          </h2>
          <p
            className="text-base md:text-lg opacity-90 max-w-md"
            style={{ color: textColor }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

interface iCardSlideProps {
  items: iCardItem[];
  onCardClick?: (item: iCardItem) => void;
}

const CardsParallax: FC<iCardSlideProps> = ({ items, onCardClick }) => {
  return (
    <div className="relative">
      {items.map((project, i) => (
        <Card
          key={project.id || i}
          i={i + 1}
          {...project}
          onClick={() => onCardClick?.(project)}
        />
      ))}
    </div>
  );
};

export { CardsParallax, type iCardItem };
