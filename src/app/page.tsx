import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-2">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-base text-gray-400 font-normal mb-4 italic">
          Too broke for the fancy portfolio, so here&apos;s my budget-friendly &apos;masterpiece&apos; till the real site escapes the pipeline 😉
        </p>
        <h1 className="text-4xl font-light text-gray-900 mb-3 tracking-tight">
          ROHITH GADE
        </h1>
        <div className="w-16 h-px bg-gray-300 mx-auto mb-4"></div>
        <p className="text-base text-gray-500 font-normal tracking-wide">
          AI Workflow Architect | Agentic Workflow Designer
        </p>
      </div>
      
      <div className="max-w-2xl w-full space-y-6">
        {/* Profile Image and Card Container */}
        <div className="relative group">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-[30rem] h-[35rem] z-20">
              <Image
                src="/profile.jpg"
                alt="Profile Photo"
                fill
                className="rounded-lg object-cover border-2 border-gray-200 shadow-lg transition-transform duration-300 hover:scale-110"
                priority
              />
              {/* No gradient overlay - clean look */}
            </div>
          </div>

          {/* Profile Card - Positioned below the image with overlap */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full" style={{ bottom: '-50%' }}>
            <Card className="border-0 shadow-lg mx-auto max-w-2xl z-10 cursor-pointer transition-transform duration-300 hover:scale-105">
              <CardContent className="pt-16 pb-8 px-8 text-center">
            {/* Name and Title */}
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
          
          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none rounded-lg" />
        </div>

        {/* About Me Section */}
        <Card className="border-0 shadow-lg mt-72">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-black mb-4">
              About Me
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                I&apos;m a passionate AI Automation Engineer specializing in AI-powered workflow automation using n8n. 
                I design intelligent agentic workflows that streamline business operations, reduce manual effort, 
                and enable scalable automation with minimal human intervention.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My expertise includes GPT-powered AI agents, embeddings, vector search, LangChain, and integrating 
                multiple APIs for seamless data flow. I&apos;m constantly exploring emerging AI automation trends to 
                create innovative solutions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
