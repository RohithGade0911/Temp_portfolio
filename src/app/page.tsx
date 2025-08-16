import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-2">
      <div className="max-w-2xl w-full space-y-6">
        {/* Profile Image and Card Container */}
        <div className="relative">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-[30rem] h-[35rem] z-20">
              <Image
                src="/profile.jpg"
                alt="Profile Photo"
                fill
                className="rounded-lg object-cover border-2 border-gray-200 shadow-lg"
                priority
              />
              {/* Gradient overlay for opacity effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-white via-transparent to-transparent" style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 10%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.6) 35%, rgba(255,255,255,0.3) 50%, transparent 70%, transparent 100%)' }}></div>
            </div>
          </div>

          {/* Profile Card - Positioned below the image with overlap */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full" style={{ bottom: '-40%' }}>
            <Card className="border-0 shadow-lg mx-auto max-w-2xl z-10">
              <CardContent className="pt-16 pb-8 px-8 text-center">
            {/* Name and Title */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-black mb-2">
                Rohith Gade
              </h1>
              <p className="text-gray-600 text-lg">
                AI Automation Engineer
              </p>
              <p className="text-gray-500 text-sm">
                AI Workflow Architect | Agentic Workflow Designer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-6">
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/rohithgade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                asChild
              >
                <a
                  href="https://github.com/RohithGade0911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                asChild
              >
                <a
                  href="mailto:rohithgade0911@gmail.com"
                  className="text-gray-700 hover:text-red-600"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 90598 13241</span>
              </div>
            </div>
          </CardContent>
            </Card>
          </div>
        </div>

        {/* About Me Section */}
        <Card className="border-0 shadow-lg mt-56">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-black mb-4">
              About Me
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm a passionate AI Automation Engineer specializing in AI-powered workflow automation using n8n. 
                I design intelligent agentic workflows that streamline business operations, reduce manual effort, 
                and enable scalable automation with minimal human intervention.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My expertise includes GPT-powered AI agents, embeddings, vector search, LangChain, and integrating 
                multiple APIs for seamless data flow. I'm constantly exploring emerging AI automation trends to 
                create innovative solutions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
