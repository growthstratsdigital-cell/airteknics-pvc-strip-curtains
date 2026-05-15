import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Thermometer, Layers, Ruler, Eye, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SpecificationCard {
  label: string;
  value: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const specifications: SpecificationCard[] = [
  {
    label: "Material",
    value: "High-Grade Flexible PVC",
    icon: <Package className="h-8 w-8" />,
    description: "Premium quality flexible PVC material for industrial applications",
    color: "from-blue-500 to-blue-600"
  },
  {
    label: "Transparency",
    value: "95%+ Optical Clarity",
    icon: <Eye className="h-8 w-8" />,
    description: "Crystal clear visibility for safety and operational efficiency",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    label: "Temperature Range",
    value: "-15°C to +50°C",
    icon: <Thermometer className="h-8 w-8" />,
    description: "Suitable for cold storage and high-temperature environments",
    color: "from-orange-500 to-orange-600"
  },
  {
    label: "Thickness Options",
    value: "2mm, 3mm, 5mm",
    icon: <Layers className="h-8 w-8" />,
    description: "Multiple thickness options for different application requirements",
    color: "from-purple-500 to-purple-600"
  },
  {
    label: "Available Widths",
    value: "200mm, 300mm, 400mm",
    icon: <Ruler className="h-8 w-8" />,
    description: "Standard widths to fit various door and opening sizes",
    color: "from-pink-500 to-pink-600"
  }
];

interface SlidingSpecCardsProps {
  className?: string;
}

export function SlidingSpecCards({ className }: SlidingSpecCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % specifications.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % specifications.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + specifications.length) % specifications.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className={cn("relative w-full", className)}>
      {/* Main Card Display */}
      <div className="relative h-64 sm:h-72 overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Card className="h-full border-none shadow-2xl overflow-hidden">
              <div className={`h-full bg-gradient-to-br ${specifications[currentIndex].color} text-white relative`}>
                <CardContent className="h-full p-6 sm:p-8 flex flex-col justify-between">
                  {/* Icon and Label */}
                  <div className="flex items-start justify-between">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      {specifications[currentIndex].icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm opacity-80 font-medium">
                        {specifications[currentIndex].label}
                      </div>
                    </div>
                  </div>

                  {/* Main Value */}
                  <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                      {specifications[currentIndex].value}
                    </h3>
                    <p className="text-sm sm:text-base opacity-90 leading-relaxed">
                      {specifications[currentIndex].description}
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex justify-center">
                    <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
                      {currentIndex + 1} of {specifications.length}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm h-10 w-10"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm h-10 w-10"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {specifications.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
          />
        ))}
      </div>

      {/* Mini Preview Cards */}
      <div className="hidden sm:flex justify-center mt-6 gap-2 overflow-x-auto pb-2">
        {specifications.map((spec, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "flex-shrink-0 p-3 rounded-lg border transition-all duration-300",
              index === currentIndex
                ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                : "bg-card hover:bg-accent border-border"
            )}
            whileHover={{ scale: index === currentIndex ? 1.05 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-xs font-medium">{spec.label}</div>
            <div className="text-xs opacity-80 mt-1">{spec.value.split(' ')[0]}</div>
          </motion.button>
        ))}
      </div>

      {/* Auto-play Toggle */}
      <div className="flex justify-center mt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          {isAutoPlaying ? "⏸️ Pause" : "▶️ Auto-play"}
        </Button>
      </div>
    </div>
  );
}