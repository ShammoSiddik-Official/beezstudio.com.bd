import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Plus, Trash2, X, Shield, Edit2 } from "lucide-react";
import { api, type AdminUser, type UserInput } from "@/lib/api";
import { format } from "date-fns";
import { useAuth } from "@/contexts/AuthContext";

const EMPTY: UserInput = { username: "", email: "", password: "", role: "editor", displayName: "" };

export default function UsersPage() {
  const { user: currentUser } = useAuth();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<AdminUser | null>(null);
  const [form, setForm] = useState<UserInput>(EMPTY);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api.users.list().then(setUsers).catch((e) => setError(e.message)).finally(() => setIsLoading(false));
  }, []);

  function openNew() { setEditing(null); setForm(EMPTY); setShowForm(true); }
  function openEdit(u: AdminUser) {
    setEditing(u);
    setForm({ username: u.username, email: u.email ?? "", password: "", role: u.role, displayName: u.displayName ?? "" });
    setShowForm(true);
  }

  async function handleSave() {
    setSaving(true);
    try {
      if (editing) {
        const data: Partial<UserInput> = { ...form };
        if (!data.password) delete data.password;
        const updated = await api.users.update(editing.id, data);
        setUsers((prev) => prev.map((u) => (u.id === editing.id ? { ...u, ...updated } : u)));
      } else {
        const created = await api.users.create(form);
        setUsers((prev) => [...prev, created as AdminUser]);
      }
      setShowForm(false);
    } catch (e: unknown) {
      alert(e instanceof Error ? e.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    if (id === currentUser?.id) { alert("You cannot delete your own account."); return; }
    if (!confirm("Delete this user?")) return;
    await api.users.delete(id);
    setUsers((u) => u.filter((x) => x.id !== id));
  }

  const field = (key: keyof UserInput, label: string, type = "text", placeholder = "") => (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5 font-medium">{label}</label>
      <input
        type={type}
        value={form[key] as string}
        onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
        placeholder={placeholder}
        className="w-full bg-background border border-input rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
      />
    </div>
  );

  return (
    <div className="p-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest mb-1"><Shield size={12} /> Root Access</div>
          <h1 className="font-serif text-3xl font-bold">Admin Users</h1>
          <p className="text-muted-foreground text-sm mt-1">{users.length} user{users.length !== 1 ? "s" : ""} · Visible to root only</p>
        </div>
        <button onClick={openNew} className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-sm text-sm font-medium hover:bg-primary/90 transition-colors">
          <Plus size={15} /> Add User
        </button>
      </motion.div>

      {error && <p className="text-destructive text-sm mb-4 bg-destructive/10 px-4 py-2.5 rounded-sm">{error}</p>}

      {isLoading ? (
        <div className="flex items-center justify-center h-40"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((u) => (
            <motion.div key={u.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-sm p-5 relative group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-primary/15 rounded-sm flex items-center justify-center">
                  <Users size={18} className="text-primary" />
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${u.role === "root" ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"}`}>
                  {u.role}
                </span>
              </div>
              <p className="font-serif font-bold text-lg text-foreground mb-0.5">{u.displayName ?? u.username}</p>
              <p className="text-muted-foreground text-sm mb-1">@{u.username}</p>
              <p className="text-muted-foreground/60 text-xs mb-4 truncate">{u.email}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground/50">
                <span>Last login: {u.lastLoginAt ? format(new Date(u.lastLoginAt), "MMM d") : "Never"}</span>
                {u.id === currentUser?.id && <span className="text-primary/70">You</span>}
              </div>
              <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => openEdit(u)} className="p-1.5 text-muted-foreground hover:text-foreground bg-background rounded-sm border border-border"><Edit2 size={12} /></button>
                <button onClick={() => handleDelete(u.id)} disabled={u.id === currentUser?.id} className="p-1.5 text-muted-foreground hover:text-destructive bg-background rounded-sm border border-border disabled:opacity-30"><Trash2 size={12} /></button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {showForm && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-40" onClick={() => setShowForm(false)} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-50 overflow-y-auto">
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <h2 className="font-serif text-xl font-bold">{editing ? "Edit User" : "New User"}</h2>
                <button onClick={() => setShowForm(false)} className="p-1.5 text-muted-foreground hover:text-foreground rounded-sm"><X size={18} /></button>
              </div>
              <div className="p-6 space-y-5">
                {field("displayName", "Display Name")}
                {field("username", "Username")}
                {field("email", "Email", "email")}
                {field("password", editing ? "New Password (leave blank to keep)" : "Password", "password")}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5 font-medium">Role</label>
                  <select value={form.role} onChange={(e) => setForm((f) => ({ ...f, role: e.target.value as "root" | "editor" }))} className="w-full bg-background border border-input rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all">
                    <option value="editor">Editor — can do CRUD operations</option>
                    <option value="root">Root — full access</option>
                  </select>
                </div>
                <button onClick={handleSave} disabled={saving} className="w-full py-3 bg-primary text-primary-foreground rounded-sm font-medium text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors disabled:opacity-60">
                  {saving ? "Saving…" : editing ? "Update User" : "Create User"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
