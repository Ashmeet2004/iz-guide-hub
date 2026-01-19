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
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

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
    
    // Simulate form submission
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
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              Get in Touch With Our Experts
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Have questions? We're here to help. Reach out to us for 
              a free consultation about your business needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-card relative -mt-12 z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-background shadow-card hover:shadow-xl transition-all group"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-primary text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                <p className="text-accent font-medium">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.subValue}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 ml-2" />
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
              <div className="rounded-2xl overflow-hidden shadow-xl h-[300px] bg-secondary">
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
              <div className="p-8 rounded-2xl bg-card shadow-card">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Quick Contact Options
                </h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+919876543210"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground">
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
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-gradient-success text-success-foreground">
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
              <div className="p-8 rounded-2xl bg-gradient-primary text-primary-foreground">
                <h3 className="font-display text-xl font-bold mb-6">
                  Why Consult With Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Free initial consultation",
                    "Expert CA guidance",
                    "Quick response within 24 hours",
                    "Personalized solutions",
                    "Transparent pricing"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </motion.h2>
          </div>

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
                className="p-6 rounded-2xl bg-background shadow-card"
              >
                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
