import React from "react";

interface Offering {
  image: string;
  name: string;
  description: string;
  points: string[];
}

interface OfferingsGridProps {
  offerings: Offering[];
}

const OfferingsGrid: React.FC<OfferingsGridProps> = ({ offerings }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-24 pb-12">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="bg-[#0B1617] rounded-lg overflow-hidden 
                 shadow-[0_4px_20px_rgba(0,0,0,0.6)] 
                 hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)] 
                 transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative h-60 w-full">
              <img
                src={offering.image}
                alt={offering.name}
                className="w-full h-full object-cover"
              />
              {/* Bottom shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                {offering.name}
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                {offering.description}
              </p>
              <ul className="list-disc list-inside text-gray-200 text-sm space-y-1">
                {offering.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferingsGrid;
