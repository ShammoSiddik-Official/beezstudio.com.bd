import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderOpen, Plus, Pencil, Trash2, X, Check, Star } from "lucide-react";
import { api, type Project, type ProjectInput } from "@/lib/api";

const CATEGORIES = [
  "Industrial Steel Buildings", "Commercial Buildings", "Campus & Medical",
  "Hospital Projects", "Religious Projects", "Apartment Buildings",
  "Residential Hotels", "Bungalows & Cottages", "Interiors Design",
  "Landscape Projects", "Bridge Projects",
];

const EMPTY: ProjectInput = { title: "", category: CATEGORIES[0], slug: "", description: "", location: "", year: "", featured: false, published: true };

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);
  const [form, setForm] = useState<ProjectInput>(EMPTY);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api.projects.list().then(setProjects).catch((e) => setError(e.message)).finally(() => setIsLoading(false));
  }, []);

  function openNew() { setEditing(null); setForm(EMPTY); setShowForm(true); }
  function openEdit(p: Project) {
    setEditing(p);
    setForm({ title: p.title, category: p.category, slug: p.slug, description: p.description ?? "", location: p.location ?? "", year: p.year ?? "", featured: p.featured, published: p.published });
    setShowForm(true);
  }

  async function handleSave() {
    setSaving(true);
    try {
      if (editing) {
        const updated = await api.projects.update(editing.id, form);
        setProjects((prev) => prev.map((p) => (p.id === editing.id ? updated : p)));
      } else {
        const created = await api.projects.create(form);
        setProjects((prev) => [created, ...prev]);
      }
      setShowForm(false);
    } catch (e: unknown) {
      alert(e instanceof Error ? e.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this project?")) return;
    await api.projects.delete(id);
    setProjects((p) => p.filter((x) => x.id !== id));
  }

  const field = (key: keyof ProjectInput, label: string, type = "text") => (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5 font-medium">{label}</label>
      <input
        type={type}
        value={form[key] as string}
        onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
        className="w-full bg-background border border-input rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
      />
    </div>
  );

  return (
    <div className="p-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-widest mb-1"><FolderOpen size={12} /> Portfolio</div>
          <h1 className="font-serif text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground text-sm mt-1">{projects.length} project{projects.length !== 1 ? "s" : ""} in portfolio</p>
        </div>
        <button onClick={openNew} className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-sm text-sm font-medium hover:bg-primary/90 transition-colors">
          <Plus size={15} /> Add Project
        </button>
      </motion.div>

      {error && <p className="text-destructive text-sm mb-4 bg-destructive/10 px-4 py-2.5 rounded-sm">{error}</p>}

      {isLoading ? (
        <div className="flex items-center justify-center h-40"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>
      ) : projects.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground"><FolderOpen size={40} className="mx-auto mb-3 opacity-20" /><p>No projects yet. Add your first one.</p></div>
      ) : (
        <div className="bg-card border border-border rounded-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b border-border">
              <tr className="text-left">
                <th className="px-4 py-3 text-xs uppercase tracking-widest text-muted-foreground font-medium">Title</th>
                <th className="px-4 py-3 text-xs uppercase tracking-widest text-muted-foreground font-medium hidden md:table-cell">Category</th>
                <th className="px-4 py-3 text-xs uppercase tracking-widest text-muted-foreground font-medium hidden lg:table-cell">Year</th>
                <th className="px-4 py-3 text-xs uppercase tracking-widest text-muted-foreground font-medium">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {projects.map((p) => (
                <tr key={p.id} className="hover:bg-secondary/20 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {p.featured && <Star size={12} className="text-primary shrink-0" />}
                      <span className="font-medium text-foreground truncate max-w-[200px]">{p.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{p.category}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{p.year ?? "—"}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${p.published ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`}>
                      {p.published ? <><Check size={10} /> Published</> : "Draft"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 justify-end">
                      <button onClick={() => openEdit(p)} className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-sm transition-colors"><Pencil size={13} /></button>
                      <button onClick={() => handleDelete(p.id)} className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-sm transition-colors"><Trash2 size={13} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Slide-over form */}
      <AnimatePresence>
        {showForm && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-40" onClick={() => setShowForm(false)} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="fixed top-0 right-0 h-full w-full max-w-lg bg-card border-l border-border z-50 overflow-y-auto">
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <h2 className="font-serif text-xl font-bold">{editing ? "Edit Project" : "New Project"}</h2>
                <button onClick={() => setShowForm(false)} className="p-1.5 text-muted-foreground hover:text-foreground rounded-sm"><X size={18} /></button>
              </div>
              <div className="p-6 space-y-5">
                {field("title", "Title")}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5 font-medium">Category</label>
                  <select value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} className="w-full bg-background border border-input rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all">
                    {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                {field("slug", "Slug (URL)")}
                {field("location", "Location")}
                {field("year", "Year")}
                {field("imageUrl", "Image URL")}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5 font-medium">Description</label>
                  <textarea value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} rows={4} className="w-full bg-background border border-input rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none" />
                </div>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" checked={form.published} onChange={(e) => setForm((f) => ({ ...f, published: e.target.checked }))} className="accent-primary" />
                    Published
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" checked={form.featured} onChange={(e) => setForm((f) => ({ ...f, featured: e.target.checked }))} className="accent-primary" />
                    Featured
                  </label>
                </div>
                <button onClick={handleSave} disabled={saving} className="w-full py-3 bg-primary text-primary-foreground rounded-sm font-medium text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors disabled:opacity-60">
                  {saving ? "Saving…" : editing ? "Update Project" : "Create Project"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
