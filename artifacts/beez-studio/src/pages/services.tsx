import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Services() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const services = [
    {
      id: "architecture",
      title: "Architecture & Planning",
      desc: "From conceptual sketches to detailed blueprints, we design buildings that are functionally superior and visually striking. We handle zoning, spatial planning, and full architectural detailing.",
      img: "/images/project-2.png"
    },
    {
      id: "interior",
      title: "Interior Design",
      desc: "We craft interiors that speak the same language as the exterior architecture. Focusing on material honesty, natural light, and bespoke details to create immersive environments.",
      img: "/images/project-5.png"
    },
    {
      id: "construction",
      title: "Construction Management",
      desc: "Our involvement doesn't end at the drawing board. We oversee the construction process, ensuring our precise design intent translates perfectly into built reality.",
      img: "/images/project-1.png"
    },
    {
      id: "renovation",
      title: "Renovation & Remodeling",
      desc: "Breathing new life into existing structures. We respect heritage while injecting modern functionality and aesthetic refinement.",
      img: "/images/project-4.png"
    }
  ];

  return (
    <div className="w-full pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-24"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">Services</h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            A holistic approach to building. We bridge the gap between visionary design and meticulous execution, offering end-to-end architectural services.
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-sm bg-secondary">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="text-primary text-sm font-bold tracking-widest uppercase mb-4">0{index + 1}</div>
                <h2 className="font-serif text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
                  {service.desc}
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block border-b border-foreground pb-1 uppercase tracking-widest text-sm font-medium hover:text-primary hover:border-primary transition-colors"
                >
                  Inquire About This Service
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
