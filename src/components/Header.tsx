"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    closeMobileMenu();
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/Logo-open-the-box.png"
                alt="Open The Box"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-green-600"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Location d&apos;espace
            </Link>
            <Link
              href="/domiciliation"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/domiciliation")
                  ? "text-green-600"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Domiciliation
            </Link>
            <Link
              href="/open-cafe"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/open-cafe")
                  ? "text-green-600"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              L&apos;Open Café
            </Link>
            <button
              onClick={scrollToContact}
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              className="text-white px-6 py-2 hover:opacity-90 transition-all duration-200"
              style={{ backgroundColor: "#8ABF37" }}
            >
              Réserver un espace
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-green-600"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      >
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src="/Logo-open-the-box.png"
                alt="Open The Box"
                width={100}
                height={35}
                className="h-7 w-auto"
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeMobileMenu}
              className="text-gray-700 hover:text-green-600"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="p-6">
            <div className="space-y-4">
              <Link
                href="/"
                className={`block py-3 text-lg font-medium transition-colors border-b border-gray-100 ${
                  isActive("/")
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
                onClick={closeMobileMenu}
              >
                Location d&apos;espace
              </Link>
              <Link
                href="/domiciliation"
                className={`block py-3 text-lg font-medium transition-colors border-b border-gray-100 ${
                  isActive("/domiciliation")
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
                onClick={closeMobileMenu}
              >
                Domiciliation
              </Link>
              <Link
                href="/open-cafe"
                className={`block py-3 text-lg font-medium transition-colors border-b border-gray-100 ${
                  isActive("/open-cafe")
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
                onClick={closeMobileMenu}
              >
                L&apos;Open Café
              </Link>
              <button
                onClick={scrollToContact}
                className="block text-gray-700 hover:text-green-600 py-3 text-lg font-medium transition-colors border-b border-gray-100 w-full text-left"
              >
                Contact
              </button>
            </div>

            {/* Mobile CTA Button */}
            <div className="mt-8">
              <Button
                className="w-full text-white py-3 text-lg hover:opacity-90 transition-all duration-200"
                style={{ backgroundColor: "#8ABF37" }}
                onClick={closeMobileMenu}
              >
                Réserver un espace
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Contact
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>+228 91 28 04 54</p>
                <p>contact@openthebox.space</p>
                <p>Lomé, Togo</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
