import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  ChevronUp,
  MessageSquareQuote
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

  const usefulLinks = [
    { name: "FAQ", path: "/contact" },
    { name: "How It Works", path: "/about" },
    { name: "Why Choose Us", path: "/about" },
    { name: "Career", path: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative">
      {/* CTA Section - Light Background with City Pattern */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div 
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, hsl(204 71% 97%) 0%, hsl(204 50% 95%) 50%, hsl(204 71% 97%) 100%)'
            }}
          >
            {/* City Skyline Pattern - Left Side */}
            <div 
              className="absolute left-0 bottom-0 w-1/3 h-full opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect x='20' y='100' width='40' height='200' fill='%23185888'/%3E%3Crect x='70' y='60' width='50' height='240' fill='%23185888'/%3E%3Crect x='130' y='120' width='35' height='180' fill='%23185888'/%3E%3Crect x='175' y='80' width='45' height='220' fill='%23185888'/%3E%3Crect x='230' y='140' width='30' height='160' fill='%23185888'/%3E%3Crect x='270' y='90' width='55' height='210' fill='%23185888'/%3E%3Crect x='335' y='110' width='40' height='190' fill='%23185888'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left bottom',
                backgroundSize: 'contain'
              }}
            />
            
            {/* Dot Pattern - Right Side */}
            <div 
              className="absolute right-0 top-0 w-1/3 h-full opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, hsl(204 71% 31%) 1px, transparent 0)`,
                backgroundSize: '16px 16px'
              }}
            />

            <div className="relative z-10 py-16 px-8 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MessageSquareQuote className="h-4 w-4" />
                Get Started Today
              </div>
              
              {/* Heading */}
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Ready To </span>
                <span className="text-primary">Start?</span>
              </h2>
              
              {/* Subheading */}
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
                Get expert guidance for all your business registration, tax, and compliance needs—no pressure.
              </p>
              
              {/* CTA Button */}
              <Link to="/contact">
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="gap-2 px-8 shadow-lg"
                >
                  <MessageSquareQuote className="h-5 w-5" />
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer - Dark Blue Background */}
      <div 
        className="relative text-primary-foreground"
        style={{
          background: 'linear-gradient(180deg, hsl(204 71% 25%) 0%, hsl(204 71% 20%) 100%)'
        }}
      >
        {/* Subtle Dot Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <img src={logo} alt="CA India" className="h-14 w-auto rounded-lg bg-white p-1" />
              </Link>
              <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
                Your trusted partner for all business registration, taxation, and compliance services. 
                We provide legal and financial guidance to help your business grow with confidence.
              </p>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-5">Our Services</h3>
              <ul className="space-y-3">
                {services.slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-5">Useful Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-5">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="tel:+919876543210" 
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    <Phone className="h-4 w-4 text-accent shrink-0" />
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:info@caindiaservices.com" 
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4 text-accent shrink-0" />
                    info@caindiaservices.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 relative z-10">
          <div className="container mx-auto px-4 py-5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-primary-foreground/60 text-sm">
                © {new Date().getFullYear()} CA India. All rights reserved.
              </p>
              
              {/* Legal Links - Center */}
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors underline underline-offset-2">
                  Privacy Policy
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors underline underline-offset-2">
                  Terms of Service
                </a>
              </div>

              {/* Scroll to Top Button */}
              <button 
                onClick={scrollToTop}
                className="p-2 rounded-md bg-primary-foreground/10 hover:bg-accent transition-colors"
                aria-label="Scroll to top"
              >
                <ChevronUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
