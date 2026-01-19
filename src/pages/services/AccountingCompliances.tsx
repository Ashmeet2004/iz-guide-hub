import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Phone, BookOpen, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/data/services";
import { getServiceContent } from "@/data/servicesContent";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/services/accounting-compliances.jpg";
import complianceImage from "@/assets/services/compliance-process.jpg";
import teamImage from "@/assets/services/team-working.jpg";

const AccountingCompliances = () => {
  const service = getServiceBySlug("accounting-compliances");
  const content = getServiceContent("accounting-compliances");
  if (!service || !content) return <Layout><div className="min-h-[60vh] flex items-center justify-center"><Link to="/services"><Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Back</Button></Link></div></Layout>;

  return (
    <Layout>
      <section className="relative py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0"><img src={heroImage} alt="Accounting" className="w-full h-full object-cover opacity-20"/><div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" /></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent mb-6"><ArrowLeft className="h-4 w-4" />Back to All Services</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent mb-6"><BookOpen className="h-4 w-4" /><span className="text-sm font-medium">Accounting & Compliances</span></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{content.heroTitle}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-primary-foreground/80 mb-8 max-w-xl">{content.heroSubtitle}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
            <Link to="/contact"><Button variant="hero" size="xl" className="group">Get Started<ArrowRight className="h-5 w-5 group-hover:translate-x-1" /></Button></Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <img src={complianceImage} alt="Compliance" className="rounded-2xl shadow-xl w-full"/>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Stay Compliant, Stay Protected</h2>
            <p className="text-muted-foreground text-lg mb-8">{content.overview}</p>
            <div className="grid sm:grid-cols-2 gap-4">{content.benefits.map((b, i) => <div key={i} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-success shrink-0" /><span className="text-foreground">{b}</span></div>)}</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Compliance Services</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((sub, i) => (
              <motion.div key={sub.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="group p-6 rounded-2xl bg-background shadow-card hover:shadow-xl border border-transparent hover:border-accent/20">
                <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground inline-flex mb-4"><BookOpen className="h-6 w-6" /></div>
                <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-accent">{sub.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{sub.description}</p>
                <Link to="/contact" className="inline-flex items-center text-sm text-accent font-medium hover:underline">Get Started<ArrowRight className="h-4 w-4 ml-1" /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Need Compliance Support?</h2>
          <Link to="/contact"><Button variant="hero" size="xl" className="bg-white text-accent hover:bg-white/90 group">Contact Us<ArrowRight className="h-5 w-5 group-hover:translate-x-1" /></Button></Link>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4"><div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">{services.filter(s => s.id !== service.id).map(s => <Link key={s.id} to={`/services/${s.slug}`} className="group p-4 rounded-xl bg-card shadow-card hover:shadow-xl text-center"><div className="inline-flex p-3 rounded-lg bg-gradient-primary text-primary-foreground mb-3"><s.icon className="h-6 w-6" /></div><h3 className="font-medium text-sm text-foreground group-hover:text-accent">{s.name}</h3></Link>)}</div></div>
      </section>
    </Layout>
  );
};
export default AccountingCompliances;
