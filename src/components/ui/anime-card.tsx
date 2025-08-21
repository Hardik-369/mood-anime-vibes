import * as React from "react"
import { cn } from "@/lib/utils"

const AnimeCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "anime-card-shadow hover:anime-hover-shadow anime-transition rounded-2xl border bg-card text-card-foreground overflow-hidden group cursor-pointer hover:scale-[1.02] hover:-translate-y-1",
      className
    )}
    {...props}
  />
))
AnimeCard.displayName = "AnimeCard"

const AnimeCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  />
))
AnimeCardHeader.displayName = "AnimeCardHeader"

const AnimeCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-4", className)} {...props} />
))
AnimeCardContent.displayName = "AnimeCardContent"

const AnimeCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-bold leading-tight tracking-tight text-foreground line-clamp-2 mb-2",
      className
    )}
    {...props}
  />
))
AnimeCardTitle.displayName = "AnimeCardTitle"

const AnimeCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground line-clamp-3", className)}
    {...props}
  />
))
AnimeCardDescription.displayName = "AnimeCardDescription"

export {
  AnimeCard,
  AnimeCardHeader,
  AnimeCardContent,
  AnimeCardTitle,
  AnimeCardDescription,
}