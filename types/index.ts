export interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
  mobile: string;
}

export interface LoginFormValues {
  mobile: string;
}

export interface AuthContextType {
  user: User | null;
  login: (mobile: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}