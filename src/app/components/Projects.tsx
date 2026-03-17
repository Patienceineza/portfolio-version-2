import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import bulk from "../assets/Bulksms.png";
import winbig from "../assets/winbig.png";
import atom from "../assets/Attom.png";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "WinBig - Lottery Platform",
      description: "A full-featured lottery and gaming platform with secure payment processing, ticket management, and real-time draw results. Built for the Rwandan market with mobile money integration.",
      fullDescription: "WinBig allows users to purchase lottery tickets via mobile money, check results in real-time, and receive winnings directly to their accounts. Features include automated draw scheduling, winner notifications, and an admin dashboard for managing draws and payouts.",
      image: winbig,
      technologies: ["React", "Golang", "PostgreSQL", "Mobile Money API", "Microservices" ,"Apache Kafka"],
      highlights: ["Payment integration", "Real-time draws", "SMS notifications"],
      github: "#",
      live: "https://winbigmalawi.com",
    },
    {
      title: "Payment Processing Platform",
      description: "Unified payment gateway integrating multiple mobile money providers and card payments for Rwandan businesses. Handles transactions, webhooks, and reconciliation.",
      fullDescription: "Built a payment orchestration layer that connects to MTN Mobile Money, Airtel Money, and card processors. Includes webhook handling for transaction status updates, automated reconciliation reports, and a merchant dashboard.",
      image: bulk,
      technologies: ["Golang", "Go", "PostgreSQL", "Redis", "Payment APIs" , "Microservices", "Apache Kafka"],
      highlights: ["Multiple providers", "Webhook handling", "Reconciliation"],
      github: "#",
      live: "https://ishema.rw/",
    },
    {
      title: "Bulk SMS Gateway",
      description: "Enterprise SMS platform for sending bulk messages, managing contacts, and tracking delivery status. Used by businesses for marketing and notifications.",
      fullDescription: "Built a scalable SMS gateway that integrates with multiple telco providers for failover. Features include contact list management, message templates, delivery reports, and scheduled campaigns. Handles thousands of messages per minute.",
      image: bulk,
      technologies: ["Golang", "PostgreSQL", "SMPP", "REST API"],
      github: "",
      highlights: ["High throughput", "Delivery reports", "Contact management"],
      live: "https://bulksms.rw/home",
    },
    {
      title: "ATOM AI Dashboard Platform",
      description: "Data visualization dashboard for AI training datasets with secure upload portals and real-time tracking.",
      fullDescription: "Comprehensive dashboard for managing AI training datasets. Features include secure file uploads, dataset versioning, progress tracking, and integration with training pipelines.",
      image: atom,
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      highlights: ["Data viz", "Secure uploads", "Real-time updates"],
      github: "#",
      live: "https://www.atomai-platform.io/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-green-400/70 text-sm mb-2 block">/projects</span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Things I've built
          </h2>
          <p className="text-gray-500">
            Real projects for real clients. From payment platforms to lottery systems.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-neutral-800/20 rounded-xl overflow-hidden border border-neutral-800 hover:border-green-400/20 transition-colors">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-neutral-900">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  
                  {/* Short description */}
                  <p className="text-sm text-gray-400 mb-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs bg-green-500/5 text-green-400/70 px-2 py-1 rounded-full border border-green-500/10"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-gray-500"
                      >
                        {tech}
                        {project.technologies.indexOf(tech) < 3 && " •"}
                      </span>
                    ))}
                  </div>

                  {/* Expand button and links */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                      className="text-xs text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1"
                    >
                      {expandedProject === index ? "Show less" : "More details"}
                      <ArrowRight size={12} className={expandedProject === index ? "rotate-90" : ""} />
                    </button>

                    <div className="flex gap-3">
                      {/* <a
                        href={project.github}
                        className="text-gray-500 hover:text-green-400 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a> */}
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-green-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Expanded description */}
                  {expandedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-neutral-800"
                    >
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {project.fullDescription}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about more projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-600">
            More projects coming soon... Stay tuned!
          </p>
        </motion.div>
      </div>
    </section>
  );
}