import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Phone, 
  Calculator, 
  FileText,
  Clock,
  BadgeCheck,
  TrendingUp,
  PiggyBank,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/data/services";
import { getServiceContent } from "@/data/servicesContent";
import Layout from "@/components/layout/Layout";

// Import images
import heroImage from "@/assets/services/income-tax.jpg";
import itrFilingImage from "@/assets/services/itr-filing.jpg";
import consultationImage from "@/assets/services/consultation.jpg";
import teamImage from "@/assets/services/team-working.jpg";

const IncomeTaxService = () => {
  const service = getServiceBySlug("income-tax");
  const content = getServiceContent("income-tax");

  if (!service || !content) {
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Income Tax Services" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </div>
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Services
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent mb-6"
              >
                <Calculator className="h-4 w-4" />
                <span className="text-sm font-medium">Income Tax Services</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                {content.heroTitle}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-primary-foreground/80 mb-8 max-w-xl"
              >
                {content.heroSubtitle}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <Button variant="hero" size="xl" className="group">
                    File ITR Now
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:+919876543210">
                  <Button variant="heroOutline" size="xl">
                    <Phone className="h-5 w-5 mr-2" />
                    Free Tax Consultation
                  </Button>
                </a>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">10K+</div>
                  <p className="text-primary-foreground/80">ITRs Filed Annually</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">24-48h</div>
                  <p className="text-primary-foreground/80">Quick Processing</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">20+</div>
                  <p className="text-primary-foreground/80">Years Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <p className="text-primary-foreground/80">Secure Filing</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src={itrFilingImage} 
                alt="ITR Filing" 
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
              >
                Expert Income Tax Filing & Planning
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-lg mb-8"
              >
                {content.overview}
              </motion.p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {content.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ITR Forms Guide */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Which ITR Form is Right for You?
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { form: "ITR-1", title: "SAHAJ", for: "Salaried individuals with income up to ₹50 lakhs from salary, one house property, and other sources" },
              { form: "ITR-2", title: "Capital Gains", for: "Individuals with capital gains, multiple house properties, or foreign income" },
              { form: "ITR-3", title: "Business Income", for: "Individuals and HUFs with income from business or profession" },
              { form: "ITR-4", title: "SUGAM", for: "Presumptive income under Section 44AD, 44ADA, or 44AE" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-background shadow-card"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground font-bold mb-4">
                  {item.form.split('-')[1]}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{item.form}</h3>
                <p className="text-accent font-medium mb-3">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.for}</p>
              </motion.div>
            ))}
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
              Our Income Tax Services
            </motion.h2>
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
                <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground inline-flex mb-4 group-hover:scale-110 transition-transform">
                  <Calculator className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-accent transition-colors">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Saving Tips */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
              >
                Smart Tax Saving Strategies
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-lg mb-8"
              >
                Our experts help you maximize tax savings through legal deductions and exemptions. Here are popular ways to save tax:
              </motion.p>
              
              <div className="space-y-4">
                {[
                  { icon: PiggyBank, title: "Section 80C Investments", desc: "Save up to ₹46,800 through PPF, ELSS, LIC, etc. (Limit: ₹1.5 lakhs)" },
                  { icon: Shield, title: "Health Insurance (80D)", desc: "Deduction up to ₹75,000 for self and senior citizen parents" },
                  { icon: TrendingUp, title: "NPS Contribution (80CCD)", desc: "Additional ₹50,000 deduction over 80C limit" },
                  { icon: FileText, title: "HRA Exemption", desc: "Claim rent paid as tax exemption if HRA is part of salary" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background"
                  >
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src={consultationImage} 
                alt="Tax Consultation" 
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              ITR Filing Process
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {content.process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {index < content.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent/20" />
                )}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="font-display text-3xl md:text-4xl font-bold mb-6"
              >
                Why Choose CA India for Income Tax?
              </motion.h2>
              
              <div className="space-y-4">
                {content.whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <BadgeCheck className="h-5 w-5 text-accent shrink-0" />
                    <span>{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src={teamImage} 
                alt="Our Expert Team" 
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
            </div>

            <div className="space-y-4">
              {content.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-card shadow-card"
                >
                  <h3 className="font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-accent">Q.</span>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground pl-7">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to File Your Income Tax Return?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/90 text-lg mb-8"
            >
              Let our expert CAs handle your tax filing while you focus on what matters most.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="xl" className="bg-white text-accent hover:bg-white/90 group">
                  File ITR Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button variant="heroOutline" size="xl" className="border-white text-white hover:bg-white/10">
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
              .map((otherService) => (
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

export default IncomeTaxService;
