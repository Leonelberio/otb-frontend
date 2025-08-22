import { Users, Coffee, Wifi, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "150+",
    label: "Coworkers actifs",
  },
  {
    icon: Coffee,
    value: "24/7",
    label: "Café & Snacks",
  },
  {
    icon: Wifi,
    value: "1Gbps",
    label: "Fibre optique",
  },
  {
    icon: Clock,
    value: "7j/7",
    label: "Ouvert",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
