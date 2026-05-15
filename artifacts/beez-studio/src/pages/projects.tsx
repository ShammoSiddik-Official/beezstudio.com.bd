import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Compass, Ruler, Hammer, Factory, Trees, Building2, MessagesSquare, Wrench } from "lucide-react";

const CATEGORIES = [
  { slug: "industrial-steel-buildings", name: "Industrial Steel Buildings", img: "/images/project-1.png", desc: "Pre-engineered steel structures for factories, warehouses, and processing plants across Bangladesh.", count: 8 },
  { slug: "commercial-buildings", name: "Commercial Buildings", img: "/images/project-2.png", desc: "Corporate headquarters, retail centres, and mixed-use developments serving Bangladesh's growing economy.", count: 7 },
  { slug: "campus-medical", name: "Campus & Medical Projects", img: "/images/project-3.png", desc: "Educational dormitories and medical college facilities designed for learning and healing.", count: 2 },
  { slug: "hospital-projects", name: "Hospital Projects", img: "/images/project-4.png", desc: "Precision-planned healthcare facilities meeting international standards of care and functionality.", count: 1 },
  { slug: "religious-projects", name: "Religious Projects", img: "/images/project-5.png", desc: "Mosques and sacred spaces built with reverence for tradition and community.", count: 4 },
  { slug: "apartment-buildings", name: "Apartment Buildings", img: "/images/project-6.png", desc: "Multi-storey residential blocks from G+6 to G+13, creating communities across Dhaka and beyond.", count: 8 },
  { slug: "residential-hotel", name: "Residential Hotels", img: "/images/project-7.png", desc: "Hospitality and serviced apartment buildings delivering comfort and operational efficiency.", count: 3 },
  { slug: "bungalows-cottages", name: "Bungalows & Family Cottages", img: "/images/project-8.png", desc: "Private villas, family residences, and vacation retreats — each as unique as its owner.", count: 8 },
  { slug: "interiors-design", name: "Interiors Design", img: "/images/project-1.png", desc: "Interior environments for offices, residences, hospitality venues, and institutional buildings.", count: 13 },
  { slug: "landscape-projects", name: "Landscape Projects", img: "/images/project-2.png", desc: "Resort grounds, school campuses, cantonment gardens, and ecological open spaces.", count: 6 },
  { slug: "bridge-projects", name: "Bridge Projects", img: "/images/project-3.png", desc: "Structural bridges combining engineering precision with architectural sensibility.", count: 2 },
];

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* 2.1 Projects Category List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Seventeen years of landmark work across 11 disciplines. Every category represents a distinct domain of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col h-full bg-card border border-border rounded-sm overflow-hidden"
            >
              <Link href={`/projects/${cat.slug}`} className="flex flex-col h-full relative">
                <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center z-10">
                     <span className="font-serif text-3xl text-white font-bold">{cat.name}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative z-20 bg-card">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-2xl font-bold group-hover:text-primary transition-colors">{cat.name}</h3>
                    <span className="shrink-0 text-xs font-medium tracking-widest uppercase text-primary border border-primary/30 bg-primary/10 px-2 py-1 rounded-sm">
                      {cat.count} {cat.count === 1 ? "project" : "projects"}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-light mb-6 flex-grow">{cat.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-foreground group-hover:text-primary transition-colors mt-auto">
                    View Projects <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 2.2 Our Broad Expertise */}
        <div className="mb-32">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Disciplines We Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Compass, title: "Architecture & Planning" },
              { icon: Building2, title: "Apartments & Residences" },
              { icon: Ruler, title: "Interior Design" },
              { icon: Hammer, title: "Construction Management" },
              { icon: Factory, title: "Industrial Construction" },
              { icon: Trees, title: "Landscape Design" },
              { icon: MessagesSquare, title: "Campus & Institutional" },
              { icon: Wrench, title: "Religious Architecture" },
              { icon: Building2, title: "Hotels & Resorts" },
              { icon: Factory, title: "Corporate Buildings" },
              { icon: Trees, title: "Tourism Development" },
              { icon: Compass, title: "Bridge & Infrastructure" },
              { icon: Ruler, title: "Project & Construction Management" },
              { icon: Hammer, title: "Monuments & Sculpture" },
            ].map((expertise, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-secondary/50 rounded-sm border-y border-r border-border border-l-2 border-l-primary hover:bg-secondary transition-colors">
                <expertise.icon className="text-primary shrink-0" size={24} />
                <span className="font-serif text-xl font-medium">{expertise.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2.3 Category-wise Featured Photos */}
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Work That Defines Categories</h2>
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x">
            {CATEGORIES.map((cat, i) => (
              <div key={i} className="aspect-square w-64 shrink-0 overflow-hidden rounded-sm snap-start bg-secondary relative group">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center p-4">
                  <span className="font-serif font-bold text-lg">{cat.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
