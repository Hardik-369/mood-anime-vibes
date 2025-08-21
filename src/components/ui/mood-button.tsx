import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const moodButtonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-2xl text-sm font-medium anime-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95 anime-bounce group",
  {
    variants: {
      variant: {
        default: "bg-card hover:bg-secondary anime-card-shadow hover:anime-mood-shadow border",
        selected: "anime-gradient-primary text-primary-foreground anime-mood-shadow border-primary/20",
      },
      size: {
        default: "h-16 px-6 py-4",
        lg: "h-20 px-8 py-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface MoodButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof moodButtonVariants> {
  emoji: string
  mood: string
  isSelected?: boolean
}

const MoodButton = React.forwardRef<HTMLButtonElement, MoodButtonProps>(
  ({ className, variant, size, emoji, mood, isSelected, ...props }, ref) => {
    return (
      <button
        className={cn(
          moodButtonVariants({ 
            variant: isSelected ? "selected" : "default", 
            size, 
            className 
          })
        )}
        ref={ref}
        {...props}
      >
        <span className="text-2xl group-hover:animate-anime-pulse">{emoji}</span>
        <span className="font-semibold capitalize">{mood}</span>
      </button>
    )
  }
)
MoodButton.displayName = "MoodButton"

export { MoodButton, moodButtonVariants }