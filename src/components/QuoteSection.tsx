"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import {
  Calendar as CalendarIcon,
  Building2,
  Clock,
  CreditCard,
  Phone,
  Users,
  MapPin,
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface Space {
  id: string;
  title: string;
  type: string;
  capacity: string;
  location: string;
  image: string;
  category: string;
}

const availableSpaces: Space[] = [
  {
    id: "1",
    title: "Salle de Réunion Executive",
    type: "Salle de conférence premium",
    capacity: "12 pers",
    location: "Rue de la Paix, Lomé",
    image: "/reunion-d-affaires.jpg",
    category: "Salle de conférence",
  },
  {
    id: "2",
    title: "Bureau Privé Moderne",
    type: "Espace de travail individuel",
    capacity: "2 pers",
    location: "Avenue de la Libération, Lomé",
    image: "/reunion-d-affaires.jpg",
    category: "Bureaux",
  },
  {
    id: "3",
    title: "Salle de Formation",
    type: "Espace formation et workshop",
    capacity: "25 pers",
    location: "Boulevard du 13 Janvier, Lomé",
    image: "/reunion-d-affaires.jpg",
    category: "Salle de formation",
  },
  {
    id: "4",
    title: "Open Space Collaboratif",
    type: "Espace de coworking ouvert",
    capacity: "1 pers",
    location: "Quartier Adidogomé, Lomé",
    image: "/reunion-d-affaires.jpg",
    category: "Bureaux",
  },
  {
    id: "5",
    title: "Salle de Réception VIP",
    type: "Espace événementiel haut de gamme",
    capacity: "50 pers",
    location: "Centre-ville, Lomé",
    image: "/reunion-d-affaires.jpg",
    category: "Salle de réception",
  },
  {
    id: "6",
    title: "Bureau d'Équipe",
    type: "Espace privé pour équipe",
    capacity: "6 pers",
    location: "Kodjoviakopé, Lomé",
    image: "/reunion-d-affaires.jpg",
    category: "Bureaux",
  },
];

const timeSlots = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const durationOptions = [
  { value: 1, label: "1 heure" },
  { value: 2, label: "2 heures" },
  { value: 3, label: "3 heures" },
  { value: 4, label: "4 heures" },
  { value: 5, label: "5 heures" },
  { value: 6, label: "6 heures" },
  { value: 7, label: "7 heures" },
  { value: 8, label: "Journée complète" },
];

export default function QuoteSection() {
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [duration, setDuration] = useState<number>(1);
  const [showQuote, setShowQuote] = useState(false);

  const calculateQuote = () => {
    if (!selectedSpace || !selectedDate || !selectedTime) return 0;

    // Placeholder calculation - you can implement actual pricing logic
    const basePrice = 10000; // Base price per hour
    if (duration >= 8) {
      return basePrice * 6; // Day rate
    } else {
      return basePrice * duration;
    }
  };

  const handleGetQuote = () => {
    if (selectedSpace && selectedDate && selectedTime) {
      setShowQuote(true);
    }
  };

  const handlePayment = () => {
    // Handle CashPay payment
    alert("Redirection vers CashPay...");
  };

  const handleCallback = () => {
    // Handle callback request
    alert("Nous vous rappellerons bientôt !");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Obtenir un devis pour une réservation d&apos;espace
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choisissez votre espace, sélectionnez vos dates et obtenez un devis
            instantané. Paiement sécurisé via CashPay ou demande de rappel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Selection Form */}
          <div className="space-y-8">
            {/* Step 1: Space Selection */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Building2
                  className="w-6 h-6 mr-2"
                  style={{ color: "#8ABF37" }}
                />
                1. Choisissez votre espace
              </h3>

              <Select
                value={selectedSpace?.id || ""}
                onValueChange={(value) => {
                  const space = availableSpaces.find((s) => s.id === value);
                  setSelectedSpace(space || null);
                }}
              >
                <SelectTrigger className="w-full h-16 p-3">
                  <SelectValue placeholder="Sélectionner un espace">
                    {selectedSpace ? (
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900">
                          {selectedSpace.title}
                        </span>
                      </div>
                    ) : (
                      "Sélectionner un espace"
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {availableSpaces.map((space) => (
                    <SelectItem key={space.id} value={space.id}>
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden">
                          <div
                            className="w-full h-full bg-cover bg-center"
                            style={{
                              backgroundImage: `url('${space.image}')`,
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900">
                            {space.title}
                          </div>
                          <div className="text-sm text-gray-600">
                            {space.type} • {space.capacity} • {space.location}
                          </div>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Selected Space Preview */}
              {selectedSpace && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${selectedSpace.image}')`,
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {selectedSpace.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {selectedSpace.type}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {selectedSpace.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {selectedSpace.capacity}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step 2: Date Selection */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <CalendarIcon
                  className="w-6 h-6 mr-2"
                  style={{ color: "#8ABF37" }}
                />
                2. Sélectionnez votre date
              </h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal p-3 h-auto",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? (
                      format(selectedDate, "PPP", { locale: fr })
                    ) : (
                      <span>Sélectionner une date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    locale={fr}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Step 3: Time and Duration */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2" style={{ color: "#8ABF37" }} />
                3. Horaires et durée
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Heure de début
                  </label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir une heure" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Durée
                  </label>
                  <Select
                    value={duration.toString()}
                    onValueChange={(value) => setDuration(Number(value))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir la durée" />
                    </SelectTrigger>
                    <SelectContent>
                      {durationOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value.toString()}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Button
              onClick={handleGetQuote}
              disabled={!selectedSpace || !selectedDate || !selectedTime}
              className="w-full text-white py-4 text-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#8ABF37" }}
            >
              Obtenir un devis
            </Button>
          </div>

          {/* Right Side - Quote Display */}
          <div className="bg-gray-50 rounded-xl p-8">
            {showQuote && selectedSpace && selectedDate ? (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Votre devis
                </h3>

                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Espace sélectionné:</span>
                    <span className="font-semibold">{selectedSpace.title}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-semibold">
                      {format(selectedDate, "PPP", { locale: fr })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Heure:</span>
                    <span className="font-semibold">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Durée:</span>
                    <span className="font-semibold">
                      {duration} heure{duration > 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-2xl" style={{ color: "#8ABF37" }}>
                        {calculateQuote().toLocaleString()} FCFA
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={handlePayment}
                    className="w-full text-white py-4 text-lg hover:opacity-90 flex items-center justify-center"
                    style={{ backgroundColor: "#8ABF37" }}
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Payer via CashPay
                  </Button>

                  <Button
                    onClick={handleCallback}
                    variant="outline"
                    className="w-full py-4 text-lg border-2 hover:bg-gray-50 flex items-center justify-center"
                    style={{ borderColor: "#8ABF37", color: "#8ABF37" }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Demander un rappel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 h-full flex items-center justify-center">
                <div>
                  <CalendarIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg">
                    Sélectionnez vos options pour obtenir un devis
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
