"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter, useSearchParams } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Field, FieldLabel } from "@/components/ui/field";
import { useEffect, useState } from "react";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Mail, ShieldCheck, RefreshCw } from "lucide-react";
import { useVerifyAccount } from "@/hooks";
import { toast } from "@/components/ui/toast";

const VerifyAccount = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email") || "";

  const [otp, setOtp] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const { mutate: verify, isPending: verifyPending } = useVerifyAccount();

  useEffect(() => {
    if (!email) {
      router.push("/");
    }
  }, [email, router]);

  const handleOTP = () => {
    if (otp.length !== 6) {
      setIsInvalid(true);
      return;
    }
    const verifyData = {
      email,
      otp,
    };
    verify(verifyData, {
      onSuccess: (res) => {
        if (!res.success) {
          toast.add({
            title: "Verification failure",
            description: "Something went wrong. Please try again",
            type: "error",
          });
        }

        toast.add({
          description: "Verification successfully",
          type: "success",
        });
        router.push("/");
      },
      onError: (err) => {
        toast.add({
          title: "Verification failure",
          description: err.message || "Something went wrong. Please try again",
          type: "error",
        });
      },
    });
  };

  const handleResend = () => {
    console.log("Resend OTP to:", email);
  };

  if (!email) {
    return null;
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-background via-background to-muted/40 px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <Card className="w-full max-w-md overflow-hidden border-border/60 bg-background/95 shadow-xl backdrop-blur-sm">
          {/* Top Icon Section */}
          <CardHeader className="space-y-5 px-5 pb-6 pt-8 text-center sm:px-8 sm:pt-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/5 sm:h-20 sm:w-20">
              <ShieldCheck className="h-8 w-8 text-primary sm:h-10 sm:w-10" />
            </div>

            <div className="space-y-2">
              <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
                Verify Your Account
              </CardTitle>

              <CardDescription className="mx-auto max-w-sm text-sm leading-6 sm:text-base">
                Enter the 6-digit verification code we sent to your email.
              </CardDescription>
            </div>

            {/* Email */}
            {email && (
              <div className="mx-auto flex w-full max-w-sm items-center gap-2 rounded-lg border bg-muted/50 px-3 py-2.5 text-left">
                <Mail className="h-4 w-4 shrink-0 text-primary" />

                <p className="min-w-0 truncate text-sm font-medium">{email}</p>
              </div>
            )}
          </CardHeader>

          <CardContent className="px-5 pb-6 sm:px-8">
            <form
              id="otp-form"
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleOTP();
              }}
            >
              <Field data-invalid={isInvalid} className="space-y-3">
                <FieldLabel htmlFor="otp" className="text-sm font-semibold">
                  Verification Code
                </FieldLabel>

                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(value) => {
                      setOtp(value);
                      if (isInvalid) {
                        setIsInvalid(false);
                      }
                    }}
                    autoComplete="one-time-code"
                    name="otp"
                    id="otp"
                    pattern={REGEXP_ONLY_DIGITS}
                  >
                    <InputOTPGroup className="gap-1.5 sm:gap-2">
                      <InputOTPSlot
                        index={0}
                        className="h-12 w-10 text-lg sm:h-14 sm:w-12 sm:text-xl"
                      />
                      <InputOTPSlot
                        index={1}
                        className="h-12 w-10 text-lg sm:h-14 sm:w-12 sm:text-xl"
                      />
                      <InputOTPSlot
                        index={2}
                        className="h-12 w-10 text-lg sm:h-14 sm:w-12 sm:text-xl"
                      />
                      <InputOTPSlot
                        index={3}
                        className="h-12 w-10 text-lg sm:h-14 sm:w-12 sm:text-xl"
                      />
                      <InputOTPSlot
                        index={4}
                        className="h-12 w-10 text-lg sm:h-14 sm:w-12 sm:text-xl"
                      />
                      <InputOTPSlot
                        index={5}
                        className="h-12 w-10 text-lg sm:h-14 sm:w-12 sm:text-xl"
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                <p className="text-center text-xs text-muted-foreground sm:text-sm">
                  The verification code is valid for a limited time.
                </p>
              </Field>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 border-t bg-muted/20 px-5 py-5 sm:flex-row sm:justify-between sm:px-8">
            <Button
              type="button"
              variant="outline"
              onClick={handleResend}
              className="w-full sm:w-auto"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Resend OTP
            </Button>

            <Button
              type="submit"
              form="otp-form"
              disabled={otp.length !== 6}
              className="w-full sm:w-auto"
            >
              Verify Account
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default VerifyAccount;
