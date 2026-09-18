
import Image from "next/image";
import Link from "next/link";

import LoginForm from "@/components/layout/form/login-form";
import Logo from "@/components/logo/Logo";

export default function LoginPage() {
  return (
    <main className="min-h-svh bg-slate-950">
      <div className="grid min-h-svh lg:grid-cols-2">
        {/* ================= LEFT SIDE ================= */}
        <section className="relative flex flex-col px-6 py-6 sm:px-10 lg:px-12 xl:px-16">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
          </div>

          {/* Logo */}
          <div className="relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
            >
              <Logo />
            </Link>
          </div>

          {/* Login Form */}
          <div className="relative z-10 flex flex-1 items-center justify-center py-12">
            <div className="w-full max-w-md">
              <LoginForm />
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 text-center lg:text-left">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Gridora. All rights reserved.
            </p>
          </div>
        </section>

        {/* ================= RIGHT SIDE ================= */}
        <section className="relative hidden overflow-hidden lg:block">
          {/* Image */}
          <Image
            src="/login.jpg"
            alt="Gridora electricity management"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-slate-950/55" />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/70 via-transparent to-slate-950/80" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-10 xl:p-14">
            {/* Top badge */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                Smart Utility Management
              </div>
            </div>

            {/* Center content */}
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Welcome to Gridora
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white xl:text-6xl">
                Manage your
                <span className="block text-cyan-400">
                  electricity smarter.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 xl:text-lg">
                Monitor electricity usage, manage bills, track payments,
                report complaints and stay informed about load shedding —
                all from one powerful platform.
              </p>

              {/* Features */}
              <div className="mt-8 grid max-w-lg grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-2xl font-bold text-white">24/7</p>
                  <p className="mt-1 text-xs text-slate-300">
                    Utility monitoring
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-2xl font-bold text-white">Secure</p>
                  <p className="mt-1 text-xs text-slate-300">
                    Payment system
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom quote */}
            <div className="max-w-lg">
              <div className="border-l-2 border-cyan-400 pl-4">
                <p className="text-sm italic leading-6 text-slate-300">
                  "Powering smarter decisions through simple, reliable and
                  connected utility management."
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

