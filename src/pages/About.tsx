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
  GraduationCap,
  Building2
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/home/SectionHeading";
import FeatureHighlight from "@/components/home/FeatureHighlight";
import teamImg from "@/assets/team.jpg";
import officeImg from "@/assets/office.jpg";
import aboutHeroImg from "@/assets/heroes/about-hero.jpg";

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
      <PageHero
        badge="About Us"
        badgeIcon={Building2}
        title="Your Trusted Partner for"
        highlightedTitle="Business Excellence"
        description="Since 2009, we have been helping businesses navigate complex regulations and achieve their financial goals with expert guidance."
        backgroundImage={aboutHeroImg}
      />

      {/* About Content - Premium Split Layout */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                badge="Who We Are"
                title="Leading Chartered Accountancy"
                highlight="Firm"
                centered={false}
              />
              
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                CA India is a leading Chartered Accountancy firm providing comprehensive 
                business solutions to startups, SMEs, and large enterprises. With over 15 years 
                of experience, we have built a reputation for excellence, integrity, and 
                client-centric services.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our team of qualified Chartered Accountants and professionals brings deep 
                expertise in company registration, taxation, compliance, and business advisory 
                services. We leverage technology to deliver efficient, transparent, and 
                hassle-free solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "5000+", label: "Happy Clients" },
                  { number: "10000+", label: "Projects Done" },
                  { number: "50+", label: "Team Members" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-5 bg-card rounded-2xl border border-border/30 shadow-card hover:shadow-xl transition-all group"
                  >
                    <div className="font-display text-3xl font-bold bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={officeImg} 
                  alt="Our office" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-accent to-accent/90 text-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-white/80">Client Satisfaction</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Premium Cards */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    To be the most trusted and preferred partner for businesses seeking 
                    professional financial and compliance services. We envision a future 
                    where every entrepreneur can focus on building their business while 
                    we handle their regulatory requirements seamlessly.
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-success to-accent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-accent to-accent/90 text-white overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    To provide exceptional quality services with transparency, integrity, 
                    and commitment. We are dedicated to simplifying complex business 
                    regulations, enabling our clients to achieve their entrepreneurial 
                    dreams with confidence.
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-success to-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Premium Grid */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Values"
            title="The Principles That"
            highlight="Guide Us"
            description="The principles that guide everything we do"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full p-8 rounded-3xl bg-card border border-border/30 shadow-card overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-accent/30">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-success transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Premium Cards */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="Our Team"
            title="Meet Our Expert"
            highlight="Leaders"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-center p-8 rounded-3xl bg-background border border-border/30 shadow-card hover:shadow-xl transition-all hover:-translate-y-2">
                  {/* Avatar */}
                  <div className="relative w-28 h-28 mx-auto mb-6">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-3xl font-bold text-white">
                        {member.name.split(' ').slice(1).map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 p-2 rounded-full bg-accent text-white shadow-md">
                      <Award className="h-4 w-4" />
                    </div>
                  </div>
                  
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-1">{member.experience}</p>
                  <p className="text-xs text-muted-foreground">{member.specialization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Premium Design */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Journey"
            title="Milestones That Define"
            highlight="Our Growth"
          />

          <div className="max-w-4xl mx-auto relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-success hidden md:block" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center`}>
                  <div className="inline-block p-6 rounded-2xl bg-card border border-border/30 shadow-card hover:shadow-xl transition-all group">
                    <div className="text-accent font-bold text-xl mb-2">{milestone.year}</div>
                    <h4 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="relative shrink-0">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-accent/80 shadow-lg" />
                  <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium Dark Section */}
      <section className="py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, hsl(204 71% 22%) 0%, hsl(204 71% 18%) 50%, hsl(204 71% 15%) 100%)'
      }}>
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/30 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="Why Us"
            title="Why Clients"
            highlight="Trust Us"
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group"
              >
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-accent/80 text-white shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
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
