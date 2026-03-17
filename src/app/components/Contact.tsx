import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import myResume from "../../assets/Patience_ineza-resume.pdf";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "inezapatience2@gmail.com",
      href: "mailto:inezapatience2@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+250 781 120 101",
      href: "tel:+250781120101",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nyarugenge, Kigali, Rwanda",
      href: "#",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '7423ec28-e9b0-4ccb-8e1c-5c1b9241b6cb', // Replace with your actual Web3Forms access key
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('sent');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 3000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-neutral-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-green-400/70 text-sm mb-2 block">/contact</span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's talk
          </h2>
          <p className="text-gray-500">
            Open to new projects, collaborations, or just a chat about tech.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-green-400 rounded-full" />
                Reach me directly
              </h3>
              
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 bg-neutral-800/30 rounded-lg border border-neutral-800 hover:border-green-400/20 transition-all"
                  >
                    <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                      <info.icon className="text-green-400/70" size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">{info.label}</p>
                      <p className="text-sm text-white">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Looking for - simplified */}
            <div className="bg-neutral-800/20 rounded-lg p-6 border border-neutral-800">
              <h4 className="text-white text-sm font-medium mb-3">Currently looking for:</h4>
              <ul className="space-y-2">
                {[
                  "Full-stack dev opportunities",
                  "Freelance projects", 
                  "Tech collaborations"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1 h-1 bg-green-400/50 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Simple availability indicator */}
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-500">Available for work</span>
            </div>
          </motion.div>

          {/* Right column - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-neutral-800/20 rounded-xl p-6 border border-neutral-800">
              <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-green-400 rounded-full" />
                Send a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field to prevent spam */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:border-green-400/30 text-white text-sm placeholder-gray-600 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:border-green-400/30 text-white text-sm placeholder-gray-600 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:border-green-400/30 text-white text-sm placeholder-gray-600 transition-colors"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:border-green-400/30 text-white text-sm placeholder-gray-600 transition-colors resize-none"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className="w-full bg-green-600/20 text-green-400 px-4 py-3 rounded-lg hover:bg-green-600/30 transition-colors flex items-center justify-center gap-2 text-sm border border-green-500/20 disabled:opacity-50"
                >
                  {formStatus === 'idle' && (
                    <>
                      Send message
                      <Send size={14} />
                    </>
                  )}
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'sent' && (
                    <>
                      Sent!
                      <CheckCircle size={14} />
                    </>
                  )}
                  {formStatus === 'error' && (
                    <>
                      Something went wrong
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Or just email me directly at{" "}
                <a 
                  href="mailto:inezapatience2@gmail.com" 
                  className="text-green-400/70 hover:text-green-400 transition-colors"
                >
                  inezapatience2@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Simple footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 text-xs text-gray-600"
        >
          <p>© {new Date().getFullYear()} Patience Ineza · Built with React & Tailwind</p>
        </motion.div>
      </div>
    </section>
  );
}