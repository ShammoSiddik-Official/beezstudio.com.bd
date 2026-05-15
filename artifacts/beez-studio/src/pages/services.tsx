import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Compass,
  Layers,
  HardHat,
  Factory,
  Trees,
  GraduationCap,
  Building2,
  ArrowRight,
  CheckCircle2,
  Landmark,
  Ruler,
  Hammer,
  MessagesSquare,
  Wrench,
  Hotel,
  Leaf,
  Pickaxe,
} from "lucide-react";

const SERVICES = [
  {
    icon: Compass,
    title: "Architecture & Planning",
    description:
      "From the first concept sketch to fully coordinated construction drawings, we deliver comprehensive architectural design across every building typology — residential, commercial, industrial, and institutional. Our designs are rooted in contextual sensitivity, technical rigour, and aesthetic ambition.",
    deliverables: [
      "Concept & schematic design",
      "Design development",
      "Construction documentation",
      "Building permit drawings",
    ],
  },
  {
    icon: Layers,
    title: "Interior Design",
    description:
      "Spatial environments that balance function with beauty. We design interiors from the ground up — space planning, material selection, lighting design, furniture specification, and finishing — creating spaces that are harmonious, purposeful, and unmistakably considered.",
    deliverables: [
      "Space planning & layouts",
      "Material & finish selection",
      "Lighting design",
      "Furniture specification",
    ],
  },
  {
    icon: HardHat,
    title: "Construction Management",
    description:
      "Full oversight of construction from site mobilisation to final handover. Our project managers embed quality control, schedule management, and cost discipline into every phase, ensuring the built result faithfully reflects the design intent.",
    deliverables: [
      "Contractor procurement",
      "Site supervision",
      "Quality assurance",
      "Progress reporting & handover",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Construction",
    description:
      "Steel-structure industrial facilities engineered for operational efficiency without sacrificing architectural consideration. We design and build factories, warehouses, processing plants, and manufacturing units that perform as hard as the industries they serve.",
    deliverables: [
      "Pre-engineered steel structures",
      "Factory & warehouse design",
      "MEP coordination",
      "Industrial fit-out",
    ],
  },
  {
    icon: Trees,
    title: "Landscape Design",
    description:
      "Outdoor environments that extend architecture into the natural world. We design gardens, plazas, green corridors, and public realm projects that bring ecological value, visual coherence, and genuine livability to every site.",
    deliverables: [
      "Site analysis & masterplanning",
      "Soft & hard landscaping",
      "Irrigation & drainage design",
      "Public realm design",
    ],
  },
  {
    icon: GraduationCap,
    title: "Campus & Institutional Design",
    description:
      "Educational and healthcare environments require architectural sensitivity above and beyond the ordinary. We design campuses, schools, universities, and medical facilities that support learning, healing, and community — built to endure for generations.",
    deliverables: [
      "Masterplanning & zoning",
      "Academic & clinical buildings",
      "Accessibility & wayfinding",
      "Phased construction planning",
    ],
  },
  {
    icon: Building2,
    title: "Religious Architecture",
    description:
      "Sacred spaces demand the highest architectural respect. We approach mosques, temples, and community prayer halls with reverence for tradition, sensitivity to community need, and an unwavering commitment to craftsmanship in every material decision.",
    deliverables: [
      "Spatial & orientation design",
      "Acoustic & lighting design",
      "Traditional detailing & ornamentation",
      "Community facility integration",
    ],
  },
  {
    icon: Landmark,
    title: "Bridge & Infrastructure",
    description:
      "Civil infrastructure projects that combine structural engineering precision with architectural sensibility. From pedestrian bridges to vehicular crossings and civic infrastructure, we bring design ambition to projects that define the public realm.",
    deliverables: [
      "Structural design coordination",
      "Construction supervision",
      "Traffic & load analysis",
      "Finishing & public interface design",
    ],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Brief & Discovery",
    description:
      "We begin by listening — understanding your goals, constraints, site context, and the people who will use the space.",
  },
  {
    step: "02",
    title: "Concept Design",
    description:
      "Initial design directions are explored, tested, and refined. We present options that respond to the brief with clarity and ambition.",
  },
  {
    step: "03",
    title: "Design Development",
    description:
      "The chosen concept is developed in detail — structure, materials, MEP coordination, and regulatory compliance resolved at every level.",
  },
  {
    step: "04",
    title: "Construction Documentation",
    description:
      "Complete, coordinated drawing sets and specifications produced for tender, permit, and construction.",
  },
  {
    step: "05",
    title: "Site Supervision",
    description:
      "Our team visits site regularly to verify quality, resolve issues, and ensure the built work reflects the design intent.",
  },
  {
    step: "06",
    title: "Handover",
    description:
      "We complete a thorough inspection and defect resolution before signing off, ensuring you receive a project that exceeds expectations.",
  },
];

export default function ServicesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="pt-40 pb-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-6 block">
              What We Do
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
              End-to-end architectural, design, and construction services for projects of every scale. From a private residence to a large industrial complex, we bring the same depth of expertise to every engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stat bar */}
      <section className="py-14 bg-card border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "17+", label: "Years of Practice" },
              { value: "8", label: "Service Disciplines" },
              { value: "11", label: "Project Categories" },
              { value: "100+", label: "Completed Projects" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center md:text-left"
              >
                <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Disciplines We Master
            </h2>
            <p className="text-muted-foreground font-light text-lg max-w-xl">
              Every service we offer is backed by in-house expertise and a proven track record of delivery.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group bg-card border border-border rounded-sm p-8 md:p-10 hover:border-primary/40 transition-colors duration-300"
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold pt-2">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((d, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-primary shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Disciplines We Master */}
      <section className="py-24 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              Full Scope
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Disciplines We Master
            </h2>
            <p className="text-muted-foreground font-light text-lg max-w-xl">
              Our expertise spans the full spectrum of the built environment — from individual homes to infrastructure at a national scale.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Compass,
                title: "Architecture & Planning",
                desc: "Comprehensive design from concept through construction documents, covering every building type and scale.",
              },
              {
                icon: Building2,
                title: "Apartments & Residences",
                desc: "Multi-storey residential blocks and private homes designed around how families actually live.",
              },
              {
                icon: Ruler,
                title: "Interior Design",
                desc: "Spatial environments shaped by material honesty, lighting intelligence, and deep understanding of use.",
              },
              {
                icon: HardHat,
                title: "Construction Management",
                desc: "End-to-end site oversight ensuring quality, schedule, and budget are delivered without compromise.",
              },
              {
                icon: Factory,
                title: "Industrial Construction",
                desc: "Pre-engineered steel structures and factory facilities built for operational efficiency and durability.",
              },
              {
                icon: Trees,
                title: "Landscape Design",
                desc: "Gardens, plazas, resort grounds, and ecological open spaces designed as natural extensions of architecture.",
              },
              {
                icon: MessagesSquare,
                title: "Campus & Institutional",
                desc: "University, school, and medical campuses designed to support learning, healing, and long-term community.",
              },
              {
                icon: Landmark,
                title: "Religious Architecture",
                desc: "Mosques and sacred spaces built with reverence for tradition, acoustic precision, and community need.",
              },
              {
                icon: Hotel,
                title: "Hotels & Resorts",
                desc: "Hospitality environments that balance guest comfort, operational efficiency, and architectural distinctiveness.",
              },
              {
                icon: Wrench,
                title: "Corporate Buildings",
                desc: "Office towers, commercial centres, and mixed-use developments serving Bangladesh's business landscape.",
              },
              {
                icon: Leaf,
                title: "Tourism Development",
                desc: "Eco-resorts, riverside retreats, and tourism facilities that integrate sensitively with their natural setting.",
              },
              {
                icon: GraduationCap,
                title: "Bridge & Infrastructure",
                desc: "Structural bridges and civic infrastructure combining engineering rigour with architectural sensibility.",
              },
              {
                icon: Pickaxe,
                title: "Project & Construction Management",
                desc: "Full programme management for large, complex builds — coordinating design, contractors, and compliance.",
              },
              {
                icon: Hammer,
                title: "Monuments & Sculpture",
                desc: "Commemorative installations and public sculptures that define the character of civic and institutional spaces.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-5 p-6 bg-background rounded-sm border-y border-r border-border border-l-2 border-l-primary hover:bg-secondary/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              Our Approach
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground font-light text-lg max-w-xl">
              A structured, transparent process — from the first conversation to the final handover.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROCESS.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors duration-300 py-2"
              >
                <span className="font-serif text-5xl font-bold text-primary/15 absolute -top-2 right-0 select-none">
                  {phase.step}
                </span>
                <h3 className="font-serif text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Start<br />
              <span className="text-primary italic font-light">Your Project?</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-10">
              Every landmark begins with a conversation. Share your vision with us and we will show you how Beez Studio can bring it to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 rounded-sm font-medium tracking-widest uppercase text-sm"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 border border-border hover:border-primary text-foreground hover:text-primary transition-colors duration-300 rounded-sm font-medium tracking-widest uppercase text-sm"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
