import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-40 pb-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Designing spaces that endure.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Founded in 2012 in Dhaka, Beez Studio is an architectural practice dedicated to the intersection of functionality, aesthetic rigor, and environmental context.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Banner */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full h-[60vh] bg-secondary"
      >
        <img 
          src="/images/hero-bg.png" 
          alt="Studio atmosphere" 
          className="w-full h-full object-cover grayscale opacity-80"
        />
      </motion.section>

      {/* Values / Philosophy */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-serif text-4xl font-bold mb-8">Our Philosophy</h2>
              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                <p>
                  We believe that architecture is a profound responsibility. A building outlives its creators, shaping the experiences of those who inhabit it for generations.
                </p>
                <p>
                  Our design process is deeply rooted in context. We study the light, the landscape, and the local culture to create structures that feel inevitable rather than imposed.
                </p>
                <p>
                  Material honesty is our guiding principle. We favor raw concrete, warm timber, and solid stone—materials that age gracefully and express their structural purpose clearly.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-10">
              {[
                { title: "Precision", desc: "Exacting standards in every detail, from foundational plans to finishing touches." },
                { title: "Intention", desc: "Every design decision serves a clear purpose. No superfluous ornamentation." },
                { title: "Longevity", desc: "Building structures designed to endure both structurally and stylistically." }
              ].map((val, i) => (
                <motion.div 
                  key={val.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="border-t border-border pt-6"
                >
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">{val.title}</h3>
                  <p className="text-muted-foreground font-light">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-20"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl font-light">The architects guiding our vision and execution.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Tariq Rahman", role: "Principal Architect", img: "/images/team-1.png" },
              { name: "Nadia Hussain", role: "Head of Interior Design", img: "" },
              { name: "Kamal Ahmed", role: "Lead Project Manager", img: "" }
            ].map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group"
              >
                <div className="aspect-[4/5] bg-secondary mb-6 overflow-hidden rounded-sm">
                  {member.img ? (
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">Image Pending</div>
                  )}
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm uppercase tracking-widest font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
