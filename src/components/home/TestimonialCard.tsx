import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  content: string;
  rating: number;
  index: number;
}

const TestimonialCard = ({ 
  name, 
  company, 
  content, 
  rating, 
  index 
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative h-full p-8 rounded-3xl bg-card border border-border/30 shadow-card overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
        {/* Quote icon decoration */}
        <div className="absolute -top-4 -right-4 p-6 rounded-full bg-gradient-to-br from-accent/20 to-accent/5">
          <Quote className="h-8 w-8 text-accent/40" />
        </div>
        
        {/* Rating stars */}
        <div className="flex gap-1.5 mb-5">
          {[...Array(rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <Star className="h-5 w-5 fill-accent text-accent drop-shadow-sm" />
            </motion.div>
          ))}
        </div>
        
        {/* Content */}
        <p className="text-foreground/80 mb-8 italic leading-relaxed text-lg">
          "{content}"
        </p>
        
        {/* Author info */}
        <div className="flex items-center gap-4">
          {/* Avatar placeholder with initials */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-accent font-medium">{company}</p>
          </div>
        </div>
        
        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-success transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
