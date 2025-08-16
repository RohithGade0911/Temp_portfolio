import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color?: string;
}

interface ProfileCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  socialLinks?: SocialLink[];
  className?: string;
  gradientIntensity?: "light" | "medium" | "strong";
  showOverlay?: boolean;
  onClick?: () => void;
}

export default function AdvancedProfileCard({
  imageSrc,
  title,
  subtitle,
  socialLinks = [],
  className,
  gradientIntensity = "medium",
  showOverlay = true,
  onClick
}: ProfileCardProps) {
  const gradientClasses = {
    light: "bg-gradient-to-t from-black/60 via-black/20 to-transparent",
    medium: "bg-gradient-to-t from-black/80 via-black/30 to-transparent",
    strong: "bg-gradient-to-t from-black/90 via-black/50 to-transparent"
  };

  return (
    <Card 
      className={cn(
        "relative w-80 h-96 overflow-hidden rounded-2xl border-0 shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105",
        className
      )}
      onClick={onClick}
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="Profile background"
        fill
        className="object-cover transition-transform duration-300 hover:scale-110"
        priority
      />
      
      {/* Gradient Overlay */}
      {showOverlay && (
        <div className={cn(
          "absolute inset-0 transition-opacity duration-300",
          gradientClasses[gradientIntensity]
        )} />
      )}
      
      {/* Content Overlay */}
      <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {/* Main Text Content */}
        <div className="mb-4 space-y-2">
          <h2 className="text-2xl font-bold drop-shadow-lg leading-tight">
            {title}
          </h2>
          <p className="text-sm text-gray-200 drop-shadow-md leading-relaxed">
            {subtitle}
          </p>
        </div>
        
        {/* Social Media Icons */}
        {socialLinks.length > 0 && (
          <div className="flex space-x-3">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                asChild
                className="w-8 h-8 p-0 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={16}
                    height={16}
                    className="filter brightness-0 invert"
                  />
                </a>
              </Button>
            ))}
          </div>
        )}
      </CardContent>
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
    </Card>
  );
}
