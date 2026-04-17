
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Greating from '../Assets/greating.png';
import emailjs from 'emailjs-com';

export function ContactSection() {
  const ref = useRef(null);
  const formRef = useRef(); // ✅ added
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ✅ FIXED SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_fgznznt',
      'template_s5dbi3i',
      formRef.current, // ✅ FIX HERE
      'BLf4eaK0zaXIPNDEg'
    ).then(
      () => {
        setIsSubmitting(false);
        setSubmitted(true);

        setFormData({
          name: '',
          email: '',
          message: '',
        });

        setTimeout(() => setSubmitted(false), 3000);
      },
      (error) => {
        setIsSubmitting(false);
        console.log(error.text);
        alert("Failed ❌");
      }
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Touch
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* LEFT SIDE - ROBOT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-[120px] absolute"></div>
              <div className="w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] absolute"></div>
            </div>

            <motion.img
              src={Greating}
              alt="robot"
              className="relative z-10 w-72 md:w-96 lg:w-[420px] drop-shadow-[0_0_40px_rgba(0,255,255,0.4)]"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative border bg-slate-800/50 p-4 sm:p-6 rounded-2xl backdrop-blur-xl"
          >
            {/* ✅ formRef added */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : <>
                  <Send size={18} /> Send Message
                </>}
              </motion.button>

              {submitted && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center">
                  Message sent successfully!
                </div>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}