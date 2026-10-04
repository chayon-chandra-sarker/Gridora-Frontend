"use client";

import {
  Activity,
  Bolt,
  Clock3,
  Gauge,
  TrendingDown,
  Wifi,
  Zap,
} from "lucide-react";

const energyData = [
  { day: "Mon", value: 45 },
  { day: "Tue", value: 60 },
  { day: "Wed", value: 52 },
  { day: "Thu", value: 35 },
  { day: "Fri", value: 70 },
  { day: "Sat", value: 50 },
  { day: "Sun", value: 82 },
];

const LiveEnergyCard = () => {
  return (
    <div className="group relative">
      {/* Outer Glow */}
      <div className="absolute -inset-4 -z-10 rounded-[40px] bg-cyan-500/10 opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Main Card */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#07111f] shadow-[0_20px_70px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-[0_25px_80px_rgba(6,182,212,0.10)]">
        {/* Decorative Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:32px_32px]" />

        {/* Top Cyan Glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative p-5 sm:p-7">
          {/* Header */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              {/* Energy Icon */}
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.08] shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]">
                <Bolt className="h-5 w-5 text-cyan-400" />

                <span className="absolute inset-0 rounded-2xl border border-cyan-400/0 transition-all duration-500 group-hover:border-cyan-400/20" />
              </div>

              {/* Title */}
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="truncate text-sm font-semibold text-white sm:text-base">
                    Live Energy Overview
                  </h3>

                  <span className="hidden rounded-full bg-cyan-400/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-cyan-400 sm:inline-block">
                    Live
                  </span>
                </div>

                <p className="mt-1 truncate text-[11px] text-slate-500">
                  Grid Node FE-04 • 4 Feeders Active
                </p>
              </div>
            </div>

            {/* Status */}
            <div className="flex shrink-0 items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.07] px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              </span>

              <span className="hidden text-[10px] font-medium text-emerald-400 sm:inline">
                Online
              </span>
            </div>
          </div>

          {/* Main Usage */}
          <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-2">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  Current Month Usage
                </p>

                <Activity className="h-3.5 w-3.5 text-cyan-400/60" />
              </div>

              <div className="mt-2 flex items-end gap-3">
                <span className="text-5xl font-bold tracking-[-0.05em] text-white sm:text-6xl">
                  128
                </span>

                <div className="mb-2">
                  <span className="text-sm font-semibold text-cyan-400">
                    kWh
                  </span>

                  <p className="mt-0.5 text-[10px] text-slate-600">
                    This month
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.05] px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10">
                <TrendingDown className="h-4 w-4 text-emerald-400" />
              </div>

              <div>
                <p className="text-sm font-semibold text-emerald-400">
                  8.4%
                </p>

                <p className="text-[10px] text-slate-500">
                  Less than last week
                </p>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="relative mt-7 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#050d19] p-4 sm:p-5">
            {/* Chart Glow */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-2/3 -translate-x-1/2 rounded-full bg-cyan-400/[0.04] blur-3xl" />

            {/* Chart Header */}
            <div className="relative mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-300">
                  Energy Consumption
                </p>

                <p className="mt-0.5 text-[10px] text-slate-600">
                  Last 7 days
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/[0.05] px-2.5 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </span>

                <span className="text-[9px] font-medium uppercase tracking-wider text-cyan-400">
                  Live
                </span>
              </div>
            </div>

            {/* Bars */}
            <div className="relative flex h-32 items-end gap-2 sm:h-36 sm:gap-3">
              {/* Horizontal Guides */}
              <div className="pointer-events-none absolute inset-x-0 top-0 border-t border-white/[0.035]" />
              <div className="pointer-events-none absolute inset-x-0 top-1/3 border-t border-white/[0.035]" />
              <div className="pointer-events-none absolute inset-x-0 top-2/3 border-t border-white/[0.035]" />

              {energyData.map(({ day, value }) => (
                <div
                  key={day}
                  className="group/bar relative flex h-full flex-1 items-end"
                >
                  {/* Tooltip */}
                  <div className="pointer-events-none absolute -top-8 left-1/2 z-20 -translate-x-1/2 scale-90 rounded-lg border border-cyan-400/10 bg-[#0b1728] px-2 py-1 text-[9px] font-medium text-cyan-400 opacity-0 shadow-xl transition-all duration-200 group-hover/bar:scale-100 group-hover/bar:opacity-100">
                    {value}%
                  </div>

                  {/* Bar */}
                  <div
                    className="relative w-full overflow-hidden rounded-t-lg bg-gradient-to-t from-cyan-500/30 via-cyan-400/60 to-cyan-300/80 transition-all duration-500 group-hover/bar:from-cyan-500/50 group-hover/bar:via-cyan-400/80 group-hover/bar:to-cyan-200"
                    style={{ height: `${value}%` }}
                  >
                    {/* Shine */}
                    <div className="absolute inset-x-0 top-0 h-px bg-cyan-200/70" />

                    {/* Inner Glow */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cyan-400/10 to-transparent" />
                  </div>
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="relative mt-3 flex justify-between">
              {energyData.map(({ day }) => (
                <span
                  key={day}
                  className="flex-1 text-center text-[9px] font-medium text-slate-600"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {/* Today's Draw */}
            <div className="group/stat flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/15 hover:bg-cyan-400/[0.035]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 transition-transform duration-300 group-hover/stat:scale-110">
                <Zap className="h-4 w-4 text-cyan-400" />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] text-slate-600">
                  Today&apos;s Draw
                </p>

                <p className="mt-0.5 text-sm font-semibold text-white">
                  18.4{" "}
                  <span className="text-[10px] font-normal text-slate-500">
                    kWh
                  </span>
                </p>
              </div>
            </div>

            {/* Power Status */}
            <div className="group/stat flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/15 hover:bg-emerald-400/[0.035]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 transition-transform duration-300 group-hover/stat:scale-110">
                <Wifi className="h-4 w-4 text-emerald-400" />
              </div>

              <div>
                <p className="text-[10px] text-slate-600">
                  Power Status
                </p>

                <p className="mt-0.5 text-sm font-semibold text-emerald-400">
                  Stable
                </p>
              </div>
            </div>

            {/* Peak */}
            <div className="group/stat flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/15 hover:bg-violet-400/[0.035]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 transition-transform duration-300 group-hover/stat:scale-110">
                <Gauge className="h-4 w-4 text-violet-400" />
              </div>

              <div>
                <p className="text-[10px] text-slate-600">
                  Peak Load
                </p>

                <p className="mt-0.5 text-sm font-semibold text-white">
                  7:30{" "}
                  <span className="text-[10px] font-normal text-slate-500">
                    PM
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between border-t border-white/[0.05] pt-4">
            <div className="flex items-center gap-2 text-[10px] text-slate-600">
              <Clock3 className="h-3.5 w-3.5" />
              Updated just now
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Grid connection healthy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveEnergyCard;