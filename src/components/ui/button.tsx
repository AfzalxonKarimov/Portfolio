import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-foreground text-background hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(124,108,240,0.55)] active:translate-y-0",
        gradient:
          "text-white bg-[linear-gradient(120deg,var(--accent),var(--accent-2))] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-6px_rgba(124,108,240,0.65)] active:translate-y-0",
        outline:
          "border border-border text-foreground hover:border-border-strong hover:bg-background-elevated",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-background-elevated",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    // Slot (used for asChild) only accepts a single React element child, so
    // the hover-sheen overlay can only be rendered for the plain <button> case.
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {/* Sheen sweep on hover -- the site's subtle nod to the requested "ripple" */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.25)_50%,transparent_80%)] transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
