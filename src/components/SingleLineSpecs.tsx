import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Thermometer, Layers, Ruler, Eye, Package } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpecificationItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const specifications: SpecificationItem[] = [
  {
    label: "Material",
    value: "High-Grade Flexible PVC",
    icon: <Package className="h-3 w-3" />,
    color: "text-blue-600"
  },
  {
    label: "Transparency",
    value: "95%+ Optical Clarity",
    icon: <Eye className="h-3 w-3" />,
    color: "text-emerald-600"
  },
  {
    label: "Temperature",
    value: "-15°C to +50°C",
    icon: <Thermometer className="h-3 w-3" />,
    color: "text-orange-600"
  },
  {
    label: "Thickness",
    value: "2mm, 3mm, 5mm",
    icon: <Layers className="h-3 w-3" />,
    color: "text-purple-600"
  },
  {
    label: "Widths",
    value: "200mm, 300mm, 400mm",
    icon: <Ruler className="h-3 w-3" />,
    color: "text-pink-600"
  }
];

interface SingleLineSpecsProps {
  className?: string;
}

export function SingleLineSpecs({ className }: SingleLineSpecsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate through specifications
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % specifications.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("w-full", className)}>
      <div className="bg-primary/5 border border-primary/20 rounded-full px-4 py-2 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-6 text-xs sm:text-sm">
          {/* Static specs for larger screens */}
          <div className="hidden lg:flex items-center gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className={cn("flex items-center gap-1", spec.color)}>
                  {spec.icon}
                  <span className="font-medium">{spec.label}:</span>
                </span>
                <span className="text-foreground font-semibold">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Rotating specs for smaller screens */}
          <div className="lg:hidden flex items-center justify-center min-h-[20px]">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <span className={cn("flex items-center gap-1", specifications[currentIndex].color)}>
                {specifications[currentIndex].icon}
                <span className="font-medium">{specifications[currentIndex].label}:</span>
              </span>
              <span className="text-foreground font-semibold">{specifications[currentIndex].value}</span>
            </motion.div>
          </div>

          {/* Progress dots for mobile */}
          <div className="lg:hidden flex gap-1">
            {specifications.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-primary" : "bg-primary/30"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}