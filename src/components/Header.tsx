"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// Removed unused imports
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

  // Removed unused isActive function

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      // If contact section exists on current page, scroll to it
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // If no contact section on current page, redirect to homepage contact section
      window.location.href = "/#contact";
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
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-white" : "text-gray-700"
              } transition-colors duration-200`}
              style={{
                color: pathname === "/" ? "#8BBE3D" : undefined,
              }}
              onMouseEnter={(e) => {
                if (pathname !== "/") {
                  e.currentTarget.style.color = "#8BBE3D";
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== "/") {
                  e.currentTarget.style.color = "#6B7280"; // text-gray-700
                }
              }}
            >
              Location d&apos;espace
            </Link>
            <Link
              href="/domiciliation"
              className={`${
                pathname === "/domiciliation" ? "text-white" : "text-gray-700"
              } transition-colors duration-200`}
              style={{
                color: pathname === "/domiciliation" ? "#8BBE3D" : undefined,
              }}
              onMouseEnter={(e) => {
                if (pathname !== "/domiciliation") {
                  e.currentTarget.style.color = "#8BBE3D";
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== "/domiciliation") {
                  e.currentTarget.style.color = "#6B7280"; // text-gray-700
                }
              }}
            >
              Domiciliation
            </Link>
            <Link
              href="/open-cafe"
              className={`${
                pathname === "/open-cafe" ? "text-white" : "text-gray-700"
              } transition-colors duration-200`}
              style={{
                color: pathname === "/open-cafe" ? "#8BBE3D" : undefined,
              }}
              onMouseEnter={(e) => {
                if (pathname !== "/open-cafe") {
                  e.currentTarget.style.color = "#8BBE3D";
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== "/open-cafe") {
                  e.currentTarget.style.color = "#6B7280"; // text-gray-700
                }
              }}
            >
              L&apos;Open Café
            </Link>
            <Link
              href="/blog"
              className={`${
                pathname === "/blog" ? "text-white" : "text-gray-700"
              } transition-colors duration-200`}
              style={{
                color: pathname === "/blog" ? "#8BBE3D" : undefined,
              }}
              onMouseEnter={(e) => {
                if (pathname !== "/blog") {
                  e.currentTarget.style.color = "#8BBE3D";
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== "/blog") {
                  e.currentTarget.style.color = "#6B7280"; // text-gray-700
                }
              }}
            >
              Blog
            </Link>
            <button
              onClick={scrollToContact}
              className="flex items-center px-3 py-2 text-sm font-medium transition-colors"
              style={{
                color: "#6B7280", // text-gray-700 - same as inactive nav items
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#8BBE3D"; // hover to primary green
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#6B7280"; // back to gray
              }}
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/">
              <Button
                className="text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#8BBE3D" }}
              >
                Réserver un espace
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 hover:text-white"
            style={{
              color: "#8BBE3D",
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
              <div className="px-4 py-2 space-y-1">
                <Link
                  href="/"
                  className={`${
                    pathname === "/"
                      ? "text-white"
                      : "text-gray-700 hover:text-white"
                  } block py-3 text-lg font-medium transition-colors border-b border-gray-100 w-full text-left`}
                  style={{
                    color: pathname === "/" ? "#8BBE3D" : undefined,
                  }}
                  onClick={closeMobileMenu}
                >
                  Location d&apos;espace
                </Link>
                <Link
                  href="/domiciliation"
                  className={`${
                    pathname === "/domiciliation"
                      ? "text-white"
                      : "text-gray-700 hover:text-white"
                  } block py-3 text-lg font-medium transition-colors border-b border-gray-100 w-full text-left`}
                  style={{
                    color:
                      pathname === "/domiciliation" ? "#8BBE3D" : undefined,
                  }}
                  onClick={closeMobileMenu}
                >
                  Domiciliation
                </Link>
                <Link
                  href="/open-cafe"
                  className={`${
                    pathname === "/open-cafe"
                      ? "text-white"
                      : "text-gray-700 hover:text-white"
                  } block py-3 text-lg font-medium transition-colors border-b border-gray-100 w-full text-left`}
                  style={{
                    color: pathname === "/open-cafe" ? "#8BBE3D" : undefined,
                  }}
                  onClick={closeMobileMenu}
                >
                  L&apos;Open Café
                </Link>
                <Link
                  href="/blog"
                  className={`${
                    pathname === "/blog"
                      ? "text-white"
                      : "text-gray-700 hover:text-white"
                  } block py-3 text-lg font-medium transition-colors border-b border-gray-100 w-full text-left`}
                  style={{
                    color: pathname === "/blog" ? "#8BBE3D" : undefined,
                  }}
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
                <button
                  onClick={(e) => {
                    scrollToContact(e);
                    closeMobileMenu();
                  }}
                  className="block text-gray-700 hover:text-white py-3 text-lg font-medium transition-colors border-b border-gray-100 w-full text-left"
                  style={{
                    color: "#8BBE3D",
                  }}
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
