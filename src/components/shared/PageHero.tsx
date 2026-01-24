import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  badge: string;
  badgeIcon?: LucideIcon;
  title: string;
  highlightedTitle?: string;
  description: string;
  backgroundImage: string;
  backLink?: {
    href: string;
    label: string;
  };
  children?: React.ReactNode;
}

const PageHero = ({
  badge,
  badgeIcon: BadgeIcon = Sparkles,
  title,
  highlightedTitle,
  description,
  backgroundImage,
  backLink,
  children
}: PageHeroProps) => {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80 z-10" />
        <img 
          src={backgroundImage} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px] z-10" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-success/15 rounded-full blur-[80px] z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 py-20">
        {/* Back Link */}
        {backLink && (
          <Link 
            to={backLink.href}
            className="inline-flex items-center gap-2 text-white/70 hover:text-accent mb-6 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            {backLink.label}
          </Link>
        )}

        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white/90 mb-6"
          >
            <BadgeIcon className="h-4 w-4 text-accent" />
            {badge}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]"
          >
            {title}
            {highlightedTitle && (
              <>
                {' '}
                <span className="text-accent">{highlightedTitle}</span>
              </>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Additional content (buttons, stats, etc.) */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default PageHero;
