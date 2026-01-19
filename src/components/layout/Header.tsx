import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-hero text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              +91 98765 43210
            </a>
            <a href="mailto:info@caindiaservices.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              info@caindiaservices.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-lg shadow-lg"
            : "bg-card"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="CA India" className="h-14 w-auto" />
              <div className="hidden sm:block">
                <h1 className="font-display text-xl font-bold text-primary">CA India</h1>
                <p className="text-xs text-muted-foreground">Chartered Accountants</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                >
                  <Link to={link.path}>
                    <Button
                      variant={isActive(link.path) ? "navActive" : "nav"}
                      className="flex items-center gap-1"
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                      )}
                    </Button>
                  </Link>

                  {/* Mega Menu */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        >
                          <div className="bg-card rounded-2xl shadow-xl border border-border p-6 grid grid-cols-3 gap-4 min-w-[700px]">
                            {services.map((service) => (
                              <Link
                                key={service.id}
                                to={`/services/${service.slug}`}
                                className="group flex items-start gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
                              >
                                <div className="p-2 rounded-lg bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform">
                                  <service.icon className="h-5 w-5" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                                    {service.name}
                                  </h4>
                                  <p className="text-sm text-muted-foreground line-clamp-2">
                                    {service.shortDescription}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/contact">
                <Button variant="accent" size="lg">
                  Get Free Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        to={link.path}
                        className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                          isActive(link.path)
                            ? "bg-secondary text-accent"
                            : "hover:bg-secondary"
                        }`}
                      >
                        {link.name}
                      </Link>
                      {link.hasDropdown && (
                        <div className="ml-4 mt-2 space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              to={`/services/${service.slug}`}
                              className="block py-2 px-4 text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Link to="/contact" className="mt-4">
                    <Button variant="accent" className="w-full">
                      Get Free Consultation
                    </Button>
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
