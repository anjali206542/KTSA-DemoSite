"use client";

import React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";

import { cn } from "./utils";

/* ================= TOGGLE ================= */

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium",
        "transition-colors outline-none",
        "disabled:opacity-50 disabled:pointer-events-none",
        "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",

        // variants
        variant === "outline" && "border border-input bg-transparent",

        // sizes
        size === "default" && "h-9 px-2",
        size === "sm" && "h-8 px-1.5",
        size === "lg" && "h-10 px-3",

        className,
      )}
      {...props}
    />
  );
}

export { Toggle };
