import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, MapPin } from "lucide-react";
import Image from "next/image";

interface PropertyCardProps {
  id: string;
  title: string;
  type: string;
  price: string;
  capacity: string;
  location: string;
  image: string;
  category: string;
}

export default function PropertyCard({
  title,
  type,
  price,
  capacity,
  location,
  image,
  category,
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 min-w-[300px]">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <div
            className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Category badge */}
            <div
              className="absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: "#8ABF37" }}
            >
              {category}
            </div>

            {/* Heart icon */}
            <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
              <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Price and Capacity */}
          <div className="flex justify-between items-start mb-2">
            <div className="text-2xl font-bold" style={{ color: "#8ABF37" }}>
              {price}
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <Users className="w-4 h-4 mr-1" />
              {capacity}
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
            {title}
          </h3>

          {/* Type */}
          <p className="text-gray-600 text-sm">{type}</p>
        </div>
      </CardContent>
    </Card>
  );
}
