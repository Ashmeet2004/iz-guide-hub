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


const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      {/* CTA Section with Modern Gradient & Floating Elements */}
      <div className="container mx-auto px-4 py-12">
        <div className="relative rounded-3xl p-8 md:p-16 text-center overflow-hidden bg-gradient-to-br from-primary via-primary to-[#0d3a5c]">
          
          {/* Animated floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large circle - top right */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-pulse" />
            {/* Medium circle - bottom left */}
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#4ebb44]/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            {/* Small accent circle */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-accent/30 blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            {/* Floating icons/shapes */}
            <div className="absolute top-8 left-8 md:top-12 md:left-16 text-4xl md:text-5xl opacity-20 animate-float">📈</div>
            <div className="absolute top-16 right-12 md:top-20 md:right-24 text-3xl md:text-4xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>💼</div>
            <div className="absolute bottom-12 left-16 md:bottom-16 md:left-32 text-3xl md:text-4xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🚀</div>
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-20 text-4xl md:text-5xl opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>📊</div>
            <div className="absolute top-1/2 left-4 md:left-8 text-2xl md:text-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }}>💰</div>
            <div className="absolute top-1/3 right-4 md:right-10 text-2xl md:text-3xl opacity-15 animate-float" style={{ animationDelay: '2.5s' }}>⚡</div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
            
            {/* Decorative lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f57923" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#4ebb44" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <path d="M0,100 Q200,50 400,100 T800,100" fill="none" stroke="url(#lineGrad)" strokeWidth="2" className="animate-pulse" />
              <path d="M0,200 Q300,150 600,200 T1200,200" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '1s' }} />
            </svg>
          </div>
          
          {/* Glassmorphism card */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Free Consultation Available
              </div>
              
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Ready to Start Your<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#4ebb44] to-accent">
                  Business Journey?
                </span>
              </h2>
              
              <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                Get expert guidance for all your business registration, tax, and compliance needs. 
                Schedule a free consultation with our experienced chartered accountants.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="group shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all duration-300">
                    Schedule Free Consultation
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                    Explore Services
                  </Button>
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#4ebb44]">✓</span>
                  15+ Years Experience
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#4ebb44]">✓</span>
                  10,000+ Happy Clients
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#4ebb44]">✓</span>
                  100% Satisfaction
                </div>
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
