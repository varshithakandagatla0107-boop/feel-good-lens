import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, BarChart3, Lightbulb, Home } from "lucide-react";

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "mood", label: "Mood Tracker", icon: Heart },
  { id: "trends", label: "Insights", icon: BarChart3 },
  { id: "wellness", label: "Wellness", icon: Lightbulb },
];

export const Navigation = ({ currentView, onViewChange }: NavigationProps) => {
  return (
    <Card className="p-2 shadow-soft">
      <nav className="flex space-x-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange(item.id)}
              className={`flex items-center space-x-2 transition-smooth ${
                isActive ? 'gradient-wellness text-white shadow-wellness' : ''
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{item.label}</span>
            </Button>
          );
        })}
      </nav>
    </Card>
  );
};