import React from "react";
import { Thermometer, Layers, Ruler, Eye, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
interface SpecificationItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}
const specifications: SpecificationItem[] = [{
  label: "Material",
  value: "High-Grade Flexible PVC",
  icon: <Package className="h-4 w-4" />,
  color: "from-blue-500 to-blue-600"
}, {
  label: "Transparency",
  value: "95%+ Optical Clarity",
  icon: <Eye className="h-4 w-4" />,
  color: "from-emerald-500 to-emerald-600"
}, {
  label: "Temperature",
  value: "-15°C to +50°C",
  icon: <Thermometer className="h-4 w-4" />,
  color: "from-orange-500 to-orange-600"
}, {
  label: "Thickness",
  value: "2mm, 3mm, 5mm",
  icon: <Layers className="h-4 w-4" />,
  color: "from-purple-500 to-purple-600"
}, {
  label: "Widths",
  value: "200mm, 300mm, 400mm",
  icon: <Ruler className="h-4 w-4" />,
  color: "from-pink-500 to-pink-600"
}];
interface StaticSpecBoxesProps {
  className?: string;
}
export function StaticSpecBoxes({
  className
}: StaticSpecBoxesProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3">
        {specifications.map((spec, index) => (
          <Card key={index} className="border-none shadow-md overflow-hidden">
            <div className={`bg-gradient-to-br ${spec.color} text-white`}>
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white/20 p-1.5 rounded backdrop-blur-sm">
                    {spec.icon}
                  </div>
                  <div className="text-xs font-medium opacity-90">
                    {spec.label}
                  </div>
                </div>
                <div className="text-sm font-bold leading-tight">
                  {spec.value}
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}