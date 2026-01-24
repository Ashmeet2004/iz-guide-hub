import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Briefcase, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/home/SectionHeading";
import ServiceCard from "@/components/home/ServiceCard";
import servicesHeroImg from "@/assets/heroes/services-hero.jpg";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        badge="Our Services"
        badgeIcon={Briefcase}
        title="Comprehensive Business"
        highlightedTitle="Solutions"
        description="From registration to compliance, we provide end-to-end services to help your business grow and stay compliant."
        backgroundImage={servicesHeroImg}
      />

      {/* Services Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="What We Offer"
            title="Expert Services for Your"
            highlight="Business"
            description="Choose from our comprehensive range of business solutions designed to meet all your compliance and financial needs."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                slug={service.slug}
                name={service.name}
                description={service.description}
                icon={service.icon}
                subServices={service.subServices}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-12 rounded-3xl bg-card border border-border/30 shadow-2xl overflow-hidden text-center">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                  <Sparkles className="h-4 w-4" />
                  Free Consultation
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Not Sure Which Service You Need?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Our expert team will guide you through the right services based on your 
                  business requirements. Get a free consultation today!
                </p>
                
                <Link to="/contact">
                  <Button variant="accent" size="xl" className="group shadow-lg shadow-accent/20">
                    Get Free Consultation
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-success" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits - Premium Grid */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Why Choose Us"
            title="Benefits of Our"
            highlight="Services"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="group"
              >
                <div className="relative h-full text-center p-8 rounded-3xl bg-card border border-border/30 shadow-card overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-accent/30">
                  {/* Number badge */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-white text-2xl font-bold mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                    {index + 1}
                  </div>
                  
                  <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-success transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps - Premium Design */}
      <section className="py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, hsl(204 71% 22%) 0%, hsl(204 71% 18%) 50%, hsl(204 71% 15%) 100%)'
      }}>
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/30 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="How It Works"
            title="Simple Process to Get"
            highlight="Started"
            light
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Tell Us Your Needs", desc: "Share your business requirements with our experts" },
              { step: "02", title: "Get Expert Guidance", desc: "Receive personalized recommendations and quotes" },
              { step: "03", title: "We Handle Everything", desc: "Sit back while we complete all formalities" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Connecting line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-white/40 to-white/10 origin-left"
                    />
                  </div>
                )}
                
                {/* Step circle */}
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 rounded-full bg-accent blur-xl opacity-30" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-xl">
                    <span className="text-white text-2xl font-bold">{item.step}</span>
                    <div className="absolute inset-1 rounded-full bg-gradient-to-t from-transparent to-white/20" />
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
