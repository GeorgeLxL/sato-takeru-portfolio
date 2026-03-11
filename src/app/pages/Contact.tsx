import { motion } from "motion/react";
import { Send, Mail, Linkedin, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation()
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();
    
    if (!trimmedMessage) {
      toast.error("Please enter your message before sending.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: trimmedSubject || "Portfolio Contact Message",
          message: trimmedMessage,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to send message');
      }

      toast.success("Message sent successfully!");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error('Contact form error:', error);
      const message = error instanceof Error ? error.message : "Failed to send message. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.h1
          className="text-[3.375rem] md:text-[5.625rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Send your message directly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <h2 className="text-[2.25rem] font-bold text-white mb-6">Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Write a subject..."
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2" htmlFor="message">
                  Message Content
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={8}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Write your message and include your email/phone so I can reply..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-400 mb-4">Or reach out via:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/oleh-siloch-297041385/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-purple-500/30 rounded-lg text-gray-300 hover:text-white hover:border-purple-500/50 transition-all duration-300"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="tel:+380956221604"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-purple-500/30 rounded-lg text-gray-300 hover:text-white hover:border-purple-500/50 transition-all duration-300"
            >
              <Phone size={18} />
              <span>+380956221604</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
