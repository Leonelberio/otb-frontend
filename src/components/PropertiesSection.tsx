import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PropertiesSection() {
  const properties = [
    {
      title: "Serpong",
      type: "House",
      color: "bg-orange-500",
    },
    {
      title: "Permata Hijau Suites",
      type: "Suite",
      color: "bg-sky-400",
    },
    {
      title: "Cahaya Alam Sari",
      type: "Apartment",
      color: "bg-orange-400",
    },
    {
      title: "SouthHill Apartment",
      type: "Apartment",
      style: { backgroundColor: "#8BBE3D" },
    },
    {
      title: "Pluta Residences",
      type: "Residence",
      color: "bg-teal-500",
    },
    {
      title: "South Hill",
      type: "Suite",
      color: "bg-gray-400",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Our Recommended
              <br />
              Comfortable Residence
            </h2>
            <p className="text-gray-600 max-w-md"
              style={{
                lineHeight: "30px",
                letterSpacing: "-1px",
              }}>
              We have a recommendation for a confortable home for your family.
              There with a garden and spacious design, please see our residence
              recommendations below:
            </p>
          </div>
          <Button
            className="text-white px-8 hidden md:block hover:opacity-90"
            style={{ backgroundColor: "#8BBE3D" }}
          >
            See More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {properties.map((property, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                <div
                  className={`h-48 relative overflow-hidden ${
                    property.color || ""
                  }`}
                  style={property.style}
                >
                  {/* Property image placeholder */}
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-lg font-semibold">
                      {property.title}
                    </div>
                    <div className="text-sm opacity-90">{property.type}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button
            className="text-white px-8 hover:opacity-90"
            style={{ backgroundColor: "#8BBE3D" }}
          >
            See More
          </Button>
        </div>
      </div>
    </section>
  );
}
