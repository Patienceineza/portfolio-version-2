import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { 
  Code2, 
  Zap, 
  Users, 
  Heart,
  Coffee,
  ArrowRight,
  Briefcase,
  Calendar,
  ChevronRight
} from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Dev",
      description: "React • Node.js • Go • Python",
      details: "I like switching between frontend and backend. Keeps things interesting."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "I care about making things fast",
      details: "Once optimized a site load from 3s to 0.8s. Felt like magic."
    },
    {
      icon: Users,
      title: "Team Work",
      description: "Love collaborating with others",
      details: "Some of my best code came from pairing with teammates."
    },
    {
      icon: Heart,
      title: "Quality",
      description: "Clean code, thorough testing",
      details: "I write tests because I hate fixing the same bug twice."
    },
  ];

  const timelineEvents = [
    { year: "2021", event: "Started coding", detail: "Built my first calculator. It didn't work." },
    { year: "2022", event: "First freelance client", detail: "Made a website for a local bakery." },
    { year: "2023", event: "Joined tech community", detail: "Started mentoring beginners." },
    { year: "2024", event: "Full-time developer", detail: "Living the dream, one PR at a time." },
  ];

  const stats = [
    { label: "projects", value: "15+", hover: "E-commerce, dashboards, APIs" },
    { label: "clients", value: "10+", hover: "Mostly local businesses" },
    { label: "years", value: "3+", hover: "Feels like just started" },
    { label: "coffee", value: "∞", hover: "Literally always drinking" },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-900" ref={ref}>
        <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with simple hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <motion.span 
            whileHover={{ x: 5 }}
            className="text-green-400 text-sm mb-2 inline-block"
          >
            /about
          </motion.span>
          <h2 className="text-4xl font-bold text-white mb-4">
            About me
          </h2>
          <p className="text-gray-400">
            I've been building web apps for about 3 years. 
            Here's what I do.
          </p>
        </motion.div>

        {/* Interactive grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column - What I do with hover details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-medium mb-4 flex items-center gap-2">
              <Code2 size={18} className="text-green-400" />
              What I work with
            </h3>
            
            <div className="space-y-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  onMouseEnter={() => setActiveCard(i)}
                  onMouseLeave={() => setActiveCard(null)}
                  whileHover={{ x: 4 }}
                  className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700 hover:border-green-400/50 transition-all cursor-default"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      animate={{ rotate: activeCard === i ? 10 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon size={18} className="text-green-400 mt-1" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-white text-sm font-medium mb-1">{item.title}</h4>
                      
                      </div>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                      
                      {/* Expandable detail on click */}
                      {activeCard === i && showMore && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-xs text-gray-500 mt-2 pt-2 border-t border-neutral-700"
                        >
                          {item.details}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Toggle for more details */}
            <motion.button
              onClick={() => setShowMore(!showMore)}
              className="text-xs text-gray-500 hover:text-green-400 transition-colors mt-4 flex items-center gap-1"
              whileHover={{ x: 2 }}
            >
              {showMore ? "Show less" : "Show more details"}
              <ChevronRight size={12} className={showMore ? "rotate-90" : ""} />
            </motion.button>
          </motion.div>

          {/* Right column - Interactive journey & stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Interactive timeline */}
            <div>
              <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                <Calendar size={18} className="text-green-400" />
                My journey
              </h3>
              
              <div className="space-y-2">
                {timelineEvents.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    onMouseEnter={() => setHoveredYear(i)}
                    onMouseLeave={() => setHoveredYear(null)}
                    className="flex gap-4 text-sm p-2 rounded hover:bg-neutral-800/50 transition-colors cursor-default"
                  >
                    <span className="text-green-400 font-mono w-16">{item.year}</span>
                    <div className="flex-1">
                      <span className="text-gray-300">{item.event}</span>
                      {hoveredYear === i && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="block text-xs text-gray-500 mt-1"
                        >
                          {item.detail}
                        </motion.span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats with hover details */}
            <div>
              <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                <Briefcase size={18} className="text-green-400" />
                Quick stats
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700 hover:border-green-400/30 transition-all group relative cursor-default"
                  >
                    <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                    
                    {/* Tooltip on hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-xs text-gray-300 px-2 py-1 rounded border border-neutral-700 whitespace-nowrap"
                    >
                      {stat.hover}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current status with pulse */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              whileHover={{ x: 2 }}
              className="bg-green-500/5 rounded-lg p-4 border border-green-500/20"
            >
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-400 rounded-full"
                />
                <span className="text-green-400 text-xs mr-1">CURRENTLY</span>
                Building with React and Go
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive footer link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors group"
          >
            Want to work together?
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={14} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}