import { ShieldAlert, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const AccessDenied = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-background via-background to-red-50/40 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
        <div className="w-full text-center">
          {/* Icon */}
          <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
            <div className="absolute inset-0 rounded-full bg-red-500/10 blur-2xl" />

            <div className="relative flex h-full w-full items-center justify-center rounded-full border border-red-200 bg-white/80 shadow-xl shadow-red-500/10 backdrop-blur-sm dark:border-red-900/50 dark:bg-red-950/20">
              <ShieldAlert
                className="h-11 w-11 text-red-500 sm:h-14 sm:w-14"
                strokeWidth={1.6}
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-600 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
              Access Denied
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              You don&apos;t have access
              <span className="block text-red-500">to this page</span>
            </h1>

            <p className="mx-auto max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
              Sorry, you don&apos;t have the required permission to view this
              page. Please return to the homepage and continue browsing.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold transition-all hover:bg-muted sm:w-auto"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>

            <Link
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-all hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-red-500/30 sm:w-auto"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          {/* Bottom hint */}
          <p className="mt-8 text-xs text-muted-foreground">
            If you believe this is a mistake, please contact the administrator.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AccessDenied;
