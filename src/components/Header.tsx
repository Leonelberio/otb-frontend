import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/Logo-open-the-box.png"
              alt="Open The Box Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Location d&apos;espace
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Domiciliation
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              L&apos;Open Café
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center">
            <Button
              className="text-white hover:opacity-90"
              style={{ backgroundColor: "#8ABF37" }}
            >
              Réserver un espace
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
