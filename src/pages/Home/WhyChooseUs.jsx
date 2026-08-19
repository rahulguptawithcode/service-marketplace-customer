import {
  ShieldCheck,
  Star,
  MapPin,
  MessageSquare,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified & Trusted",
    description:
      "All professionals are verified and background checked.",
  },
  {
    icon: Star,
    title: "Real Reviews",
    description:
      "See real reviews from real customers like you.",
  },
  {
    icon: MapPin,
    title: "Local Experts",
    description:
      "Find professionals in your area, ready to help.",
  },
  {
    icon: MessageSquare,
    title: "Easy & Fast",
    description:
      "Search, compare and connect in just a few clicks.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white px-6 py-14 md:py-16">
      <div className="mx-auto max-w-[1340px]">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-[13px] font-bold uppercase tracking-wide text-blue-600">
            Why Choose Us?
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-[#10233F] md:text-[30px]">
            We Make It Simple to Find the Right Professional
          </h2>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex items-start gap-4"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eef5ff]">
                  <Icon
                    size={27}
                    strokeWidth={1.8}
                    className="text-blue-600"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[15px] font-extrabold text-[#10233F]">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-5 text-gray-500">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;