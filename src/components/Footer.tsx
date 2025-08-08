import { Hand, Heart, Sprout, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold">Presbyterian Medical Care Centre</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing compassionate, faith-based mental health and substance abuse recovery 
              services in Nakuru, Kenya. Healing begins here.
            </p>
            <div className="flex space-x-4">
              <Hand className="w-6 h-6 text-emerald-400" />
              <Heart className="w-6 h-6 text-emerald-400" />
              <Sprout className="w-6 h-6 text-emerald-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#donations" className="text-gray-300 hover:text-white transition-colors">Donate</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Engashura - Kwa Buda Stage<br/>Nakuru-Bahati Road</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>0117 684 003 / 0735 269 968</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:presbyterianmedcare2025@gmail.com" className="hover:text-white break-all">presbyterianmedcare2025@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Presbyterian Medical Care Centre. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
