import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureHighlightProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureHighlight = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: FeatureHighlightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex items-start gap-5 p-5 rounded-2xl hover:bg-secondary/50 transition-all duration-300"
    >
      {/* Icon container */}
      <div className="relative shrink-0">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-accent blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        
        <div className="relative p-3 rounded-xl bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      
      {/* Content */}
      <div>
        <h4 className="font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureHighlight;
