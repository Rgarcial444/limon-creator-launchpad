import React from 'react';
import { cn } from "@/lib/utils";
import { Button as BaseButton } from "./button";
import { ButtonProps } from "./button";

interface RainbowButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <BaseButton
          ref={ref}
          className={cn(
            "rainbow-border relative bg-black text-white font-bold transition-all duration-200",
            className
          )}
          {...props}
        >
          {children}
        </BaseButton>
      </div>
    );
  }
);

RainbowButton.displayName = "RainbowButton";