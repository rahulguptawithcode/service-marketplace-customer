import { Search, GitCompare, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Search",
    description:
      "Tell us what service you need and where you need it.",
  },
  {
    number: "02",
    icon: GitCompare,
    title: "Compare",
    description:
      "Browse local professionals, ratings, reviews, and services.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Connect",
    description:
      "Contact the professional directly and get your project started.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-[#f7f9fc] px-6 py-20">
      <div className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-600">
            How It Works
          </p>

          <h2 className="text-4xl font-bold text-[#10233F] md:text-5xl">
            Find the Right Professional
            <span className="text-blue-600"> in 3 Simple Steps</span>
          </h2>

          <p className="mt-4 text-gray-500">
            Getting the help you need has never been easier.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Number */}
                <div className="absolute right-6 top-5 text-4xl font-extrabold text-gray-100">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
                  <Icon
                    size={34}
                    strokeWidth={1.8}
                    className="text-blue-600"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#10233F]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;