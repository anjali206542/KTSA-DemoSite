"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { PanelLeftIcon } from "lucide-react";

import { useIsMobile } from "./use-mobile";
import { cn } from "./utils";
import { Button } from "./button";
import { Input } from "./input";
import { Separator } from "./separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./sheet";
import { Skeleton } from "./skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

/* ================= CONTEXT ================= */

const SidebarContext = React.createContext(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used inside SidebarProvider");
  }
  return context;
}

/* ================= PROVIDER ================= */

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange,
  children,
  className,
  style,
  ...props
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);
  const [_open, setInternalOpen] = React.useState(defaultOpen);

  const open = openProp ?? _open;

  const setOpen = (value) => {
    const next = typeof value === "function" ? value(open) : value;

    if (onOpenChange) onOpenChange(next);
    else setInternalOpen(next);

    document.cookie = `sidebar_state=${next}; path=/; max-age=${
      60 * 60 * 24 * 7
    }`;
  };

  const toggleSidebar = () => {
    isMobile ? setOpenMobile((o) => !o) : setOpen((o) => !o);
  };

  React.useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "b") {
        e.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const state = open ? "expanded" : "collapsed";

  return (
    <SidebarContext.Provider
      value={{
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }}
    >
      <TooltipProvider>
        <div
          className={cn("flex min-h-screen w-full", className)}
          style={{
            "--sidebar-width": "16rem",
            "--sidebar-width-icon": "3rem",
            ...style,
          }}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

/* ================= SIDEBAR ================= */

function Sidebar({ side = "left", children, className, ...props }) {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile}>
        <SheetContent side={side} className="w-72 p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Mobile Sidebar</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col h-full">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className={cn(
        "hidden md:flex flex-col h-screen w-64 border-r bg-background",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ================= TRIGGER ================= */

function SidebarTrigger({ className, ...props }) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn("size-7", className)}
      onClick={toggleSidebar}
      {...props}
    >
      <PanelLeftIcon />
    </Button>
  );
}

/* ================= LAYOUT ================= */

function SidebarHeader({ className, ...props }) {
  return <div className={cn("p-2", className)} {...props} />;
}

function SidebarFooter({ className, ...props }) {
  return <div className={cn("p-2 mt-auto", className)} {...props} />;
}

function SidebarContent({ className, ...props }) {
  return (
    <div className={cn("flex-1 overflow-auto p-2", className)} {...props} />
  );
}

function SidebarInset({ className, ...props }) {
  return <main className={cn("flex-1 p-4", className)} {...props} />;
}

/* ================= MENU ================= */

function SidebarMenu({ className, ...props }) {
  return <ul className={cn("flex flex-col gap-1", className)} {...props} />;
}

function SidebarMenuItem({ className, ...props }) {
  return <li className={cn("", className)} {...props} />;
}

function SidebarMenuButton({ children, className, isActive, ...props }) {
  return (
    <button
      className={cn(
        "flex items-center gap-2 p-2 rounded-md text-sm hover:bg-accent",
        isActive && "bg-accent font-medium",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/* ================= EXTRA ================= */

function SidebarInput(props) {
  return <Input className="h-8" {...props} />;
}

function SidebarSeparator(props) {
  return <Separator className="my-2" {...props} />;
}

function SidebarMenuSkeleton({ showIcon }) {
  return (
    <div className="flex items-center gap-2 p-2">
      {showIcon && <Skeleton className="size-4" />}
      <Skeleton className="h-4 w-full" />
    </div>
  );
}

/* ================= EXPORT ================= */

export {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInput,
  SidebarSeparator,
  SidebarMenuSkeleton,
  useSidebar,
};
