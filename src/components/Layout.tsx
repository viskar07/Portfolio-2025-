
import React from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={cn("min-h-screen bg-gray-950 text-white p-6", className)}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
