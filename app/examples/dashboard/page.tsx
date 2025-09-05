'use client';

import { useEffect } from 'react';
import { useAuth, useRequireAuth } from '@/hooks/useAuth';
import LogoutButton from '@/app/examples/authentication/components/logout';
// import { Metadata } from "next";


// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Example dashboard app built using the components.",
// };

export default function DashboardPage() {
  
  useRequireAuth();
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">داشبورد</h1>
          <LogoutButton />
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              خوش آمدید، {user.name}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              اطلاعات حساب شما
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">تصویر پروفایل</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <img 
                    src={user.picture} 
                    alt="Profile" 
                    className="h-16 w-16 rounded-full"
                  />
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">ایمیل</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.email}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">شماره موبایل</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" >
                  {user.mobile}
                </dd>
              </div>

            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
