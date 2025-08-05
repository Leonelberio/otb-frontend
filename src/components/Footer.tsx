import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-16" style={{ backgroundColor: "#6BA02E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Left Column - Company Info */}
          <div>
            <div className="text-2xl font-bold mb-6">OpenTheBox</div>
            <p className="text-green-100 leading-relaxed">
              Les espaces pour les professionnels à louer au Togo
            </p>
          </div>

          {/* Second Column - Louer */}
          <div>
            <h4 className="font-semibold mb-4">Louer</h4>
            <div className="space-y-2 text-green-100">
              <a
                href="#"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Bureaux
              </a>
              <a
                href="#"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Salle de conférences
              </a>
              <a
                href="#"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Coworking
              </a>
            </div>
          </div>

          {/* Third Column - Liens rapides */}
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <div className="space-y-2 text-green-100">
              <a
                href="#"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Biens à acheter
              </a>
              <a
                href="#"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Espaces à louer
              </a>
              <a
                href="#"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Actualités
              </a>
              <a
                href="#"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Création & Domiciliation d&apos;entreprise
              </a>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div>
            <h4 className="font-semibold mb-4">Nous contacter</h4>
            <div className="space-y-3 text-green-100 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-100" />
                <span>+228 91 28 04 54</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-100" />
                <span>contact@openthebox.space</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                <Youtube className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-green-100 text-sm">
              Copyright © {currentYear} OTB, propulsé par{" "}
              <span className="text-white font-semibold">Pandore</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
