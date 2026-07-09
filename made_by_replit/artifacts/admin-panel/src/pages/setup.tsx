import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Loader2, Eye, EyeOff, KeyRound } from "lucide-react";
import { api } from "@/lib/api";

export default function SetupPage() {
  const [step, setStep] = useState<"token" | "account">("token");
  const [setupToken, setSetupToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSetup(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) { setError("Passwords do not match"); return; }
    if (password.length < 8) { setError("Password must be at least 8 characters"); return; }
    setIsLoading(true);
    try {
      const { token } = await api.setup(setupToken, username, password, displayName);
      localStorage.setItem("beez_admin_token", token);
      // Hard reload so AuthContext re-initialises with the new user
      window.location.href = import.meta.env.BASE_URL;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Setup failed");
      if ((err as Error).message?.toLowerCase().includes("token")) setStep("token");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-14 h-14 bg-primary rounded-sm flex items-center justify-center mb-4 shadow-lg">
            <Shield size={26} className="text-primary-foreground" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground">First-Time Setup</h1>
          <p className="text-muted-foreground text-sm mt-1 text-center">Create the first root admin account</p>
        </div>

        <div className="bg-card border border-border rounded-sm p-8 shadow-2xl">
          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-6">
            <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${step === "token" ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"}`}>1</div>
            <div className="flex-1 h-px bg-border" />
            <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${step === "account" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>2</div>
          </div>

          <form onSubmit={step === "token" ? (e) => { e.preventDefault(); setStep("account"); } : handleSetup} className="space-y-5">
            {step === "token" ? (
              <>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">Setup Token</label>
                  <p className="text-xs text-muted-foreground/70 mb-3">
                    Enter your <code className="bg-muted px-1 py-0.5 rounded text-xs">SESSION_SECRET</code> environment variable to verify you are the server operator.
                  </p>
                  <div className="relative">
                    <KeyRound size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="password"
                      value={setupToken}
                      onChange={(e) => setSetupToken(e.target.value)}
                      required
                      autoFocus
                      className="w-full bg-background border border-input rounded-sm pl-9 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all font-mono"
                      placeholder="Paste your SESSION_SECRET"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!setupToken.trim()}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-sm font-medium text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  Continue
                </button>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">Display Name</label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    placeholder="e.g. Md. Harun-or-Rashid"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    placeholder="e.g. harun"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                      className="w-full bg-background border border-input rounded-sm px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                      placeholder="Min 8 characters"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">Confirm Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full bg-background border border-input rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    placeholder="Repeat password"
                  />
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm bg-destructive/10 px-4 py-2.5 rounded-sm border border-destructive/20"
                  >
                    {error}
                  </motion.p>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => { setStep("token"); setError(""); }}
                    className="flex-1 py-3 bg-secondary text-secondary-foreground rounded-sm font-medium text-sm hover:bg-secondary/80 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 py-3 bg-primary text-primary-foreground rounded-sm font-medium text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {isLoading ? <><Loader2 size={14} className="animate-spin" /> Creating…</> : "Create Account"}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
        <p className="text-center text-xs text-muted-foreground/40 mt-6">
          This page is only available during initial setup
        </p>
      </motion.div>
    </div>
  );
}
