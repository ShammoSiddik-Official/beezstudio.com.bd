import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Trash2, Phone, Calendar, Search } from "lucide-react";
import { api, type Contact } from "@/lib/api";
import { format } from "date-fns";

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Contact | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.contacts.list().then(setContacts).catch((e) => setError(e.message)).finally(() => setIsLoading(false));
  }, []);

  async function handleDelete(id: number) {
    if (!confirm("Delete this message?")) return;
    await api.contacts.delete(id);
    setContacts((c) => c.filter((x) => x.id !== id));
    if (selected?.id === id) setSelected(null);
  }

  const filtered = contacts.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()) || c.subject.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-6">
        <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest mb-1"><Mail size={12} /> Inbox</div>
        <h1 className="font-serif text-3xl font-bold">Contact Submissions</h1>
        <p className="text-muted-foreground text-sm mt-1">{contacts.length} total message{contacts.length !== 1 ? "s" : ""}</p>
      </motion.div>

      {error && <p className="text-destructive text-sm mb-4 bg-destructive/10 px-4 py-2.5 rounded-sm">{error}</p>}

      {/* Search */}
      <div className="relative mb-4">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email, or subject…"
          className="w-full bg-card border border-border rounded-sm pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* List */}
        <div className="lg:col-span-2 bg-card border border-border rounded-sm overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center h-40"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground text-sm">No messages found.</div>
          ) : (
            <div className="divide-y divide-border max-h-[calc(100vh-280px)] overflow-y-auto">
              {filtered.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelected(c)}
                  className={`w-full text-left px-4 py-4 hover:bg-secondary/40 transition-colors ${selected?.id === c.id ? "bg-primary/10 border-l-2 border-l-primary" : ""}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-medium text-sm text-foreground truncate">{c.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{c.subject}</p>
                      <p className="text-xs text-muted-foreground/60 truncate mt-0.5">{c.email}</p>
                    </div>
                    <span className="text-xs text-muted-foreground/50 shrink-0 mt-0.5">{format(new Date(c.createdAt), "MMM d")}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Detail */}
        <div className="lg:col-span-3 bg-card border border-border rounded-sm">
          {!selected ? (
            <div className="flex items-center justify-center h-full min-h-[200px] text-muted-foreground text-sm">Select a message to read</div>
          ) : (
            <div className="p-6">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div>
                  <h2 className="font-serif text-xl font-bold text-foreground mb-1">{selected.subject}</h2>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Mail size={11} /> {selected.email}</span>
                    {selected.phone && <span className="flex items-center gap-1"><Phone size={11} /> {selected.phone}</span>}
                    <span className="flex items-center gap-1"><Calendar size={11} /> {format(new Date(selected.createdAt), "PPP p")}</span>
                  </div>
                </div>
                <button onClick={() => handleDelete(selected.id)} className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-sm transition-colors shrink-0">
                  <Trash2 size={15} />
                </button>
              </div>
              <div className="border-t border-border pt-6">
                <p className="font-medium text-sm text-foreground mb-1">From: {selected.name}</p>
                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{selected.message}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
