import { motion, type Variants } from "framer-motion";
import { Download } from "lucide-react";

export default function About() {
  const fadeInUp: Variants = {
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
            <blockquote className="font-serif text-3xl italic text-primary mb-10 leading-relaxed max-w-3xl">
              "We consider the client as the soul of every project we undertake."
            </blockquote>
            <div className="space-y-6 text-xl text-muted-foreground font-light leading-relaxed mb-10">
              <p>
                Beez Studio was established in 2007 with a singular conviction: that great architecture changes how people experience their world. From our studio in Dhanmondi, Dhaka, we have built a practice spanning architectural consultancy, interior design, construction management, and landscape — serving clients across Bangladesh and internationally.
              </p>
              <p>
                Our design process begins with listening. Understanding the client's values, lifestyle, and ambitions before a single line is drawn. From that foundation, our team develops concepts that are unique, artistic, and functional — rooted in traditional craft ethics while embracing modern technology and sustainable practice.
              </p>
              <p>
                Beez Studio promotes healthy lifestyles and integrates new technologies to complement current practices in creating greener structures — using energy and water more judiciously, and land and materials more creatively, reducing waste and pollution in all its forms.
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
                To create sustainable, functional, and aesthetically superior built environments that reflect our clients' values — and to serve the communities of Bangladesh with design that endures.
              </p>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="p-10 bg-secondary/50 rounded-sm border border-border"
            >
              <h3 className="font-serif text-3xl font-bold mb-6 text-primary">Our Vision</h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                To be the definitive architectural consultancy and construction firm in Bangladesh — renowned for design excellence, innovative construction, and an unwavering commitment to our clients.
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
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Chief Executive Officer</span>
              <h3 className="font-serif text-4xl font-bold mb-8">Md. Harun-or-Rashid</h3>
              <blockquote className="font-serif text-2xl italic text-muted-foreground mb-8 border-l-4 border-primary pl-6 py-2">
                "Every structure we build carries our signature — not just in its form, but in the lives it shapes and the communities it serves."
              </blockquote>
              <p className="text-muted-foreground font-light leading-relaxed">
                With over two decades of experience in architectural design and construction management, he leads Beez Studio's vision and strategic direction, ensuring every project reflects the firm's commitment to quality and innovation.
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
                "Architecture is not about buildings — it is about the people who will inhabit them, long after we have moved on to the next project."
              </blockquote>
              <p className="text-muted-foreground font-light leading-relaxed">
                Overseeing operations, client relations, and project delivery across all of Beez Studio's active engagements.
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
                "The most important drawing is the first one — where intuition meets intention."
              </blockquote>
              <p className="text-muted-foreground font-light leading-relaxed">
                Leading Beez Studio's design direction and studio operations, bringing rigorous architectural thinking to every project from concept to completion.
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
            <p className="text-xl text-muted-foreground font-light">The specialists behind every line, every material decision, and every project delivered on time.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "Senior Architect",
              "Interior Design Lead",
              "Structural Engineer",
              "Project Manager",
              "Site Supervisor",
              "CAD & BIM Specialist",
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
