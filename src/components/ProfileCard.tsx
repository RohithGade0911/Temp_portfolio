import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ProfileCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  socialLinks?: {
    name: string;
    icon: string;
    url: string;
  }[];
}

export default function ProfileCard({
  imageSrc,
  title,
  subtitle,
  socialLinks = []
}: ProfileCardProps) {
  return (
    <Card className="relative w-80 h-96 overflow-hidden rounded-2xl border-0 shadow-xl">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="Profile background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      
      {/* Content Overlay */}
      <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {/* Main Text Content */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-1 drop-shadow-lg">
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
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={16}
                  height={16}
                  className="filter brightness-0 invert"
                />
              </a>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
