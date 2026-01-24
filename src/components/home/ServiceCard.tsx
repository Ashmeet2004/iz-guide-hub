import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface SubService {
  name: string;
  slug: string;
}

interface ServiceCardProps {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  subServices: SubService[];
  index: number;
}

const ServiceCard = ({ 
  slug, 
  name, 
  description, 
  icon: Icon, 
  subServices, 
  index 
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Link to={`/services/${slug}`} className="block h-full">
        <div className="relative h-full p-8 rounded-3xl bg-card border border-border/30 shadow-card overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-accent/30">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-accent to-success opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
          
          {/* Icon with premium styling */}
          <div className="relative inline-flex p-5 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
            <Icon className="h-8 w-8" />
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Title */}
          <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
            {description}
          </p>
          
          {/* Sub-services tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {subServices.slice(0, 3).map((sub, i) => (
              <span 
                key={i}
                className="px-3 py-1.5 bg-secondary/80 rounded-full text-xs font-medium text-secondary-foreground border border-border/30"
              >
                {sub.name}
              </span>
            ))}
            {subServices.length > 3 && (
              <span className="px-3 py-1.5 bg-accent/15 rounded-full text-xs font-semibold text-accent border border-accent/20">
                +{subServices.length - 3} more
              </span>
            )}
          </div>
          
          {/* CTA with arrow animation */}
          <div className="flex items-center text-accent font-semibold group/link">
            <span className="relative">
              Learn More
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover/link:w-full transition-all duration-300" />
            </span>
            <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
