
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success: "border-transparent bg-green-100 text-green-800 hover:bg-green-200",
        warning: "border-transparent bg-amber-100 text-amber-800 hover:bg-amber-200",
        info: "border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200",
        premium: "border-transparent bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-sm hover:shadow-md",
        highlight: "border-transparent bg-gradient-to-r from-fintech-orange to-fintech-green text-white shadow-sm hover:shadow-md",
        glow: "border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-[0_0_10px_rgba(155,135,245,0.5)] hover:shadow-[0_0_15px_rgba(155,135,245,0.7)]",
        pill: "border border-gray-200 bg-transparent text-gray-800 hover:bg-gray-100 hover:text-gray-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
