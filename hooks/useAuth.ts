'use client';

import { useAuth as useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useAuth = () => {
  const auth = useAuthContext();
  const router = useRouter();

  return {
    ...auth,
    redirectToLogin: () => router.push('/examples/authentication'),
    redirectToDashboard: () => router.push('/examples/dashboard')
  };
};

export const useRequireAuth = () => {
  const { isAuthenticated, redirectToLogin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      redirectToLogin();
    }
  }, [isAuthenticated, redirectToLogin]);

  return { isAuthenticated };
};

export const useRedirectIfAuthenticated = () => {
  const { isAuthenticated, redirectToDashboard } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      redirectToDashboard();
    }
  }, [isAuthenticated, redirectToDashboard]);

  return { isAuthenticated };
};