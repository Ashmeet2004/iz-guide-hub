import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Award, 
  TrendingUp, 
  Clock,
  Shield,
  HeartHandshake,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import teamImg from "@/assets/team.jpg";

const stats = [
  { number: "15+", label: "Years Experience", icon: Clock },
  { number: "5000+", label: "Happy Clients", icon: Users },
  { number: "10000+", label: "Projects Completed", icon: Award },
  { number: "99%", label: "Success Rate", icon: TrendingUp },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "100% Compliance Guaranteed",
    description: "We ensure your business stays fully compliant with all regulatory requirements."
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Personal relationship manager assigned to handle all your queries and needs."
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast and efficient service delivery with minimal documentation hassle."
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Team of qualified CAs and professionals with deep industry expertise."
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Tech Solutions Pvt Ltd",
    content: "Excellent service! They helped us with company registration and GST compliance seamlessly. Highly recommended for startups.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    company: "Fashion Hub",
    content: "Very professional team. They handled our income tax matters with great expertise and saved us significant tax amount.",
    rating: 5
  },
  {
    name: "Amit Patel",
    company: "Export House",
    content: "Their knowledge of IEC registration and FSSAI licensing is exceptional. They made the entire process smooth and hassle-free.",
    rating: 5
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-hero opacity-90 z-10" />
          <img 
            src={heroBg} 
            alt="Professional accounting office" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 z-10 pattern-dots opacity-20" />

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
                Trusted Chartered Accountants Since 2009
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              Your Partner for{" "}
              <span className="text-accent">Business Growth</span> &{" "}
              <span className="text-success">Financial Success</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
            >
              Expert guidance for company registration, GST, income tax, business licenses, 
              and complete financial compliance. We simplify complex regulations so you can focus 
              on building your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="heroOutline" size="xl">
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-8"
            >
              {[
                "100% Online Process",
                "Expert CA Team",
                "Quick Response"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-primary-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card relative -mt-16 z-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-card shadow-card hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-primary text-primary-foreground mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background pattern-grid">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Comprehensive Business Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg"
            >
              From company registration to tax compliance, we offer end-to-end services 
              to help your business thrive in the competitive market.
            </motion.p>
          </div>

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
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.subServices.slice(0, 3).map((sub, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-secondary rounded-full text-xs text-secondary-foreground"
                        >
                          {sub.name}
                        </span>
                      ))}
                      {service.subServices.length > 3 && (
                        <span className="px-3 py-1 bg-accent/10 rounded-full text-xs text-accent">
                          +{service.subServices.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-accent font-semibold">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Partner for Business Success
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                With over 15 years of experience, we have helped thousands of businesses 
                navigate complex regulations and achieve their financial goals.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-gradient-accent text-accent-foreground shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={teamImg} 
                alt="Our professional team" 
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm opacity-80">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              What Our Clients Say
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-card shadow-card"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-accent">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-primary-foreground/80 text-lg"
            >
              Simple and transparent process to get your work done
            </motion.p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Share Requirements", desc: "Tell us about your business needs and goals" },
              { step: "02", title: "Get Expert Advice", desc: "Our CA team provides personalized guidance" },
              { step: "03", title: "Document Collection", desc: "We collect and verify necessary documents" },
              { step: "04", title: "Task Completion", desc: "We complete the work and deliver on time" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground text-2xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-primary-foreground/70">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary-foreground/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
