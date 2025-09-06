"use client";

import  React  from "react";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { validateIranianMobile } from '@/lib/validation';
import { useAuth } from '@/hooks/useAuth';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
if(mobile.trim() === '')  {
      setError('شماره موبایل نمی‌تواند خالی باشد');
      return;
    } 
  else if (!validateIranianMobile(mobile) ) {
      setError('شماره موبایل معتبر نیست');
      return;
    }

    setIsLoading(true);
    try {
      const success = await login(mobile);
      if (success) {
        router.push('/examples/dashboard');
      } else {
        setError('خطا در ورود');
      }
    } catch (err) {
      setError('خطا در ورود');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit} >
        <div className="grid gap-2" >
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="mobileNumber">
              شماره موبایل
            </Label>

             <Input
                id="mobile"
                name="mobile"
                type="tel"
                autoComplete="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="09xxxxxxxxx"
              />
          </div>
            {error && <p dir="rtl" className="mt-2 text-sm text-red-600">{error}</p>}
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            ورود
          </Button>
        </div>
      </form>
      {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button> */}
    </div>
  );
}
