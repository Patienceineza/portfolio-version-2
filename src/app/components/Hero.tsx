import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ChevronDown,
  Code,
  Coffee,
  Heart,
  Sparkles
} from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="max-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-900 via-stone-900 to-zinc-900 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Simple greeting */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <span className="text-green-400 font-mono text-sm inline-flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full">
                <Sparkles size={14} />
                Available for work
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hey, I'm{" "}
                <span className="text-green-400">Patience</span>
              </h1>
              
              <p className="text-xl text-gray-400 flex items-center gap-2">
                <Code className="text-green-400" size={20} />
                Full-Stack Developer
              </p>
            </motion.div>

            {/* Bio - made it more personal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="space-y-4 text-gray-300"
            >
              <p className="text-lg leading-relaxed">
                I build things for the web. Currently working with{' '}
                <span className="text-green-400 font-medium">React</span>,{' '}
                <span className="text-green-400 font-medium">Node.js</span>, and{' '}
                <span className="text-green-400 font-medium">Go</span>.
              </p>
              
              <p className="text-gray-400 flex items-center gap-2 text-sm">
                <Coffee size={16} className="text-green-400" />
                Fueled by coffee and curiosity
                <Heart size={14} className="text-green-400 ml-1" />
              </p>
            </motion.div>

            {/* Location - simple and clean */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-2 text-gray-400 bg-white/5 p-3 rounded-lg w-fit"
            >
              <MapPin size={18} className="text-green-400" />
              <span>Kigali, Rwanda</span>
            </motion.div>

            {/* CTA Buttons - simpler design */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="mailto:inezapatience2@gmail.com"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-all font-medium shadow-lg shadow-green-600/25"
              >
                <Mail size={18} />
                Say hello
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              <button
                onClick={() => {
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:border-green-400 hover:text-green-400 transition-all"
              >
                See my work
              </button>
            </motion.div>

            {/* Social Links - minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-3 pt-4"
            >
              <span className="text-sm text-gray-500">Find me on:</span>
              <div className="flex gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Simple visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Simple profile card */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-3xl rotate-6 backdrop-blur" />
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 h-full flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Tech stack icons - simple visual */}
                  <div className="grid grid-cols-3 gap-3">
                    {['react', 'node', 'go'].map((tech, i) => (
                      <div key={tech} className="aspect-square bg-green-500/10 rounded-xl flex items-center justify-center border border-green-500/20">
                        <span className="text-xs font-mono text-green-400">{tech}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Years of experience */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white">4+</div>
                    <div className="text-sm text-gray-400">years building</div>
                  </div>
                  
                  {/* Simple stat */}
                  <div className="flex justify-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      20+ projects
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                      5+ clients
                    </span>
                  </div>
                </div>
              </div>

              {/* Simple floating element */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium"
              >
                Open to work ✨
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Simple scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={20} className="text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}