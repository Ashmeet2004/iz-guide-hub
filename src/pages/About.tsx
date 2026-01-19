import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Target, 
  Eye, 
  Users, 
  Award, 
  Clock,
  Shield,
  HeartHandshake,
  Lightbulb,
  GraduationCap
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import teamImg from "@/assets/team.jpg";
import officeImg from "@/assets/office.jpg";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our dealings with clients and stakeholders."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace technology and modern practices to deliver efficient solutions."
  },
  {
    icon: HeartHandshake,
    title: "Client Focus",
    description: "Your success is our priority. We go the extra mile to exceed expectations."
  },
  {
    icon: GraduationCap,
    title: "Excellence",
    description: "We strive for excellence in every service we provide, ensuring quality outcomes."
  }
];

const team = [
  {
    name: "CA Amit Kumar",
    role: "Managing Partner",
    experience: "20+ Years Experience",
    specialization: "Corporate Law & Taxation"
  },
  {
    name: "CA Priya Verma",
    role: "Senior Partner",
    experience: "15+ Years Experience",
    specialization: "GST & Indirect Taxation"
  },
  {
    name: "CA Rahul Singh",
    role: "Partner",
    experience: "12+ Years Experience",
    specialization: "Audit & Assurance"
  },
  {
    name: "CA Sunita Agarwal",
    role: "Partner",
    experience: "10+ Years Experience",
    specialization: "Business Advisory"
  }
];

const milestones = [
  { year: "2009", title: "Founded", description: "Started our journey with a vision to simplify business compliance" },
  { year: "2012", title: "1000+ Clients", description: "Reached our first major milestone of serving over 1000 businesses" },
  { year: "2015", title: "Pan-India Expansion", description: "Extended services across multiple states in India" },
  { year: "2018", title: "Digital First", description: "Launched online consultation and digital documentation" },
  { year: "2020", title: "5000+ Clients", description: "Trusted by over 5000 businesses for their compliance needs" },
  { year: "2024", title: "10000+ Projects", description: "Successfully completed over 10000 projects" }
];

const About = () => {
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              Your Trusted Partner for Business Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Since 2009, we have been helping businesses navigate complex regulations 
              and achieve their financial goals with expert guidance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                CA India is a leading Chartered Accountancy firm providing comprehensive 
                business solutions to startups, SMEs, and large enterprises. With over 15 years 
                of experience, we have built a reputation for excellence, integrity, and 
                client-centric services.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Our team of qualified Chartered Accountants and professionals brings deep 
                expertise in company registration, taxation, compliance, and business advisory 
                services. We leverage technology to deliver efficient, transparent, and 
                hassle-free solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "5000+", label: "Happy Clients" },
                  { number: "10000+", label: "Projects Done" },
                  { number: "50+", label: "Team Members" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-secondary rounded-xl">
                    <div className="font-display text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
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
                src={officeImg} 
                alt="Our office" 
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-primary text-primary-foreground"
            >
              <div className="inline-flex p-3 rounded-xl bg-accent/20 mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/80 text-lg">
                To be the most trusted and preferred partner for businesses seeking 
                professional financial and compliance services. We envision a future 
                where every entrepreneur can focus on building their business while 
                we handle their regulatory requirements seamlessly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-accent text-accent-foreground"
            >
              <div className="inline-flex p-3 rounded-xl bg-white/20 mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-accent-foreground/90 text-lg">
                To provide exceptional quality services with transparency, integrity, 
                and commitment. We are dedicated to simplifying complex business 
                regulations, enabling our clients to achieve their entrepreneurial 
                dreams with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-card shadow-card hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-primary text-primary-foreground mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4"
            >
              Our Team
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Meet Our Expert Leaders
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-background shadow-card"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-1">{member.experience}</p>
                <p className="text-xs text-muted-foreground">{member.specialization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="inline-block p-4 rounded-2xl bg-card shadow-card">
                    <div className="text-accent font-bold text-lg mb-1">{milestone.year}</div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-accent shrink-0" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold mb-6"
            >
              Why Clients Trust Us
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Qualified Experts", desc: "Team of certified CAs with specialized expertise" },
              { icon: Clock, title: "Quick Turnaround", desc: "Fast processing with minimal documentation" },
              { icon: Shield, title: "100% Compliance", desc: "Complete adherence to all regulatory norms" },
              { icon: Users, title: "Dedicated Support", desc: "Personal relationship manager for each client" },
              { icon: CheckCircle2, title: "Transparent Pricing", desc: "No hidden charges, clear fee structure" },
              { icon: HeartHandshake, title: "Long-term Partnership", desc: "We grow with your business success" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm"
              >
                <div className="p-2 rounded-lg bg-accent text-accent-foreground shrink-0">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
