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
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface Space {
  id: string;
  name: string;
  type: string;
  capacity: number;
  pricePerHour: number;
  pricePerDay: number;
}

const availableSpaces: Space[] = [
  {
    id: "1",
    name: "Bureau Privatif A",
    type: "Bureau",
    capacity: 1,
    pricePerHour: 5000,
    pricePerDay: 25000,
  },
  {
    id: "2",
    name: "Bureau Privatif B",
    type: "Bureau",
    capacity: 2,
    pricePerHour: 7500,
    pricePerDay: 35000,
  },
  {
    id: "3",
    name: "Salle de Réunion",
    type: "Salle",
    capacity: 10,
    pricePerHour: 15000,
    pricePerDay: 75000,
  },
  {
    id: "4",
    name: "Salle de Conférence",
    type: "Salle",
    capacity: 20,
    pricePerHour: 25000,
    pricePerDay: 120000,
  },
  {
    id: "5",
    name: "Espace Coworking",
    type: "Coworking",
    capacity: 15,
    pricePerHour: 3000,
    pricePerDay: 15000,
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

    if (duration >= 8) {
      return selectedSpace.pricePerDay;
    } else {
      return selectedSpace.pricePerHour * duration;
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
              <div className="grid gap-3">
                {availableSpaces.map((space) => (
                  <div
                    key={space.id}
                    className={cn(
                      "p-4 border-2 rounded-lg cursor-pointer transition-all",
                      selectedSpace?.id === space.id
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                    onClick={() => setSelectedSpace(space)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {space.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {space.type} • {space.capacity} personne
                          {space.capacity > 1 ? "s" : ""}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          {space.pricePerHour.toLocaleString()} FCFA/h
                        </p>
                        <p className="text-sm text-gray-600">
                          {space.pricePerDay.toLocaleString()} FCFA/jour
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                    <span className="font-semibold">{selectedSpace.name}</span>
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
