import {
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import LiveEnergyCard from "./LiveEnergyCard";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-10 sm:py-20 lg:py-28">
      {/* ================= BACKGROUND ================= */}

      {/* Grid */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      {/* Cyan Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[130px]" />

      {/* Main Container */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
        {/* ================= LEFT CONTENT ================= */}

        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="
              inline-flex items-center gap-2 rounded-full
              border border-cyan-400/15
              bg-cyan-400/[0.06]
              px-3.5 py-2
              text-[10px] font-semibold uppercase
              tracking-[0.14em]
              text-cyan-600
              dark:text-cyan-400
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <Zap className="h-3.5 w-3.5" />

            Smart Electricity Management
          </div>

          {/* Heading */}
          <h1
            className="
              mt-6
              text-4xl font-bold leading-[1.08]
              tracking-[-0.035em]
              text-slate-900
              sm:text-5xl
              lg:text-6xl
              xl:text-[68px]
              dark:text-white
            "
          >
            <span className="block">Your Electricity
Services,</span>

            <span
              className="
                mt-1 block
                bg-gradient-to-r
                from-cyan-400
                via-cyan-500
                to-teal-400
                bg-clip-text
                text-transparent
              "
            >
              Simplified.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6 max-w-xl
              text-sm leading-7
              text-muted-foreground
              sm:text-base
              sm:leading-7
              lg:text-lg
            "
          >
            Monitor your electricity usage, manage bills, make secure
            payments, and stay connected with real-time power updates —
            all from one intelligent platform.
          </p>

          {/* ================= TRUST ITEMS ================= */}

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-400/10">
                <ShieldCheck className="h-3.5 w-3.5 text-cyan-500" />
              </div>

              Secure Telemetry
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-400/10">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              </div>

              Instant Verification
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-400/10">
                <Zap className="h-3.5 w-3.5 text-cyan-500" />
              </div>

              Smart Monitoring
            </div>
          </div>

        </div>

        {/* ================= RIGHT CARD ================= */}

        <div className="relative lg:pl-4">
          {/* Decorative ring */}
          <div
            className="
              pointer-events-none absolute
              -inset-5
              rounded-[40px]
              border border-cyan-400/[0.04]
              rotate-1
            "
          />

          <LiveEnergyCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;