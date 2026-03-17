import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight, Building } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "Frontend Developer",
      company: "ATOM AI",
      location: "Rwanda",
      period: "October 2025 – Present",
      responsibilities: [
        "Design and implement intuitive, responsive, and visually appealing user interfaces for the ATOM AI platform",
        "Collaborate closely with UX/UI designers and product teams to translate features into seamless user experiences",
        "Develop dashboards, data visualization tools, and secure portals for uploading, tracking, and retrieving AI training datasets",
        "Ensure smooth interaction and integration with back-end APIs for real-time data updates",
        "Optimize front-end performance, accessibility, and cross-browser/device compatibility",
      ],
    },
    {
      title: "Full Stack Software Developer",
      company: "Ishema Hub",
      location: "Nyarugenge, Kigali Rwanda",
      period: "August 2023 – Present",
      responsibilities: [
        "Engineered and deployed full-stack web applications, managing both front-end and back-end architectures",
        "Collaborated closely with UX/UI designers to translate product requirements into intuitive user interfaces",
        "Developed secure, highly reliable RESTful and microservice APIs using Golang, Python, Node.js, and NestJS",
        "Integrated emerging technologies and best practices to deliver modern, user-focused applications",
        "Managed the end-to-end project lifecycle, ensuring delivery of robust, high-quality digital solutions",
      ],
    },
    {
      title: "Software Development Training",
      company: "ANDELA / ATLP",
      location: "Rwanda",
      period: "November 2022 – September 2023",
      responsibilities: [
        "Acquired hands-on expertise in comprehensive full-stack curriculum including Node.js, React, Express.js, MongoDB, Redux, PostgreSQL",
        "Contributed to real-world projects by assisting senior developers with coding, testing, and debugging",
        "Collaborated with development teams to analyze user requirements and implement effective technical solutions",
        "Strengthened technical foundation through active participation in focused training sessions and workshops",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-neutral-900 relative overflow-hidden" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-green-400 text-sm mb-2 block">/experience</span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Where I've worked
          </h2>
          <p className="text-gray-400">
            My professional journey in software development so far.
          </p>
        </motion.div>

        {/* Timeline style experience cards */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-green-500/20" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-green-400 rounded-full z-10"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Date badge for mobile */}
                <div className="md:hidden ml-12 mb-2">
                  <span className="inline-block bg-green-500/10 text-green-400 text-sm px-3 py-1 rounded-full border border-green-500/20">
                    {exp.period}
                  </span>
                </div>

                {/* Content card */}
                <motion.div 
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-700 hover:border-green-400/30 transition-all">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-green-400">
                        <Building size={16} />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>

                    {/* Date and location - desktop */}
                    <div className="hidden md:flex flex-col gap-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-2">
                      <button
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        className="text-xs text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 mb-2"
                      >
                        {expandedIndex === index ? 'Show less' : 'Show responsibilities'}
                        <ChevronRight size={12} className={expandedIndex === index ? 'rotate-90' : ''} />
                      </button>
                      
                      {expandedIndex === index && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2"
                        >
                          {exp.responsibilities.map((resp, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex gap-2 text-sm text-gray-300"
                            >
                              <span className="text-green-400 mt-1">•</span>
                              <span>{resp}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </div>

                    {/* Date and location for mobile */}
                    <div className="md:hidden flex flex-col gap-1 mt-4 pt-4 border-t border-neutral-700 text-xs">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <span className="w-12 h-px bg-green-500/20" />
            More experiences available upon request
            <span className="w-12 h-px bg-green-500/20" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}