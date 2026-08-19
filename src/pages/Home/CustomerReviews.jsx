import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    text: "Found a great electrician within minutes. He was professional, on time and the work was excellent!",
    name: "Jessica M.",
    location: "Dallas, TX",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  },
  {
    text: "The painter did an amazing job on our living room. Highly recommend!",
    name: "Mark T.",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  },
  {
    text: "Got multiple quotes and hired the best landscaper for my yard. Super easy process!",
    name: "Amanda R.",
    location: "Plano, TX",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
  },
  {
    text: "I found a reliable HVAC technician very quickly. Great service and very professional.",
    name: "David K.",
    location: "Houston, TX",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
  },
  {
    text: "The electrician arrived on time and fixed everything perfectly. Very easy experience.",
    name: "Sarah L.",
    location: "Frisco, TX",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=100&q=80",
  },
];

function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Maximum slide
  const maxIndex = isMobile ? reviews.length - 1 : reviews.length - 3;

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((current) =>
      current <= 0 ? maxIndex : current - 1
    );
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [isMobile, maxIndex]);

  // Touch start
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  // Touch move
  const handleTouchMove = (e) => {
    touchEnd.current = e.touches[0].clientX;
  };

  // Touch end
  const handleTouchEnd = () => {
    const distance = touchStart.current - touchEnd.current;

    // Swipe left
    if (distance > 50) {
      nextSlide();
    }

    // Swipe right
    if (distance < -50) {
      previousSlide();
    }
  };

  return (
    <section className="bg-white px-5 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-[1340px]">

        {/* Heading */}
        <div className="mb-9 text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-blue-600 md:text-[13px]">
            What Our Customers Say
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-[#10233F] md:text-[30px]">
            Real People. Real Experiences.
          </h2>
        </div>

        {/* Slider */}
        <div className="relative md:px-8">

          {/* Left Arrow */}
          <button
            onClick={previousSlide}
            aria-label="Previous review"
            className="absolute -left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-blue-600 shadow-md transition hover:bg-blue-600 hover:text-white md:-left-2 md:h-10 md:w-10"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Viewport */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: isMobile
                  ? `translateX(-${currentIndex * 100}%)`
                  : `translateX(-${currentIndex * 33.333333}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="w-full shrink-0 px-1 md:w-1/3 md:px-2"
                >
                  <div className="min-h-[245px] rounded-2xl border border-gray-100 bg-white px-5 py-5 shadow-[0_4px_20px_rgba(16,35,63,0.08)] md:px-6 md:py-6">

                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={15}
                          fill="#fbbf24"
                          className="text-[#fbbf24]"
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="mt-4 text-[13px] leading-6 text-[#26364d] md:min-h-[78px] md:text-[14px]">
                      "{review.text}"
                    </p>

                    {/* Customer */}
                    <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="h-10 w-10 rounded-full object-cover md:h-11 md:w-11"
                      />

                      <div>
                        <h3 className="text-sm font-extrabold text-[#10233F]">
                          {review.name}
                        </h3>

                        <p className="mt-0.5 text-xs text-gray-500">
                          {review.location}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next review"
            className="absolute -right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-blue-600 shadow-md transition hover:bg-blue-600 hover:text-white md:-right-2 md:h-10 md:w-10"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Review ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-6 bg-blue-600"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default CustomerReviews;