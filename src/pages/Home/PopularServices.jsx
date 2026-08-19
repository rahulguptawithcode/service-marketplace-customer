import {
  Hammer,
  Zap,
  Paintbrush,
  Snowflake,
  Trees,
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Lumber / Carpenter",
    description: "Find skilled carpenters and lumber professionals.",
  },
  {
    icon: Zap,
    title: "Electrician",
    description: "Connect with trusted electrical professionals.",
  },
  {
    icon: Paintbrush,
    title: "Painter",
    description: "Find professional painters near you.",
  },
  {
    icon: Snowflake,
    title: "HVAC Technician",
    description: "Get reliable heating and cooling experts.",
  },
  {
    icon: Trees,
    title: "Landscaper",
    description: "Find experienced landscaping professionals.",
  },
];

function PopularServices() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-[1340px]">

        {/* Heading */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-600">
              Popular Services
            </p>

            <h2 className="text-4xl font-bold text-[#10233F]">
              What Do You Need Help With?
            </h2>

            <p className="mt-3 text-gray-500">
              Find trusted professionals for your home and business needs.
            </p>
          </div>

          <button className="hidden text-sm font-bold text-blue-600 hover:text-blue-700 md:block">
            View All Categories →
          </button>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-50 transition duration-300 group-hover:bg-blue-600">
                  <Icon
                    size={32}
                    strokeWidth={1.8}
                    className="text-blue-600 transition duration-300 group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#10233F]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-500">
                  {service.description}
                </p>

                {/* Link */}
                <div className="mt-5 text-sm font-bold text-blue-600">
                  View Professionals →
                </div>
              </div>
            );
          })}

        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <button className="text-sm font-bold text-blue-600">
            View All Categories →
          </button>
        </div>

      </div>
    </section>
  );
}

export default PopularServices;