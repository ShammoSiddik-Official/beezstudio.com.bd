import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export interface ProjectData {
  name: string;
  images: string[];
}

interface ProjectCategoryProps {
  categoryName: string;
  description: string;
  projects: ProjectData[];
}

export default function ProjectCategory({ categoryName, description, projects }: ProjectCategoryProps) {
  return (
    <div className="w-full pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-20"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">{categoryName}</h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl font-semibold text-foreground border-b border-border pb-4">
                {project.name}
              </h2>
              
              <div className="flex gap-4 overflow-x-auto pb-6 snap-x">
                {project.images.map((img, j) => (
                  <div key={j} className="aspect-[4/3] w-72 shrink-0 overflow-hidden rounded-sm snap-start bg-secondary">
                    <img 
                      src={img} 
                      alt={`${project.name} - Image ${j + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
