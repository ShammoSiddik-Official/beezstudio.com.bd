import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Whether you have a specific project in mind or simply want to explore possibilities, we welcome the conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-12"
          >
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-serif font-semibold text-xl mb-2 text-foreground">Studio Location</h4>
                    <p className="text-muted-foreground font-light">Level 5, House 42, Road 11<br />Block F, Banani<br />Dhaka 1213, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-serif font-semibold text-xl mb-2 text-foreground">Phone</h4>
                    <p className="text-muted-foreground font-light">+880 1711 223 344<br />+880 2 987 6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-serif font-semibold text-xl mb-2 text-foreground">Email</h4>
                    <p className="text-muted-foreground font-light">info@beezstudio.com.bd<br />projects@beezstudio.com.bd</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-border">
              <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-6">Business Hours</h3>
              <div className="grid grid-cols-2 gap-4 text-muted-foreground font-light">
                <div>Sunday - Thursday</div>
                <div>10:00 AM - 6:00 PM</div>
                <div>Friday - Saturday</div>
                <div>Closed</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-card border border-border p-8 md:p-12 rounded-sm"
          >
            <h3 className="font-serif text-3xl font-bold mb-8 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    data-testid="input-name"
                    className="w-full bg-background border border-border p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    data-testid="input-email"
                    className="w-full bg-background border border-border p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="projectType" className="text-sm font-medium text-foreground">Project Type</label>
                <select 
                  id="projectType" 
                  required
                  data-testid="input-project-type"
                  className="w-full bg-background border border-border p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-foreground"
                >
                  <option value="" disabled selected>Select a type...</option>
                  <option value="residential">Residential Architecture</option>
                  <option value="commercial">Commercial Architecture</option>
                  <option value="interior">Interior Design</option>
                  <option value="renovation">Renovation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Project Details</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  required
                  data-testid="input-message"
                  className="w-full bg-background border border-border p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your vision, location, and timeline..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                data-testid="button-submit"
                className="w-full py-4 bg-foreground text-background hover:bg-primary transition-colors duration-300 rounded-sm font-medium tracking-widest uppercase text-sm disabled:opacity-70 flex justify-center items-center"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
