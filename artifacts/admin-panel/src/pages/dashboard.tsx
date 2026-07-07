import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, FolderOpen, Users, TrendingUp, Clock } from "lucide-react";
import { api, type Stats } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import { format } from "date-fns";

export default function DashboardPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.stats().then(setStats).catch((e) => setError(e.message));
  }, []);

  const cards = stats
    ? [
        { label: "Total Contacts", value: stats.totalContacts, icon: Mail, color: "text-primary" },
        { label: "Total Projects", value: stats.totalProjects, icon: FolderOpen, color: "text-blue-400" },
        { label: "Admin Users", value: stats.totalUsers, icon: Users, color: "text-purple-400" },
        { label: "This Month", value: "Active", icon: TrendingUp, color: "text-emerald-400" },
      ]
    : [];

  return (
    <div className="p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-8">
        <p className="text-muted-foreground text-sm uppercase tracking-widest mb-1">Welcome back</p>
        <h1 className="font-serif text-3xl font-bold text-foreground">{user?.displayName ?? user?.username}</h1>
        <p className="text-muted-foreground text-sm mt-1">Here's what's happening at BeeZ Studio today.</p>
      </motion.div>

      {error && <p className="text-destructive text-sm mb-6 bg-destructive/10 px-4 py-2.5 rounded-sm">{error}</p>}

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="bg-card border border-border rounded-sm p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">{card.label}</span>
                <Icon size={16} className={card.color} />
              </div>
              <p className="font-serif text-4xl font-bold text-foreground">{card.value}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Contacts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="bg-card border border-border rounded-sm"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Clock size={15} className="text-muted-foreground" />
            <h2 className="font-medium text-sm text-foreground">Recent Contact Submissions</h2>
          </div>
        </div>
        {stats?.recentContacts.length === 0 ? (
          <div className="px-6 py-12 text-center text-muted-foreground text-sm">No contact submissions yet.</div>
        ) : (
          <div className="divide-y divide-border">
            {stats?.recentContacts.map((c) => (
              <div key={c.id} className="px-6 py-4 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-medium text-sm text-foreground truncate">{c.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{c.email} · {c.subject}</p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">
                  {format(new Date(c.createdAt), "MMM d")}
                </span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
