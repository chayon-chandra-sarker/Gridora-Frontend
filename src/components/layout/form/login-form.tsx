"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { Eye, EyeOff, LockKeyhole, Mail, ArrowRight, Zap } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FieldLabel, FieldSeparator } from "@/components/ui/field";
import { loginSchema } from "@/validation";
import {  useGoogleOAuth, useLogin } from "@/hooks";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/toast";
import { Spinner } from "@/components/ui/spinner";
import { GoogleLogin } from "@react-oauth/google";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { mutate: login, isPending: loginPending } = useLogin();
  const {mutate:googleLogin} = useGoogleOAuth();
  

  const form = useForm({
    defaultValues: {
      email: "chayon@gmail.com",
      password: "12345678",
    },

    validators: {
      onSubmit: loginSchema,
    },

    onSubmit: ({ value }) => {
      const loginData = {
        email: value.email,
        password: value.password,
      };
      login(loginData, {
        onSuccess: () => {
          toast.add({
            description: "Login successfully",
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
  const handleGoogleSuccess = (credentialResponse: { credential?: string }) => {
    const idToken = credentialResponse.credential;
    if (!idToken) {
      toast.add({
        description: "Something went wrong. Please try again",
        type: "error",
      });
      return;
    }
    googleLogin({idToken}, {
      onSuccess:()=>{
         toast.add({
            description: "Logged in successfully",
            type: "success",
          });
          router.push("/");
      },
      onError:(err)=>{
         toast.add({
            description:
              err.message || "Something went wrong. Please try again",
            type: "error",
          });
      },
    })
  };
  const handleGoogleError = () => {
    toast.add({
      description: "Something went wrong. Please try again",
      type: "error",
    });
  };
  return (
    <div>
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-80 w-80 animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />

        <div
          className="absolute -bottom-32 -right-32 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl"
          style={{ animationDelay: "1s" }}
        />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="group mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 shadow-lg shadow-cyan-500/20 transition-transform duration-300 hover:scale-110">
              <Zap className="h-7 w-7 fill-slate-950 text-slate-950 transition-transform duration-300 group-hover:rotate-12" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white">
              Welcome back
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Sign in to continue to your Gridora account
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
            {/* Email */}
            <form.Field
              name="email"
              validators={{
                onBlur: loginSchema.shape.email,
              }}
            >
              {(field) => {
                const hasError = field.state.meta.errors.length > 0;

                return (
                  <div className="space-y-2">
                    <FieldLabel className="text-sm font-medium text-slate-200">
                      Email address
                    </FieldLabel>

                    <div className="group relative">
                      <Mail
                        className={`pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 transition-colors duration-200 ${
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
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        className={`h-12 border-white/10 bg-white/[0.05] pl-11 pr-4 text-white placeholder:text-slate-500 transition-all duration-200 focus:border-cyan-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-400/10 ${
                          hasError
                            ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/10"
                            : ""
                        }`}
                      />
                    </div>

                    {hasError && (
                      <p className="animate-in fade-in slide-in-from-top-1 text-xs text-red-400 duration-200">
                        {field.state.meta.errors[0]?.message}
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
                onBlur: loginSchema.shape.password,
              }}
            >
              {(field) => {
                const hasError = field.state.meta.errors.length > 0;

                return (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <FieldLabel className="text-sm font-medium text-slate-200">
                        Password
                      </FieldLabel>

                      <button
                        type="button"
                        className="text-xs font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <div className="group relative">
                      <LockKeyhole
                        className={`pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 transition-colors duration-200 ${
                          hasError
                            ? "text-red-400"
                            : "text-slate-500 group-focus-within:text-cyan-400"
                        }`}
                      />

                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={field.state.value}
                        autoComplete="current-password"
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        className={`h-12 border-white/10 bg-white/[0.05] pl-11 pr-11 text-white placeholder:text-slate-500 transition-all duration-200 focus:border-cyan-400/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-400/10 ${
                          hasError
                            ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/10"
                            : ""
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 transition-all duration-200 hover:bg-white/10 hover:text-cyan-400"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    {hasError && (
                      <p className="animate-in fade-in slide-in-from-top-1 text-xs text-red-400 duration-200">
                        {field.state.meta.errors[0]?.message}
                      </p>
                    )}
                  </div>
                );
              }}
            </form.Field>

            {/* Submit */}
            <Button
              disabled={loginPending}
              type="submit"
              className="group relative h-12 w-full overflow-hidden rounded-xl bg-cyan-400 font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-cyan-500/20 active:translate-y-0"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loginPending ? (
                  <>
                    {" "}
                    <Spinner /> Submitting
                  </>
                ) : (
                  "Submit"
                )}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </form>

          <FieldSeparator className="my-5">Or</FieldSeparator>

          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          ></GoogleLogin>

          {/* Register */}
          <div className="mt-7 text-center">
            <p className="text-sm text-slate-400">
              Don't have an account?{" "}
              <button
                type="button"
                className="font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
              >
                Create account
              </button>
            </p>
          </div>

          {/* Security text */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
            <LockKeyhole className="h-3.5 w-3.5" />
            <span>Your information is securely protected</span>
          </div>
        </div>

        {/* Bottom branding */}
        <p className="mt-6 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Gridora. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
