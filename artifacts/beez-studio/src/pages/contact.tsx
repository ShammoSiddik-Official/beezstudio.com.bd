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
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Reach out to discuss your next architectural, interior, or construction project. We look forward to building together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:col-span-5 space-y-12"
          >
            {/* 4.1 Our Location */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-2xl mb-3 text-foreground">Our Location</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  F-109, H-41/B, R-01<br />
                  Dhanmondi R/A<br />
                  Dhaka-1205, Bangladesh
                </p>
              </div>
            </div>
            
            {/* 4.2 Let's Talk */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-2xl mb-3 text-foreground">Let's Talk</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  +880 1711 18066<br />
                  Fax: +880 2 44612330
                </p>
              </div>
            </div>

            {/* 4.3 Email Us */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-2xl mb-3 text-foreground">Email Us</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <a href="mailto:support@beezstudio.com.bd" className="hover:text-primary transition-colors">support@beezstudio.com.bd</a><br />
                  <a href="http://www.beezstudio.com.bd" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">www.beezstudio.com.bd</a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Message Box (4.4) */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:col-span-7 bg-card border border-border p-8 md:p-12 rounded-sm"
          >
            <h3 className="font-serif text-3xl font-bold mb-8 text-foreground">Send a Direct Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    data-testid="input-name"
                    className="w-full bg-background border border-border p-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    data-testid="input-email"
                    className="w-full bg-background border border-border p-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground uppercase tracking-widest">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    data-testid="input-phone"
                    className="w-full bg-background border border-border p-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground uppercase tracking-widest">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required 
                    data-testid="input-subject"
                    className="w-full bg-background border border-border p-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground uppercase tracking-widest">Your Message</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  required
                  data-testid="input-message"
                  className="w-full bg-background border border-border p-4 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                data-testid="button-submit"
                className="w-full py-4 bg-foreground text-background hover:bg-primary transition-colors duration-300 rounded-sm font-bold tracking-widest uppercase text-sm disabled:opacity-70 flex justify-center items-center mt-4"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
