import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full">
      {/* 1.1 Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 mix-blend-multiply z-10" />
          <img
            src="/images/hero-bg.png"
            alt="Abstract architecture"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6"
          >
            Where Architecture<br />
            <span className="text-primary italic font-light">Becomes Art.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-light tracking-wide"
          >
            Consulting, design, and construction across Bangladesh since 2007.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link 
              href="/projects" 
              data-testid="hero-cta"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background hover:bg-primary transition-colors duration-300 rounded-sm font-medium tracking-widest uppercase text-sm"
            >
              Explore Our Work <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-[0.3em] mb-4">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </section>

      {/* 1.2 Featured Projects */}
      <section className="py-24 md:py-32 bg-card text-card-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {[
              { id: 1, img: "/images/project-1.png", title: "Bashundhara Industrial Complex", category: "Industrial Steel Buildings", link: "/projects/industrial-steel-buildings" },
              { id: 2, img: "/images/project-2.png", title: "Gulshan Commerce Tower", category: "Commercial Buildings", link: "/projects/commercial-buildings" },
              { id: 3, img: "/images/project-3.png", title: "BRAC University Extension", category: "Campus & Medical", link: "/projects/campus-medical" },
              { id: 4, img: "/images/project-4.png", title: "National Heart Institute Annex", category: "Hospital Projects", link: "/projects/hospital-projects" },
              { id: 5, img: "/images/project-5.png", title: "Al-Amin Jame Mosque", category: "Religious Projects", link: "/projects/religious-projects" },
              { id: 6, img: "/images/project-6.png", title: "Skyline Residences", category: "Apartment Buildings", link: "/projects/apartment-buildings" }
            ].map((project) => (
              <motion.div key={project.id} variants={fadeInUp} className="group cursor-pointer">
                <Link href={project.link}>
                  <div className="overflow-hidden aspect-[4/3] mb-6 rounded-sm bg-secondary">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground text-sm tracking-wider uppercase">{project.category}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                      <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 1.3 Industrial Projects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Industrial Projects</h2>
            <Link 
              href="/projects/industrial-steel-buildings" 
              className="inline-flex items-center gap-2 text-primary font-medium tracking-widest uppercase text-sm hover:text-foreground transition-colors group"
            >
              View All <span className="hidden sm:inline">Industrial Projects</span> <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "/images/project-1.png", title: "Industrial Plant A" },
              { img: "/images/project-2.png", title: "Warehouse Complex" },
              { img: "/images/project-3.png", title: "Manufacturing Unit" }
            ].map((proj, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="overflow-hidden aspect-[4/3] rounded-sm bg-secondary">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.4 Interiors Projects */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Interiors Projects</h2>
            <Link 
              href="/projects/interiors-design" 
              className="inline-flex items-center gap-2 text-primary font-medium tracking-widest uppercase text-sm hover:text-foreground transition-colors group"
            >
              View All <span className="hidden sm:inline">Interiors Projects</span> <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "/images/project-5.png", title: "Corporate Office" },
              { img: "/images/project-6.png", title: "Luxury Retail" },
              { img: "/images/project-7.png", title: "Modern Residence" }
            ].map((proj, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="overflow-hidden aspect-[4/3] rounded-sm bg-secondary">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.5 About Us */}
      <section className="py-24 md:py-32 bg-background border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
                About Beez Studio
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed mb-10">
                <p>
                  Beez Studio was founded in 2007 as an architectural consultancy & construction firm at Dhaka, Bangladesh. With an outstanding reputation by creating the best projects and high-level design and construction services for projects including residential, commercial, industrial, landscape and institutional projects.
                </p>
              </div>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background hover:bg-primary transition-colors duration-300 rounded-sm font-medium tracking-widest uppercase text-sm"
              >
                Read More <ArrowRight size={18} />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] w-full"
            >
              <img 
                src="/images/project-4.png" 
                alt="Architecture detailing" 
                className="w-full h-full object-cover object-center rounded-sm"
              />
              <div className="absolute -bottom-8 -left-8 w-48 aspect-square bg-primary p-8 flex flex-col justify-center rounded-sm shadow-2xl hidden md:flex">
                <span className="font-serif text-5xl font-bold text-primary-foreground mb-2">Est.</span>
                <span className="text-primary-foreground/80 text-sm uppercase tracking-widest">Since<br/>2007</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1.6 Our Valuable Clients */}
      <section className="py-24 md:py-32 bg-sidebar text-sidebar-foreground">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Valuable Clients</h2>
            <p className="text-muted-foreground font-light text-lg">Trusted by leading organizations across Bangladesh.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div 
                key={idx} 
                className="bg-background border border-border rounded-sm py-12 px-6 flex items-center justify-center text-muted-foreground/50 font-medium tracking-widest uppercase text-sm hover:border-primary/30 transition-colors"
              >
                Client {idx + 1}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
