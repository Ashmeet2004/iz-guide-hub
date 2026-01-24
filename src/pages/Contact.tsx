import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2,
  MessageSquare,
  Headphones,
  PhoneCall
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/home/SectionHeading";
import contactHeroImg from "@/assets/heroes/contact-hero.jpg";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
    subValue: "+91 98765 43211"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@caindiaservices.com",
    link: "mailto:info@caindiaservices.com",
    subValue: "support@caindiaservices.com"
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123, Business Tower, MG Road",
    link: "#",
    subValue: "New Delhi - 110001, India"
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Monday - Saturday",
    link: "#",
    subValue: "9:00 AM - 6:00 PM"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent Successfully!",
      description: "Our team will contact you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        badge="Contact Us"
        badgeIcon={PhoneCall}
        title="Get in Touch With Our"
        highlightedTitle="Experts"
        description="Have questions? We're here to help. Reach out to us for a free consultation about your business needs."
        backgroundImage={contactHeroImg}
      />

      {/* Contact Info Cards */}
      <section className="py-16 bg-card relative -mt-12 z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-2xl bg-background border border-border/30 shadow-card overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-accent/30">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  <p className="text-accent font-medium">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.subValue}</p>
                  
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-success transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <SectionHeading
                  badge="Send Message"
                  title="Drop Us a"
                  highlight="Line"
                  centered={false}
                />
                <p className="text-muted-foreground -mt-10">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 bg-card border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 bg-card border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12 bg-card border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-foreground font-medium">Service Required</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-lg border border-border/50 bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="company-registration">Company Registration</option>
                      <option value="gst">GST Services</option>
                      <option value="income-tax">Income Tax</option>
                      <option value="business-licenses">Business Licenses</option>
                      <option value="accounting">Accounting & Compliances</option>
                      <option value="funds">Funds/Loans</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-card border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full md:w-auto shadow-lg shadow-accent/20 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Map & Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[300px] bg-secondary border border-border/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8347632873093!2d77.21280531508299!3d28.63299998241693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Quick Contact Options */}
              <div className="p-8 rounded-3xl bg-card border border-border/30 shadow-card">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Quick Contact Options
                </h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+919876543210"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all hover:-translate-y-1"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-md group-hover:scale-110 transition-transform">
                      <Headphones className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Call Us</h4>
                      <p className="text-sm text-muted-foreground">Speak directly with our experts</p>
                    </div>
                  </a>
                  <a 
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all hover:-translate-y-1"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-success to-success/80 text-white shadow-md group-hover:scale-110 transition-transform">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">WhatsApp</h4>
                      <p className="text-sm text-muted-foreground">Chat with us on WhatsApp</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="relative p-8 rounded-3xl overflow-hidden" style={{
                background: 'linear-gradient(135deg, hsl(204 71% 28%) 0%, hsl(204 71% 22%) 100%)'
              }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-bold text-white mb-6">
                    Why Consult With Us?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Free initial consultation",
                      "Expert CA guidance",
                      "Quick response within 24 hours",
                      "Personalized solutions",
                      "Transparent pricing"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-white/80">
                        <div className="p-1 rounded-full bg-accent/20">
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="FAQs"
            title="Frequently Asked"
            highlight="Questions"
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How do I get started with your services?",
                a: "Simply fill out the contact form above or call us directly. Our team will understand your requirements and guide you through the process."
              },
              {
                q: "What documents are required for company registration?",
                a: "Basic documents include ID proof, address proof, photographs of directors, and address proof of registered office. Our team will provide a detailed checklist based on your specific requirements."
              },
              {
                q: "How long does it take to register a company?",
                a: "Typically, a Private Limited Company can be registered within 10-15 working days, subject to document submission and government processing time."
              },
              {
                q: "Do you offer services across India?",
                a: "Yes, we provide services pan-India through our online platform. All our services can be availed from anywhere in the country."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-background border border-border/30 shadow-card hover:shadow-xl transition-all hover:border-accent/30">
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{faq.q}</h4>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
