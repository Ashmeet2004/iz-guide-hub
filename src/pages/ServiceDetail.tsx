import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/data/services";
import Layout from "@/components/layout/Layout";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
            <Link to="/services">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Services
          </Link>
          
          <div className="flex items-start gap-6">
            <div className="inline-flex p-4 rounded-xl bg-accent/20 shrink-0">
              <ServiceIcon className="h-12 w-12 text-accent" />
            </div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl md:text-5xl font-bold mb-4"
              >
                {service.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-primary-foreground/80 max-w-3xl"
              >
                {service.description}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Our {service.name} Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg"
            >
              Choose from our comprehensive range of {service.name.toLowerCase()} services
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((subService, index) => (
              <motion.div
                key={subService.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-success/10 text-success shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {subService.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {subService.description}
                    </p>
                    <Link 
                      to="/contact"
                      className="inline-flex items-center text-sm text-accent font-medium hover:underline"
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              How We Work
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Consultation", desc: "Share your requirements with our experts" },
              { step: "02", title: "Documentation", desc: "We collect and verify all necessary documents" },
              { step: "03", title: "Processing", desc: "Our team handles the complete process" },
              { step: "04", title: "Delivery", desc: "Receive your certificates and documents" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-primary-foreground/80 text-lg mb-8"
            >
              Contact our experts today for a free consultation and get your 
              {" "}{service.name.toLowerCase()} done quickly and hassle-free.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button variant="heroOutline" size="xl">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Explore Other Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services
              .filter((s) => s.id !== service.id)
              .map((otherService, index) => (
                <Link
                  key={otherService.id}
                  to={`/services/${otherService.slug}`}
                  className="group p-4 rounded-xl bg-card shadow-card hover:shadow-xl transition-all text-center"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-primary text-primary-foreground mb-3 group-hover:scale-110 transition-transform">
                    <otherService.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-sm text-foreground group-hover:text-accent transition-colors">
                    {otherService.name}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
