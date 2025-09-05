'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

interface LogoutButtonProps {
  variant?: 'default' | 'outline' | 'destructive' | 'ghost' | 'link' | 'secondary';
  className?: string;
}

export default function LogoutButton({ 
  variant = 'outline', 
  className 
}: LogoutButtonProps) {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Button 
      onClick={handleLogout} 
      variant={variant}
      className={className}
    >
      خروج
    </Button>
  );
}