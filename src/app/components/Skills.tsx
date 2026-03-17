import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { 
  Code2, 
  Database, 
  Layout, 
  Wrench,
  CheckCircle
} from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      icon: Layout,
      category: "Frontend",
      skills: [
        "React", "Redux", "TypeScript", "Tailwind CSS", "HTML/CSS", "Responsive Design"
      ],
    },
    {
      icon: Code2,
      category: "Backend",
      skills: [
        "Node.js", "NestJS", "Golang", "Python", "Express.js", "RESTful APIs"
      ],
    },
    {
      icon: Database,
      category: "Database & Tools",
      skills: [
        "PostgreSQL", "MongoDB", "Git/GitHub", "Docker", "Microservices", "CI/CD"
      ],
    },
    {
      icon: Wrench,
      category: "Specialized",
      skills: [
        "Data Visualization", "Dashboard Development", "UX/UI Implementation", 
        "Performance Optimization", "Testing & Debugging", "Agile/Scrum"
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-neutral-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-green-400/70 text-sm mb-2 block">/skills</span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Tech stack
          </h2>
          <p className="text-gray-500">
            Technologies I've picked up over the last 4+ years.
          </p>
        </motion.div>

        {/* Skills grid - simple list format */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-neutral-800/20 rounded-xl p-6 border border-neutral-800"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center">
                  <category.icon className="text-green-400/60" size={18} />
                </div>
                <h3 className="text-sm font-medium text-white/80">
                  {category.category}
                </h3>
              </div>

              {/* Skills list - simple bullets */}
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + i * 0.03 }}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <CheckCircle size={12} className="text-green-400/40" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Experience note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-600">
            4+ years of building things for the web
          </p>
        </motion.div>
      </div>
    </section>
  );
}