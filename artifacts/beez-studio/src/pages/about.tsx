import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full">
      {/* Header & 3.1 The BeeZ Legacy */}
      <section className="pt-40 pb-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-16"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
              The BeeZ Legacy
            </h1>
            <div className="space-y-6 text-xl text-muted-foreground font-light leading-relaxed mb-10">
              <p>
                Beez Studio was founded in 2007 as an architectural consultancy & construction firm at Dhaka, Bangladesh. With an outstanding reputation by creating the best projects and high-level design and construction services for projects including residential, commercial, industrial, landscape and institutional projects. We provide Design & Consultancy/Construction Services in the entire country and abroad. The unique features of our projects ensure a valuable venture.
              </p>
              <p>
                Beez Studio design team takes over everything — from an idea and concept development to realization — providing a comprehensive range of solutions from Architecture to Interiors & Landscape. All of our projects are unique, artistic and functional solutions with traditional ethics to incorporate into our creation. Our main goal is ensuring our clients' values and individuality through design to make the built environment more sustainable and economical. Because we consider the client as the soul of our project.
              </p>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background hover:bg-primary transition-colors duration-300 rounded-sm font-medium tracking-widest uppercase text-sm"
            >
              <Download size={18} /> Download Portfolio
            </a>
          </motion.div>
        </div>
      </section>

      {/* Image Banner */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full h-[50vh] bg-secondary"
      >
        <img 
          src="/images/hero-bg.png" 
          alt="Studio atmosphere" 
          className="w-full h-full object-cover grayscale opacity-80"
        />
      </motion.section>

      {/* 3.2 Our Services */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl font-bold mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Architecture & Planning",
              "Interior Design",
              "Construction Management",
              "Industrial Construction",
              "Landscape Design",
              "Campus & Institutional Design",
              "Religious Architecture",
              "Bridge & Infrastructure"
            ].map((service, i) => (
              <div key={i} className="p-6 border border-border bg-background rounded-sm">
                <span className="font-serif text-xl font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.3 Our Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="p-10 bg-secondary/50 rounded-sm border border-border"
            >
              <h3 className="font-serif text-3xl font-bold mb-6 text-primary">Our Mission</h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                To create sustainable, functional and aesthetically superior built environments that reflect our clients' values and serve communities across Bangladesh and beyond.
              </p>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="p-10 bg-secondary/50 rounded-sm border border-border"
            >
              <h3 className="font-serif text-3xl font-bold mb-6 text-primary">Our Vision</h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                To be the leading architectural consultancy and construction firm in Bangladesh, recognized for design excellence, innovation, and an unwavering commitment to quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3.4 CEO Slot */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[3/4] bg-secondary w-full max-w-md mx-auto rounded-sm flex items-center justify-center text-muted-foreground/50 uppercase tracking-widest">
              CEO Photo
            </div>
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">C.E.O.</span>
              <h3 className="font-serif text-4xl font-bold mb-8">Md. Harun-or-Rashid</h3>
              <blockquote className="font-serif text-2xl italic text-muted-foreground mb-8 border-l-4 border-primary pl-6 py-2">
                "Our commitment is to build spaces that endure — in structure, in beauty, and in the lives of those who inhabit them."
              </blockquote>
              <p className="text-muted-foreground font-light leading-relaxed">
                Guiding Beez Studio since its inception, his vision forms the cornerstone of the firm's approach to architectural integrity and sustainable growth across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 Managing Partners Slot */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div className="lg:order-2 aspect-[3/4] bg-secondary w-full max-w-md mx-auto rounded-sm flex items-center justify-center text-muted-foreground/50 uppercase tracking-widest">
              Partner Photo
            </div>
            <div className="lg:order-1">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Managing Partner</span>
              <h3 className="font-serif text-4xl font-bold mb-8">[Name]</h3>
              <blockquote className="font-serif text-2xl italic text-muted-foreground mb-8 border-l-4 border-primary pl-6 py-2">
                "A successful project balances ambitious design with pragmatic execution and uncompromising operational excellence."
              </blockquote>
              <p className="text-muted-foreground font-light leading-relaxed">
                Overseeing operations and client relations, ensuring that every project is delivered to the highest standard, on time, and aligned with client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.6 Chief Architect & Studio Incharge Slot */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[3/4] bg-secondary w-full max-w-md mx-auto rounded-sm flex items-center justify-center text-muted-foreground/50 uppercase tracking-widest">
              Architect Photo
            </div>
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Chief Architect & Studio Incharge</span>
              <h3 className="font-serif text-4xl font-bold mb-8">[Name]</h3>
              <blockquote className="font-serif text-2xl italic text-muted-foreground mb-8 border-l-4 border-primary pl-6 py-2">
                "Design is the silent ambassador of a brand and the living context of a community."
              </blockquote>
              <p className="text-muted-foreground font-light leading-relaxed">
                Leading the creative direction of the studio, blending modern aesthetics with traditional sensibilities to shape spaces that inspire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.7 Crew Details */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Crew</h2>
            <p className="text-xl text-muted-foreground font-light">The dedicated professionals bringing visions to reality.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "Architect",
              "Interior Designer",
              "Structural Engineer",
              "Project Manager",
              "Site Supervisor",
              "CAD Specialist",
              "Quantity Surveyor",
              "Landscape Designer"
            ].map((role, i) => (
              <div key={i} className="text-center group">
                <div className="aspect-square bg-secondary rounded-sm mb-4 flex items-center justify-center overflow-hidden border border-border group-hover:border-primary/50 transition-colors">
                  <span className="text-muted-foreground/30 font-medium uppercase text-xs tracking-widest">Photo</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-foreground">Crew Member</h4>
                <p className="text-primary text-sm uppercase tracking-widest mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
