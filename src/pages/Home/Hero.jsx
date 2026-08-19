import heroImage from "../../assets/hero.png";

const trustPoints = [
  { icon: "\u2713", title: "Trusted", subtitle: "Professionals" },
  { icon: "\u2713", title: "Verified", subtitle: "Professionals" },
  { icon: "\u2605", title: "Real Reviews", subtitle: "You Can Trust" },
];

function Hero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[#061b35] md:min-h-[620px] lg:min-h-[650px]">
      {/* Background / Professional Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] md:left-auto md:right-0 md:w-[72%] md:object-center lg:top-0 lg:h-full lg:w-[58%]"
        />

        {/* Mobile and tablet overlay */}
        <div className="absolute inset-0 bg-[#061b35]/75 md:bg-gradient-to-r md:from-[#061b35] md:via-[#061b35]/90 md:to-[#061b35]/45 lg:hidden" />

        {/* Original desktop overlay */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#061b35] via-[#061b35]/95 via-50% to-transparent lg:block" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1400px] items-center px-4 py-12 pb-16 sm:px-6 md:min-h-[620px] md:py-14 lg:min-h-[650px] lg:px-8 lg:py-0">
        <div className="w-full max-w-[650px] lg:pt-4">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#ffbf00] sm:mb-4 sm:text-base lg:mb-5 lg:text-[18px]">
            Find Trusted Local Professionals
          </p>

          <h1 className="text-[38px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[48px] md:text-[52px] lg:text-[58px] lg:leading-[1.05]">
            FIND TRUSTED
            <br />
            <span className="text-[#ffbf00]">PROFESSIONALS</span>
            <br />
            NEAR YOU
          </h1>

          <p className="mt-5 max-w-[580px] text-base leading-7 text-white/90 sm:text-lg lg:mt-7 lg:text-[20px] lg:leading-8">
            Find skilled local experts for your home and business needs.
          </p>

          {/* Trust points stack on mobile and sit in one row from tablet onward. */}
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-10 lg:flex lg:items-center lg:gap-10">
            {trustPoints.map((point) => (
              <div key={point.title} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#ffbf00] text-lg text-[#ffbf00] lg:h-11 lg:w-11 lg:text-xl">
                  {point.icon}
                </div>
                <div>
                  <p className="font-bold text-white">{point.title}</p>
                  <p className="text-sm text-white/70">{point.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
