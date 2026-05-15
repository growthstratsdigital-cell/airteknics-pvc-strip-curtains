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
const specifications: SpecificationCard[] = [{
  label: "Material",
  value: "High-Grade Flexible PVC",
  icon: <Package className="h-5 w-5" />,
  description: "Premium quality flexible PVC",
  color: "from-blue-500 to-blue-600"
}, {
  label: "Transparency",
  value: "95%+ Optical Clarity",
  icon: <Eye className="h-5 w-5" />,
  description: "Crystal clear visibility",
  color: "from-emerald-500 to-emerald-600"
}, {
  label: "Temperature Range",
  value: "-15°C to +50°C",
  icon: <Thermometer className="h-5 w-5" />,
  description: "Wide temperature range",
  color: "from-orange-500 to-orange-600"
}, {
  label: "Thickness",
  value: "2mm, 3mm, 5mm",
  icon: <Layers className="h-5 w-5" />,
  description: "Multiple thickness options",
  color: "from-purple-500 to-purple-600"
}, {
  label: "Widths",
  value: "200mm, 300mm, 400mm",
  icon: <Ruler className="h-5 w-5" />,
  description: "Standard width options",
  color: "from-pink-500 to-pink-600"
}];
interface HorizontalSpecCardsProps {
  className?: string;
}
export function HorizontalSpecCards({
  className
}: HorizontalSpecCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % specifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % specifications.length);
    setIsAutoPlaying(false);
  };
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + specifications.length) % specifications.length);
    setIsAutoPlaying(false);
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };
  return (
    <div className={cn("relative w-full", className)}>
      {/* Horizontal Cards Container */}
      <div className="relative overflow-hidden">
        <div className="flex gap-3 sm:gap-4">
          {/* Navigation Arrow Left */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="shrink-0 bg-primary/10 hover:bg-primary/20 text-primary border-none h-8 w-8 sm:h-10 sm:w-10"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          {/* Main Card Display */}
          <div className="flex-1 h-20 sm:h-24 overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-full"
              >
                <Card className="h-full border-none shadow-lg overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${specifications[currentIndex].color} text-white relative`}>
                    <CardContent className="h-full p-3 sm:p-4 flex items-center justify-between">
                      {/* Icon and Label */}
                      <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                          {specifications[currentIndex].icon}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm opacity-90 font-medium">
                            {specifications[currentIndex].label}
                          </div>
                          <div className="text-sm sm:text-base font-bold">
                            {specifications[currentIndex].value}
                          </div>
                        </div>
                      </div>

                      {/* Progress Indicator */}
                      <div className="text-right">
                        <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                          {currentIndex + 1}/{specifications.length}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrow Right */}
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="shrink-0 bg-primary/10 hover:bg-primary/20 text-primary border-none h-8 w-8 sm:h-10 sm:w-10"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-3 gap-1.5">
        {specifications.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}