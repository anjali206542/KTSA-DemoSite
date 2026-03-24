"use client";

import React from "react";
import { cn } from "./utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full min-h-16 rounded-md border px-3 py-2 text-sm",
        "bg-input-background border-input",
        "placeholder:text-muted-foreground",
        "focus-visible:ring-2 outline-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
