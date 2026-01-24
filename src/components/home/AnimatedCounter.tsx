import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedCounterProps {
  target: string;
  label: string;
  icon: LucideIcon;
  duration?: number;
  delay?: number;
}

const AnimatedCounter = ({ 
  target, 
  label, 
  icon: Icon, 
  duration = 2000,
  delay = 0 
}: AnimatedCounterProps) => {
  const [count, setCount] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract number and suffix from target (e.g., "15+" -> 15, "+")
  const numericValue = parseInt(target.replace(/[^0-9]/g, ""));
  const suffix = target.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      
      if (now < startTime) {
        requestAnimationFrame(updateCount);
        return;
      }
      
      if (now >= endTime) {
        setCount(target);
        return;
      }

      const progress = (now - startTime) / duration;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(numericValue * easeOutQuart);
      setCount(`${currentValue}${suffix}`);
      requestAnimationFrame(updateCount);
    };

    requestAnimationFrame(updateCount);
  }, [isInView, target, numericValue, suffix, duration, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="group relative"
    >
      {/* Glass card effect */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card via-card/95 to-card/90 border border-border/50 shadow-card hover:shadow-xl transition-all duration-500 overflow-hidden">
        {/* Decorative gradient orb */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon with animated background */}
        <div className="relative z-10 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Icon className="h-7 w-7" />
        </div>
        
        {/* Counter */}
        <h3 className="relative z-10 font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-2">
          {count}
        </h3>
        
        {/* Label */}
        <p className="relative z-10 text-muted-foreground font-medium">{label}</p>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-success transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </motion.div>
  );
};

export default AnimatedCounter;
