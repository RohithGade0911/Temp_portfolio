import ProfileCard from "@/components/ProfileCard";
import AdvancedProfileCard from "@/components/AdvancedProfileCard";

export default function DemoPage() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "/file.svg",
      url: "https://linkedin.com/in/zara-dar"
    },
    {
      name: "GitHub",
      icon: "/globe.svg", 
      url: "https://github.com/zara-dar"
    },
    {
      name: "Twitter",
      icon: "/window.svg",
      url: "https://twitter.com/zara-dar"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Profile Card Components
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Basic Profile Card */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white text-center">
              Basic Profile Card
            </h2>
            <ProfileCard
              imageSrc="/profile.jpg"
              title="Zara Dar (Darcy)"
              subtitle="STEM Gal | PhD Dropout | Content Creator"
              socialLinks={socialLinks}
            />
          </div>

          {/* Advanced Profile Card - Medium Gradient */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white text-center">
              Advanced Card (Medium)
            </h2>
            <AdvancedProfileCard
              imageSrc="/profile.jpg"
              title="Zara Dar (Darcy)"
              subtitle="STEM Gal | PhD Dropout | Content Creator"
              socialLinks={socialLinks}
              gradientIntensity="medium"
            />
          </div>

          {/* Advanced Profile Card - Strong Gradient */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white text-center">
              Advanced Card (Strong)
            </h2>
            <AdvancedProfileCard
              imageSrc="/profile.jpg"
              title="Zara Dar (Darcy)"
              subtitle="STEM Gal | PhD Dropout | Content Creator"
              socialLinks={socialLinks}
              gradientIntensity="strong"
            />
          </div>

          {/* Advanced Profile Card - Light Gradient */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white text-center">
              Advanced Card (Light)
            </h2>
            <AdvancedProfileCard
              imageSrc="/profile.jpg"
              title="Zara Dar (Darcy)"
              subtitle="STEM Gal | PhD Dropout | Content Creator"
              socialLinks={socialLinks}
              gradientIntensity="light"
            />
          </div>

          {/* Advanced Profile Card - No Overlay */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white text-center">
              No Gradient Overlay
            </h2>
            <AdvancedProfileCard
              imageSrc="/profile.jpg"
              title="Zara Dar (Darcy)"
              subtitle="STEM Gal | PhD Dropout | Content Creator"
              socialLinks={socialLinks}
              showOverlay={false}
            />
          </div>

          {/* Advanced Profile Card - Custom Styling */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white text-center">
              Custom Styling
            </h2>
            <AdvancedProfileCard
              imageSrc="/profile.jpg"
              title="Zara Dar (Darcy)"
              subtitle="STEM Gal | PhD Dropout | Content Creator"
              socialLinks={socialLinks}
              className="w-72 h-80"
              gradientIntensity="medium"
            />
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-12 space-y-2">
          <p>Instagram-style gradient overlay effect with modern social media design</p>
          <p>Hover effects, responsive design, and customizable gradient intensity</p>
          <p>Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui</p>
        </div>
      </div>
    </div>
  );
}
