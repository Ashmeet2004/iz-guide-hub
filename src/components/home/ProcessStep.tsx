import { motion } from "framer-motion";

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

const ProcessStep = ({ step, title, description, index, isLast }: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative text-center group"
    >
      {/* Connecting line */}
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true }}
            className="h-full bg-gradient-to-r from-white/40 to-white/10 origin-left"
          />
        </div>
      )}
      
      {/* Step circle with glow */}
      <div className="relative inline-flex mb-6">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-accent blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* Circle */}
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
          <span className="text-accent-foreground text-2xl font-bold">{step}</span>
          
          {/* Inner shine */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-t from-transparent to-white/20" />
        </div>
      </div>
      
      {/* Title */}
      <h3 className="font-display text-xl font-semibold mb-3 text-white">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-white/60 leading-relaxed max-w-[200px] mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default ProcessStep;
