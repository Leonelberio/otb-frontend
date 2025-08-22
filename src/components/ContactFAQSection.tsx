"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Send,
  MessageCircle,
} from "lucide-react";
import SafeText from "@/components/ui/SafeText";

const faqData = [
  {
    question: "Comment réserver un espace chez Open The Box ?",
    answer:
      "Vous pouvez réserver un espace en ligne via notre plateforme, par téléphone au +228 91 28 04 54, ou directement sur place. Notre équipe vous accompagne dans le choix de l&apos;espace le plus adapté à vos besoins.",
  },
  {
    question: "Quels sont les horaires d&apos;ouverture ?",
    answer:
      "Open The Box est ouvert du lundi au dimanche, de 8h à 20h. Des horaires étendus peuvent être arrangés sur demande pour des événements spéciaux.",
  },
  {
    question: "Quels types d&apos;espaces proposez-vous ?",
    answer:
      "Nous proposons des bureaux privatifs, des salles de réunion et conférence, des espaces de formation, des salles d&apos;événements, et des espaces de coworking. Tous nos espaces sont équipés et opérationnels.",
  },
  {
    question: "Les espaces sont-ils équipés ?",
    answer:
      "Oui, tous nos espaces sont 100% équipés avec électricité garantie, wifi haut débit, écrans TV/projecteurs, sonorisation, et respectent toutes les normes de sécurité.",
  },
  {
    question: "Puis-je visiter les espaces avant de réserver ?",
    answer:
      "Absolument ! Nous proposons des visites gratuites sur rendez-vous 7j/7. Contactez-nous pour organiser une visite selon vos disponibilités.",
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer:
      "Nous acceptons les paiements en espèces, par virement bancaire, et via CashPay. Des facilités de paiement peuvent être arrangées pour les réservations longues durées.",
  },
];

export default function ContactFAQSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    alert("Message envoyé ! Nous vous recontacterons rapidement.");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl text-gray-900 mb-6"
            style={
              {
                fontWeight: 600,
                lineHeight: "26px",
                letterSpacing: "-1.6px",
                "@media (min-width: 768px)": {
                  lineHeight: "40px",
                },
              } as React.CSSProperties
            }
          >
            Contact & FAQ
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{
              lineHeight: "30px",
              letterSpacing: "-1px",
            }}
          >
            Une question ? Un projet ? Contactez-nous directement ou consultez
            nos réponses aux questions fréquentes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageCircle
                  className="w-6 h-6 mr-2"
                  style={{ color: "#8BBE3D" }}
                />
                Contactez-nous
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Votre nom"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+228 XX XX XX XX"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="votre@email.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) =>
                      handleInputChange("subject", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reservation">
                        Réservation d&apos;espace
                      </SelectItem>
                      <SelectItem value="visite">Demande de visite</SelectItem>
                      <SelectItem value="devis">Demande de devis</SelectItem>
                      <SelectItem value="information">
                        Demande d&apos;information
                      </SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={4}
                    required
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-white py-3 text-lg hover:opacity-90 transition-all duration-200"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Téléphone</p>
                  <p className="text-gray-600">+228 91 28 04 54</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">contact@openthebox.space</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Adresse</p>
                  <p className="text-gray-600">Lomé, Togo</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Horaires</p>
                  <p className="text-gray-600">Lun-Dim: 8h-20h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ */}
          <div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ChevronDown
                  className="w-6 h-6 mr-2"
                  style={{ color: "#8BBE3D" }}
                />
                Questions fréquentes
              </h3>

              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-left">
                      <SafeText as="span">{item.question}</SafeText>
                    </AccordionTrigger>
                    <AccordionContent>
                      <SafeText as="p">{item.answer}</SafeText>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Call to Action */}
            <div className="mt-8 bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-center text-white">
              <h4 className="text-xl font-bold mb-4">
                Besoin d&apos;aide immédiate ?
              </h4>
              <p className="mb-6 text-green-100">
                Notre équipe est disponible pour vous accompagner dans votre
                projet
              </p>
              <div className="space-y-3">
                <Button
                  variant="secondary"
                  className="w-full bg-white hover:bg-gray-100"
                  style={{
                    color: "#8BBE3D",
                  }}
                  onClick={() => window.open("tel:+22891280454")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler maintenant
                </Button>
                <Button
                  variant="secondary"
                  className="w-full bg-white hover:bg-gray-100"
                  style={{
                    color: "#8BBE3D",
                  }}
                  onClick={() => window.open("mailto:contact@openthebox.space")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Envoyer un email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
