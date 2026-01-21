import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import logo from "@/assets/logo.jpeg";
import ctaBackground from "@/assets/cta-background.jpg";



const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="relative rounded-3xl p-10 md:p-16 text-center bg-white shadow-xl overflow-hidden">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-primary/20 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-accent/20 rounded-br-3xl" />
          
          {/* Subtle pattern background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              Free Consultation Available
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
              Ready to Start Your Business Journey?
            </h2>
            
            <p className="text-success mb-10 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Get expert guidance for all your business registration, tax, and compliance needs. 
              Schedule a free consultation with our experienced chartered accountants.
            </p>
            
            <Link to="/contact">
              <Button variant="accent" size="lg" className="shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 px-8">
                Schedule Free Consultation
              </Button>
            </Link>
            
            {/* Trust badges */}
            <div className="mt-10 pt-8 border-t border-border flex flex-wrap justify-center gap-8 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <span className="text-success font-bold">✓</span>
                15+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success font-bold">✓</span>
                10,000+ Happy Clients
              </div>
              <div className="flex items-center gap-2">
                <span className="text-success font-bold">✓</span>
                100% Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 border-t border-primary-foreground/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="CA India" className="h-16 w-auto rounded-lg bg-white p-1" />
            </Link>
            <p className="text-primary-foreground/70 mb-6">
              Your trusted partner for all business registration, taxation, and compliance services. 
              We help businesses grow with expert financial guidance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 shrink-0" />
                <span className="text-primary-foreground/70">
                  123, Business Tower, MG Road,<br />
                  New Delhi - 110001, India
                </span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="h-5 w-5 text-accent shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:info@caindiaservices.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail className="h-5 w-5 text-accent shrink-0" />
                  info@caindiaservices.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-1 shrink-0" />
                <span className="text-primary-foreground/70">
                  Mon - Sat: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} CA India. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
