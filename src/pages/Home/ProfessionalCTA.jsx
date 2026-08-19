import { UserPlus, ArrowRight } from "lucide-react";

function ProfessionalCTA() {
  return (
    <section className="px-6 py-6 md:py-8">
      <div className="mx-auto max-w-[1340px]">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0878e8] via-[#0867df] to-[#0754d8] px-6 py-7 shadow-lg md:px-10 md:py-8">

          {/* Background decoration */}
          <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 right-40 h-44 w-44 rounded-full bg-white/5" />

          <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">

            {/* Left */}
            <div className="flex items-center gap-5">

              {/* Icon */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white shadow-md">
                <UserPlus
                  size={38}
                  strokeWidth={1.8}
                  className="text-[#f4b400]"
                />
              </div>

              {/* Text */}
              <div>
                <h2 className="text-2xl font-extrabold text-white md:text-[28px]">
                  Are You a Professional?
                </h2>

                <p className="mt-1 text-sm text-white/90 md:text-[15px]">
                  Join our network and get more customers for your business.
                </p>
              </div>

            </div>

            {/* Right */}
            <div className="flex shrink-0 flex-col items-center">
              <button className="group flex min-w-[205px] items-center justify-center gap-2 rounded-xl bg-[#ffbd00] px-7 py-4 text-sm font-extrabold text-[#10233F] shadow-md transition duration-300 hover:bg-[#ffc82e] hover:shadow-lg">

                List Your Business

                <ArrowRight
                  size={19}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </button>

              <span className="mt-2 text-xs font-medium text-white/80">
                It's free and easy to get started! →
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalCTA;