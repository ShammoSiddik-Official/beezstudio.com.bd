import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { api, type AdminUser } from "@/lib/api";

interface AuthContextValue {
  user: AdminUser | null;
  isLoading: boolean;
  setupRequired: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [setupRequired, setSetupRequired] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        const { setupRequired } = await api.setupStatus();
        setSetupRequired(setupRequired);
        if (setupRequired) { setIsLoading(false); return; }
      } catch {
        // ignore, proceed to auth check
      }

      const token = localStorage.getItem("beez_admin_token");
      if (!token) { setIsLoading(false); return; }

      try {
        const me = await api.me();
        setUser(me);
      } catch {
        localStorage.removeItem("beez_admin_token");
      } finally {
        setIsLoading(false);
      }
    }
    init();
  }, []);

  async function login(username: string, password: string) {
    const { token, user } = await api.login(username, password);
    localStorage.setItem("beez_admin_token", token);
    setUser(user);
    setSetupRequired(false);
  }

  function logout() {
    localStorage.removeItem("beez_admin_token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, setupRequired, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
