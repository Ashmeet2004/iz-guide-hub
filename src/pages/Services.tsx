import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import Layout from "@/components/layout/Layout";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              Comprehensive Business Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              From registration to compliance, we provide end-to-end services 
              to help your business grow and stay compliant.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group block h-full"
                >
                  <div className="h-full p-8 rounded-2xl bg-card shadow-card hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent/20 hover:-translate-y-2">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-primary text-primary-foreground mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.subServices.slice(0, 4).map((sub, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                          {sub.name}
                        </div>
                      ))}
                      {service.subServices.length > 4 && (
                        <div className="text-sm text-accent font-medium">
                          +{service.subServices.length - 4} more services
                        </div>
                      )}
                    </div>

                    <div className="flex items-center text-accent font-semibold">
                      View All Services
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Not Sure Which Service You Need?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg mb-8"
            >
              Our expert team will guide you through the right services based on your 
              business requirements. Get a free consultation today!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <Button variant="accent" size="xl" className="group">
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background pattern-grid">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Why Choose Our Services
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "100% Online", desc: "Complete your work from anywhere with our digital-first approach" },
              { title: "Expert Team", desc: "Qualified CAs with specialized expertise in every domain" },
              { title: "Quick Process", desc: "Fast turnaround time with minimal documentation requirements" },
              { title: "Transparent Pricing", desc: "No hidden charges, get clear pricing upfront" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-card shadow-card"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
