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
  Sparkles,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import teamImg from "@/assets/team.jpg";

// Custom components
import AnimatedCounter from "@/components/home/AnimatedCounter";
import ServiceCard from "@/components/home/ServiceCard";
import TestimonialCard from "@/components/home/TestimonialCard";
import SectionHeading from "@/components/home/SectionHeading";
import ProcessStep from "@/components/home/ProcessStep";
import FeatureHighlight from "@/components/home/FeatureHighlight";

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

const processSteps = [
  { step: "01", title: "Share Requirements", desc: "Tell us about your business needs and goals" },
  { step: "02", title: "Get Expert Advice", desc: "Our CA team provides personalized guidance" },
  { step: "03", title: "Document Collection", desc: "We collect and verify necessary documents" },
  { step: "04", title: "Task Completion", desc: "We complete the work and deliver on time" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85 z-10" />
          <img 
            src={heroBg} 
            alt="Professional accounting office" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-[120px] z-10" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-success/20 rounded-full blur-[100px] z-10" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white/90 mb-8"
              >
                <Sparkles className="h-4 w-4 text-accent" />
                Trusted Chartered Accountants Since 2009
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-[1.1]"
              >
                Your Partner for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-accent">Business Growth</span>
                  <motion.span 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -z-0 origin-left"
                  />
                </span>
                {" "}& <span className="text-success">Financial Success</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl"
              >
                Expert guidance for company registration, GST, income tax, business licenses, 
                and complete financial compliance. We simplify complex regulations so you can focus 
                on building your business.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <Link to="/contact">
                  <Button size="xl" className="group bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl shadow-accent/25 border-0">
                    Get Free Consultation
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">
                    <Play className="h-4 w-4 mr-2" />
                    Explore Services
                  </Button>
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-6"
              >
                {[
                  "100% Online Process",
                  "Expert CA Team",
                  "Quick Response"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/80">
                    <div className="p-1 rounded-full bg-success/20">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right side - Floating stats card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Main card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                  <h3 className="text-white text-xl font-semibold mb-6">Why Businesses Trust Us</h3>
                  
                  <div className="space-y-4">
                    {stats.slice(0, 3).map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                      >
                        <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-accent/80 text-accent-foreground">
                          <stat.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">{stat.number}</div>
                          <div className="text-sm text-white/60">{stat.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-success/20 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent z-20" />
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-20 bg-background relative">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                target={stat.number}
                label={stat.label}
                icon={stat.icon}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Premium Grid */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="Our Services"
            title="Comprehensive Business"
            highlight="Solutions"
            description="From company registration to tax compliance, we offer end-to-end services to help your business thrive in the competitive market."
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

      {/* Why Choose Us Section - Modern Split Layout */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                badge="Why Choose Us"
                title="Your Trusted Partner for"
                highlight="Business Success"
                description="With over 15 years of experience, we have helped thousands of businesses navigate complex regulations and achieve their financial goals."
                centered={false}
              />

              <div className="grid sm:grid-cols-2 gap-2">
                {whyChooseUs.map((item, index) => (
                  <FeatureHighlight
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right - Image with floating elements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={teamImg} 
                  alt="Our professional team" 
                  className="w-full h-auto"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge - Years */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary to-primary/90 text-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl font-bold mb-1">15+</div>
                <div className="text-sm text-white/80">Years of Excellence</div>
              </motion.div>

              {/* Floating badge - Clients */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 bg-white dark:bg-card p-5 rounded-2xl shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-success/10">
                    <Users className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">5000+</div>
                    <div className="text-xs text-muted-foreground">Happy Clients</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 rounded-full blur-[80px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Premium Cards */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients"
            highlight="Say"
            description="Don't just take our word for it - hear from our satisfied clients who have experienced our exceptional service."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                company={testimonial.company}
                content={testimonial.content}
                rating={testimonial.rating}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Premium Dark Design */}
      <section className="py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, hsl(204 71% 22%) 0%, hsl(204 71% 18%) 50%, hsl(204 71% 15%) 100%)'
      }}>
        {/* Decorative orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/30 rounded-full blur-[120px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="Our Process"
            title="How It"
            highlight="Works"
            description="Simple and transparent process to get your work done efficiently"
            light
          />

          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            {processSteps.map((item, index) => (
              <ProcessStep
                key={index}
                step={item.step}
                title={item.title}
                description={item.desc}
                index={index}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
