import { useState } from "react";
import {
  Star,
  BadgeCheck,
  MapPin,
  Phone,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const professionals = [
  {
    name: "ABC Electric",
    category: "Electrician",
    location: "Dallas, TX",
    rating: "4.9",
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Pro Paint Solutions",
    category: "Painter",
    location: "Austin, TX",
    rating: "4.8",
    reviews: 96,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Cool Air HVAC",
    category: "HVAC Technician",
    location: "Houston, TX",
    rating: "4.9",
    reviews: 74,
    image:
      "https://homealliance.com/_next/image?q=75&url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffoill0ir%2Fproduction%2F40cb75917f406df5bc5bb4fabe792be7e304f638-7360x4912.jpg%3Ffm%3Dwebp&w=3840",

  },
  {
    name: "GreenScape Pros",
    category: "Landscaper",
    location: "Plano, TX",
    rating: "4.9",
    reviews: 63,
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Elite Wood Works",
    category: "Lumber / Carpenter",
    location: "Dallas, TX",
    rating: "4.8",
    reviews: 91,
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Bright Electric Co.",
    category: "Electrician",
    location: "Fort Worth, TX",
    rating: "4.9",
    reviews: 142,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Fresh Coat Pros",
    category: "Painter",
    location: "Frisco, TX",
    rating: "4.7",
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Perfect Lawn Care",
    category: "Landscaper",
    location: "McKinney, TX",
    rating: "4.9",
    reviews: 119,
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=85",
  },
];

function FeaturedProfessionals() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 4;
  const maxIndex = professionals.length - visibleCount;

  const nextSlide = () => {
    setStartIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((current) =>
      current <= 0 ? maxIndex : current - 1
    );
  };

  const visibleProfessionals = professionals.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <section className="bg-white px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1400px]">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[15px] font-bold uppercase tracking-wide text-blue-600">
              Top Rated Professionals Near You
            </p>

            <h2 className="text-[36px] font-extrabold leading-tight text-[#10233F] md:text-[42px]">
              Highly Rated. Locally Trusted.
            </h2>
          </div>

          <button className="hidden items-center gap-2 text-[16px] font-bold text-blue-600 transition hover:text-blue-700 md:flex">
            View all professionals
            <ArrowIcon />
          </button>
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleProfessionals.map((professional) => (
              <div
                key={professional.name}
                className="overflow-hidden rounded-[18px] border border-[#e8edf3] bg-white shadow-[0_3px_15px_rgba(16,35,63,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,35,63,0.12)]"
              >

                {/* Image */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                  {/* Rating Badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-1 rounded-md bg-[#16a34a] px-2.5 py-1.5 text-[14px] font-bold text-white shadow-md">
                    <Star
                      size={15}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                    {professional.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-5 pt-5">

                  {/* Name + Verified */}
                  <div className="flex items-center gap-1.5">
                    <h3 className="truncate text-[20px] font-extrabold text-[#10233F]">
                      {professional.name}
                    </h3>

                    <BadgeCheck
                      size={18}
                      fill="#2563eb"
                      className="shrink-0 text-white"
                    />
                  </div>

                  {/* Category */}
                  <p className="mt-2 text-[15px] font-medium text-gray-500">
                    {professional.category}
                  </p>

                  {/* Location */}
                  <div className="mt-2 flex items-center gap-1.5 text-[15px] text-gray-500">
                    <MapPin
                      size={16}
                      className="text-gray-400"
                    />
                    {professional.location}
                  </div>

                  {/* Stars + Reviews */}
                  <div className="mt-4 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        fill="#fbbf24"
                        strokeWidth={1}
                        className="text-[#fbbf24]"
                      />
                    ))}

                    <span className="ml-2 text-[14px] font-semibold text-gray-500">
                      ({professional.reviews})
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="mt-5 grid grid-cols-2 gap-3">

                    <button className="h-12 rounded-xl border border-[#e5eaf0] bg-white text-[14px] font-bold text-[#10233F] transition hover:border-blue-600 hover:text-blue-600">
                      View Profile
                    </button>

                    <button className="flex h-12 items-center justify-center gap-2 rounded-xl border border-[#e5eaf0] bg-white text-[14px] font-bold text-[#10233F] transition hover:border-blue-600 hover:text-blue-600">
                      <Phone
                        size={17}
                        fill="currentColor"
                        className="text-blue-600"
                      />
                      Contact
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next professionals"
            className="absolute -right-5 top-1/2 z-20 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-gray-100 bg-white text-blue-600 shadow-[0_5px_25px_rgba(0,0,0,0.12)] transition hover:bg-blue-600 hover:text-white lg:flex"
          >
            <ChevronRight size={32} strokeWidth={1.8} />
          </button>

          {/* Left Arrow */}
          {startIndex > 0 && (
            <button
              onClick={prevSlide}
              aria-label="Previous professionals"
              className="absolute -left-5 top-1/2 z-20 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-gray-100 bg-white text-blue-600 shadow-[0_5px_25px_rgba(0,0,0,0.12)] transition hover:bg-blue-600 hover:text-white lg:flex"
            >
              <ChevronLeft size={32} strokeWidth={1.8} />
            </button>
          )}

        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-sm font-bold text-blue-600">
            View all professionals
            <ArrowIcon />
          </button>
        </div>

      </div>
    </section>
  );
}

function ArrowIcon() {
  return <ChevronRight size={19} />;
}

export default FeaturedProfessionals;