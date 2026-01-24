import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ 
  badge, 
  title, 
  highlight,
  description, 
  centered = true,
  light = false 
}: SectionHeadingProps) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-16`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block mb-4"
        >
          <span className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold ${
            light 
              ? 'bg-white/10 text-white/90 backdrop-blur-sm' 
              : 'bg-accent/10 text-accent border border-accent/20'
          }`}>
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            {badge}
          </span>
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          highlight ? 'mb-2' : 'mb-6'
        }`}
      >
        <span className={light ? 'text-white' : 'text-foreground'}>
          {title}
        </span>
        {highlight && (
          <>
            {' '}
            <span className={light ? 'text-accent' : 'bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent'}>
              {highlight}
            </span>
          </>
        )}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-lg leading-relaxed mt-6 ${
            light ? 'text-white/70' : 'text-muted-foreground'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
