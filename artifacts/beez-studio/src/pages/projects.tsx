import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ALL_PROJECTS = [
  { id: 1, title: "Gulshan Residence", category: "Residential", img: "/images/project-1.png", aspect: "aspect-[16/9]" },
  { id: 2, title: "Banani Commerce Tower", category: "Commercial", img: "/images/project-2.png", aspect: "aspect-[3/4]" },
  { id: 3, title: "The Courtyard House", category: "Interior", img: "/images/project-3.png", aspect: "aspect-[4/3]" },
  { id: 4, title: "Heritage Brick Revive", category: "Renovation", img: "/images/project-4.png", aspect: "aspect-[16/9]" },
  { id: 5, title: "Lumina Retail", category: "Commercial", img: "/images/project-5.png", aspect: "aspect-[3/4]" },
  { id: 6, title: "Skyline Balcony", category: "Residential", img: "/images/project-6.png", aspect: "aspect-[4/3]" },
  { id: 7, title: "Dhaka Cultural Center", category: "Commercial", img: "/images/project-7.png", aspect: "aspect-[16/9]" },
  { id: 8, title: "Minimalist Kitchen", category: "Interior", img: "/images/project-8.png", aspect: "aspect-[4/3]" },
];

const CATEGORIES = ["All", "Residential", "Commercial", "Interior", "Renovation"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="w-full pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            A selection of architectural, interior, and renovation projects showcasing our commitment to spatial clarity and material integrity.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm tracking-wide uppercase transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-foreground text-background" 
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring" }}
                key={project.id}
                className={`group cursor-pointer ${index % 3 === 0 ? "md:col-span-2" : "col-span-1"}`}
              >
                <div className={`overflow-hidden rounded-sm mb-6 ${project.aspect} w-full bg-secondary`}>
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm tracking-widest uppercase">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-32 text-center text-muted-foreground font-light text-xl">
            No projects found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
