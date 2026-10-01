"use client";

import React, { useState } from "react";
import { useForm } from "@tanstack/react-form";
import {
  User,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Zap,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/ui/field";
import { useRouter } from "next/navigation";
import { registerSchema } from "@/validation";
import { toast } from "@/components/ui/toast";
import { useRegistration } from "@/hooks";

const getFieldError = (error: unknown): string | undefined => {
  if (!error) return undefined;

  if (typeof error === "string") {
    return error;
  }

  if (
    typeof error === "object" &&
    error !== null &&
    "message" in error
  ) {
    return String(error.message);
  }

  return undefined;
};

const RegisterPage = () => {
  const router = useRouter();
  const {mutate:registration} = useRegistration();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validators: {
      onSubmit: registerSchema,
    },

    onSubmit: ({value}) => {
      const registrationData = {
        name:value.name,
        email:value.email,
        password:value.password,
        confirmPassword: value.confirmPassword,
        
        
      };

      registration(registrationData, {
        onSuccess: (res) => {
          if(!res.success){
            toast.add({
            title: "Server failure",
            description:"Something went wrong. Please try again",
            type: "error",
          });
          }

          toast.add({
            description: "Account created successfully",
            type: "success",
          });
          
          router.push("/");
        },
        onError: (err) => {
          toast.add({
            title: "Authorization failure",
            description:
            err.message || "Something went wrong. Please try again",
            type: "error",
          });
        },
      });

     

     
    },
  });

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-80 w-80 animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />

        <div
          className="absolute -bottom-32 -right-32 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl"
          style={{ animationDelay: "1s" }}
        />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      {/* Register Card */}
      <div className="relative z-10 mx-auto w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="group mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 shadow-lg shadow-cyan-500/20 transition-transform duration-300 hover:scale-110">
              <Zap className="h-7 w-7 fill-slate-950 text-slate-950 transition-transform duration-300 group-hover:rotate-12" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white">
              Create account
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Create your Gridora account to get started
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="space-y-5"
          >
            {/* Name */}
            <form.Field
              name="name"
              validators={{
                onBlur: ({ value }) =>
                  !value.trim() ? "Name is required" : undefined,
              }}
            >
              {(field) => {
                const hasError = field.state.meta.errors.length > 0;
                const errorMessage = getFieldError(
                  field.state.meta.errors[0],
                );

                return (
                  <div className="space-y-2">
                    <FieldLabel className="text-sm font-medium text-slate-200">
                      Full name
                    </FieldLabel>

                    <div className="group relative">
                      <User
                        className={`pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 ${
                          hasError
                            ? "text-red-400"
                            : "text-slate-500 group-focus-within:text-cyan-400"
                        }`}
                      />

                      <Input
                        type="text"
                        placeholder="Enter your name"
                        value={field.state.value}
                        autoComplete="name"
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                        onBlur={field.handleBlur}
                        className={`h-12 border-white/10 bg-white/[0.05] pl-11 pr-4 text-white placeholder:text-slate-500 focus:border-cyan-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-400/10 ${
                          hasError
                            ? "border-red-500/50 focus:border-red-500/50"
                            : ""
                        }`}
                      />
                    </div>

                    {hasError && errorMessage && (
                      <p className="text-xs text-red-400">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                );
              }}
            </form.Field>

            {/* Email */}
            <form.Field
              name="email"
              validators={{
                onBlur: ({ value }) => {
                  if (!value) return "Email is required";

                  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return "Please enter a valid email";
                  }

                  return undefined;
                },
              }}
            >
              {(field) => {
                const hasError = field.state.meta.errors.length > 0;
                const errorMessage = getFieldError(
                  field.state.meta.errors[0],
                );

                return (
                  <div className="space-y-2">
                    <FieldLabel className="text-sm font-medium text-slate-200">
                      Email address
                    </FieldLabel>

                    <div className="group relative">
                      <Mail
                        className={`pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 ${
                          hasError
                            ? "text-red-400"
                            : "text-slate-500 group-focus-within:text-cyan-400"
                        }`}
                      />

                      <Input
                        type="email"
                        placeholder="you@example.com"
                        value={field.state.value}
                        autoComplete="email"
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                        onBlur={field.handleBlur}
                        className={`h-12 border-white/10 bg-white/[0.05] pl-11 pr-4 text-white placeholder:text-slate-500 focus:border-cyan-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-400/10 ${
                          hasError
                            ? "border-red-500/50 focus:border-red-500/50"
                            : ""
                        }`}
                      />
                    </div>

                    {hasError && errorMessage && (
                      <p className="text-xs text-red-400">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                );
              }}
            </form.Field>

            {/* Password */}
            <form.Field
              name="password"
              validators={{
                onBlur: ({ value }) => {
                  if (!value) return "Password is required";

                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }

                  return undefined;
                },
              }}
            >
              {(field) => {
                const hasError = field.state.meta.errors.length > 0;
                const errorMessage = getFieldError(
                  field.state.meta.errors[0],
                );

                return (
                  <div className="space-y-2">
                    <FieldLabel className="text-sm font-medium text-slate-200">
                      Password
                    </FieldLabel>

                    <div className="group relative">
                      <LockKeyhole
                        className={`pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 ${
                          hasError
                            ? "text-red-400"
                            : "text-slate-500 group-focus-within:text-cyan-400"
                        }`}
                      />

                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={field.state.value}
                        autoComplete="new-password"
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                        onBlur={field.handleBlur}
                        className={`h-12 border-white/10 bg-white/[0.05] pl-11 pr-11 text-white placeholder:text-slate-500 focus:border-cyan-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-400/10 ${
                          hasError
                            ? "border-red-500/50 focus:border-red-500/50"
                            : ""
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword((prev) => !prev)
                        }
                        className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 hover:bg-white/10 hover:text-cyan-400"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    {hasError && errorMessage && (
                      <p className="text-xs text-red-400">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                );
              }}
            </form.Field>

            {/* Confirm Password */}
            <form.Field
              name="confirmPassword"
              validators={{
                onBlur: ({ value, fieldApi }) => {
                  if (!value) {
                    return "Please confirm your password";
                  }

                  if (
                    value !== fieldApi.form.getFieldValue("password")
                  ) {
                    return "Passwords do not match";
                  }

                  return undefined;
                },
              }}
            >
              {(field) => {
                const hasError = field.state.meta.errors.length > 0;
                const errorMessage = getFieldError(
                  field.state.meta.errors[0],
                );

                return (
                  <div className="space-y-2">
                    <FieldLabel className="text-sm font-medium text-slate-200">
                      Confirm password
                    </FieldLabel>

                    <div className="group relative">
                      <LockKeyhole
                        className={`pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 ${
                          hasError
                            ? "text-red-400"
                            : "text-slate-500 group-focus-within:text-cyan-400"
                        }`}
                      />

                      <Input
                        type={
                          showConfirmPassword ? "text" : "password"
                        }
                        placeholder="Confirm your password"
                        value={field.state.value}
                        autoComplete="new-password"
                        onChange={(e) =>
                          field.handleChange(e.target.value)
                        }
                        onBlur={field.handleBlur}
                        className={`h-12 border-white/10 bg-white/[0.05] pl-11 pr-11 text-white placeholder:text-slate-500 focus:border-cyan-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-400/10 ${
                          hasError
                            ? "border-red-500/50 focus:border-red-500/50"
                            : ""
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword((prev) => !prev)
                        }
                        className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 hover:bg-white/10 hover:text-cyan-400"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    {hasError && errorMessage && (
                      <p className="text-xs text-red-400">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                );
              }}
            </form.Field>

            {/* Register Button */}
            <Button
              type="submit"
              className="group relative h-12 w-full overflow-hidden rounded-xl bg-cyan-400 font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              <span className="flex items-center justify-center gap-2">
                Create account
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </form>

          {/* Login */}
          <div className="mt-7 text-center">
            <p className="text-sm text-slate-400">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
              >
                Sign in
              </button>
            </p>
          </div>

          {/* Security */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
            <LockKeyhole className="h-3.5 w-3.5" />
            <span>Your information is securely protected</span>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Gridora. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;