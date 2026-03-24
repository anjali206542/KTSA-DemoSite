"use client";

import React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

// ❌ Removed React.ComponentProps typing
function AspectRatio(props) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };
