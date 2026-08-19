import { Mail, ArrowRight } from "lucide-react";

function Newsletter() {
  return (
    <section className="bg-[#f7f9fc] px-6 py-12 md:py-14">
      <div className="mx-auto max-w-[1340px]">
        <div className="relative overflow-hidden rounded-2xl bg-[#10233F] px-6 py-10 md:px-12 md:py-12">

          {/* Background decoration */}
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-600/20" />
          <div className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-blue-500/10" />

          <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">

            {/* Text */}
            <div className="flex items-center gap-5 text-center lg:text-left">

              <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600 md:flex">
                <Mail size={28} className="text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-white md:text-[28px]">
                  Get Tips, Offers & Updates
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/70 md:text-[15px]">
                  Subscribe to our newsletter and never miss anything important.
                </p>
              </div>

            </div>

            {/* Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-[520px] flex-col gap-3 sm:flex-row"
            >
              <div className="flex h-13 flex-1 items-center rounded-xl bg-white px-4">
                <Mail
                  size={18}
                  className="mr-3 shrink-0 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-sm text-[#10233F] outline-none placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="group flex h-13 items-center justify-center gap-2 rounded-xl bg-[#ffbd00] px-6 text-sm font-extrabold text-[#10233F] transition hover:bg-[#ffc82e]"
              >
                Subscribe

                <ArrowRight
                  size={17}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;