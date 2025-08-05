"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Facebook, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<string>("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="text-white" style={{ backgroundColor: "#6BA02E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/Logo-open-the-box-blanc.png"
                alt="Open The Box"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-green-100 mb-4">
              Le N°1 de la location d&apos;espaces professionnels au Togo.
              Bureaux, salles de conférence et espaces de réception à louer
              facilement à Lomé.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Louer */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Louer</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block hover:text-white transition-colors cursor-pointer"
                >
                  Bureaux privatifs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:text-white transition-colors cursor-pointer"
                >
                  Salles de réunion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:text-white transition-colors cursor-pointer"
                >
                  Salles de conférence
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:text-white transition-colors cursor-pointer"
                >
                  Espaces de formation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:text-white transition-colors cursor-pointer"
                >
                  Salles d&apos;événements
                </a>
              </li>
            </ul>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block hover:text-white transition-colors cursor-pointer"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:text-white transition-colors cursor-pointer"
                >
                  Tarifs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block hover:text-white transition-colors cursor-pointer"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Nous contacter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nous contacter</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-100" />
                <span className="text-green-100">+228 91 28 04 54</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-100" />
                <span className="text-green-100">contact@openthebox.space</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 my-8" />

        <div className="text-center text-green-100">
          <p>Copyright © {currentYear || "2025"} OTB, propulsé par Pandore</p>
        </div>
      </div>
    </footer>
  );
}
