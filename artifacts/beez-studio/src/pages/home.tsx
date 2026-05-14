import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, CheckCircle } from "lucide-react";

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
      {/* Hero Section */}
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
            Consulting, design, and construction in Dhaka. We build spaces defined by precision, intention, and enduring beauty.
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

      {/* Intro Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
                Spaces that speak before a word is said.
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                <p>
                  Founded in 2007, Beez Studio is a reputed architectural consultancy &amp; construction firm at Dhaka, Bangladesh — with an outstanding reputation for creating the best projects and high-level design and construction services.
                </p>
                <p>
                  Our work spans residential, commercial, industrial, landscape and institutional projects. We provide Design &amp; Consultancy and Construction Services across the entire country and abroad. The unique features of our projects ensure a valuable venture.
                </p>
              </div>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 mt-10 text-primary font-medium tracking-widest uppercase text-sm hover:text-foreground transition-colors group"
              >
                Our Studio Story <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
                src="/images/project-3.png" 
                alt="Interior design detail" 
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

      {/* Selected Works */}
      <section className="py-24 md:py-32 bg-card text-card-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Selected Works</h2>
              <p className="text-muted-foreground max-w-xl">A curated selection of our recent architectural and interior design projects.</p>
            </motion.div>
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-primary font-medium tracking-widest uppercase text-sm hover:text-foreground transition-colors group whitespace-nowrap"
            >
              View All Projects <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { id: 1, img: "/images/project-1.png", title: "Gulshan Residence", category: "Architecture / Residential" },
              { id: 2, img: "/images/project-2.png", title: "Banani Commerce Tower", category: "Architecture / Commercial" },
              { id: 5, img: "/images/project-5.png", title: "Lumina Retail", category: "Interior / Commercial" },
              { id: 8, img: "/images/project-8.png", title: "The Courtyard House", category: "Interior / Residential" }
            ].map((project) => (
              <motion.div key={project.id} variants={fadeInUp} className="group cursor-pointer">
                <div className="overflow-hidden aspect-[4/3] mb-6 rounded-sm">
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise / Services */}
      <section className="py-24 md:py-32 bg-sidebar text-sidebar-foreground border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
            <p className="text-muted-foreground text-lg font-light">From initial concept to final construction, we offer comprehensive services to bring visionary spaces to life.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Architecture",
                desc: "Rigorous planning and design for residential, commercial, and cultural buildings, focusing on context and sustainability.",
                num: "01"
              },
              {
                title: "Interior Design",
                desc: "Crafting interior spaces that harmonize with the architectural envelope, emphasizing material quality and spatial flow.",
                num: "02"
              },
              {
                title: "Construction",
                desc: "End-to-end project management and build services, ensuring the original design intent is executed with uncompromised quality.",
                num: "03"
              }
            ].map((service, idx) => (
              <motion.div 
                key={service.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative p-8 border border-border bg-background hover:border-primary/50 transition-colors group rounded-sm"
              >
                <div className="text-5xl font-serif text-muted/30 absolute top-6 right-8 group-hover:text-primary/20 transition-colors">
                  {service.num}
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4 mt-8">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 font-light">
                  {service.desc}
                </p>
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-foreground group-hover:text-primary transition-colors"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground text-center px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container mx-auto max-w-4xl flex flex-col items-center"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to build something extraordinary?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl font-light mb-12 max-w-2xl">
            Let's discuss your vision. Our team is ready to consult on your next architectural or interior project.
          </p>
          <Link 
            href="/contact" 
            className="px-10 py-5 bg-background text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 rounded-sm font-medium tracking-widest uppercase text-sm"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
