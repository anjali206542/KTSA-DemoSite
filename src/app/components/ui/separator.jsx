"use client";

import React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "./utils";

// ❌ Removed TypeScript

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        orientation === "horizontal" ? "w-full h-px" : "h-full w-px",
        "bg-border shrink-0",
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
