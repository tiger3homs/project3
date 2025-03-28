import React, { useState } from 'react';
import { Github, Twitter, Instagram, Linkedin, Globe, Mail, Sparkles } from 'lucide-react';

interface LinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const LinkButton: React.FC<LinkProps> = ({ href, icon, label, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group w-full p-4 flex items-center justify-between gap-3 rounded-xl transition-all duration-300 ease-out transform hover:scale-[1.02] ${
        isHovered ? 'translate-x-1' : ''
      }`}
      style={{ backgroundColor: `${color}08` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-lg transition-colors duration-300`}
          style={{ backgroundColor: `${color}15` }}
        >
          {icon}
        </div>
        <span className="font-medium text-gray-600">{label}</span>
      </div>
      <div
        className={`transform transition-transform duration-300 text-gray-400 ${
          isHovered ? 'translate-x-1' : ''
        }`}
      >
        →
      </div>
    </a>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl blur-2xl opacity-70" />
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur opacity-30" />
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300"
                  alt="Profile"
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold text-gray-700">Alex Chen</h1>
                  <Sparkles className="text-blue-400" size={24} />
                </div>
                <p className="text-gray-500 text-lg mb-4">Creative Developer & Digital Artist</p>
                <p className="text-gray-400">Crafting digital experiences that blend code and creativity</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2.5">
          <LinkButton
            href="https://github.com"
            icon={<Github size={22} className="text-gray-600" />}
            label="Check out my code"
            color="#718096"
          />
          <LinkButton
            href="https://twitter.com"
            icon={<Twitter size={22} className="text-blue-400" />}
            label="Follow my updates"
            color="#60A5FA"
          />
          <LinkButton
            href="https://instagram.com"
            icon={<Instagram size={22} className="text-pink-400" />}
            label="See my creative process"
            color="#F472B6"
          />
          <LinkButton
            href="https://linkedin.com"
            icon={<Linkedin size={22} className="text-blue-500" />}
            label="Connect professionally"
            color="#3B82F6"
          />
          <LinkButton
            href="https://portfolio.example.com"
            icon={<Globe size={22} className="text-indigo-400" />}
            label="Explore my portfolio"
            color="#818CF8"
          />
          <LinkButton
            href="mailto:hello@example.com"
            icon={<Mail size={22} className="text-green-400" />}
            label="Get in touch"
            color="#34D399"
          />
        </div>

        <footer className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-gray-100">
            <span className="text-sm text-gray-400">Made with ✨ by Alex Chen</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;