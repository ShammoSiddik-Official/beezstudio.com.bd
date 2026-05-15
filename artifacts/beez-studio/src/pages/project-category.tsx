import { Link } from "wouter";
import { ArrowLeft, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export interface ProjectData {
  name: string;
  location?: string;
  images: string[];
}

interface ProjectCategoryProps {
  categoryName: string;
  description: string;
  projects: ProjectData[];
}

export default function ProjectCategory({ categoryName, description, projects }: ProjectCategoryProps) {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={14} /> All Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                Portfolio Category
              </span>
              <span className="w-8 h-[1px] bg-primary" />
              <span className="text-muted-foreground text-sm">{projects.length} {projects.length === 1 ? "Project" : "Projects"}</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight text-foreground">
              {categoryName}
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-20">
            {projects.map((project, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {/* Project header */}
                <div className="flex items-start justify-between gap-4 mb-6 pb-5 border-b border-border">
                  <div className="flex items-start gap-5">
                    <span className="font-serif text-4xl font-bold text-primary/20 leading-none mt-1 select-none w-10 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight">
                        {project.name}
                      </h2>
                      {project.location && (
                        <div className="flex items-center gap-1.5 mt-2 text-sm text-muted-foreground">
                          <MapPin size={13} className="text-primary" />
                          {project.location}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Images */}
                {project.images.length === 1 ? (
                  <div className="aspect-[16/7] overflow-hidden rounded-sm bg-secondary">
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ) : project.images.length === 2 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((img, j) => (
                      <div key={j} className="aspect-[4/3] overflow-hidden rounded-sm bg-secondary">
                        <img src={img} alt={`${project.name} ${j + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="col-span-2 row-span-2 aspect-square md:aspect-auto overflow-hidden rounded-sm bg-secondary">
                      <img
                        src={project.images[0]}
                        alt={`${project.name} — featured`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 min-h-[220px]"
                        style={{ aspectRatio: "4/3" }}
                      />
                    </div>
                    {project.images.slice(1).map((img, j) => (
                      <div key={j} className="aspect-[4/3] overflow-hidden rounded-sm bg-secondary">
                        <img src={img} alt={`${project.name} ${j + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                      </div>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 border-t border-border bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-3xl font-bold mb-2">Have a project in mind?</h3>
              <p className="text-muted-foreground font-light">Let us bring the same standard of excellence to your vision.</p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-sm font-medium tracking-widest uppercase text-sm"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border hover:border-primary text-foreground hover:text-primary transition-colors rounded-sm font-medium tracking-widest uppercase text-sm"
              >
                All Categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
