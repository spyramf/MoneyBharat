
import React from "react";
import { 
  Heart,
  Shield,
  ShieldCheck,
  User,
  Car,
  Home,
  Umbrella,
  Briefcase,
  FileChartLine
} from "lucide-react";

// Mapping of icon names to their components
export const iconComponents = {
  Heart,
  Shield,
  ShieldCheck,
  User,
  Car,
  Home,
  Umbrella,
  Briefcase,
  FileChartLine
};

// Function to render an icon by name
export const renderIcon = (iconName: string, className?: string) => {
  const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
  
  if (!IconComponent) {
    console.error(`Icon ${iconName} not found`);
    return null;
  }
  
  return <IconComponent className={className || "h-6 w-6"} />;
};
