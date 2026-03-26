import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Send,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "../utils.js";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ FIXED FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      setStatus("sending");

      console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      console.log("PUBLIC:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 3000);

    } catch (error) {
      console.error("FULL ERROR:", error);
      setStatus("error");
      setErrorMsg(error?.text || "Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sujalmishra68@gmail.com",
      link: "mailto:sujalmishra68@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6205302730",
      link: "tel:+916205302730",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jaipur, Rajasthan, India",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-slate-900/50 to-transparent"
    >
      <div className="absolute rounded-full top-20 right-20 w-72 h-72 bg-purple-500/5 blur-3xl"></div>
      <div className="absolute rounded-full bottom-20 left-20 w-96 h-96 bg-pink-500/5 blur-3xl"></div>

      <div className="container relative z-10 max-w-6xl px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="mb-6 text-5xl font-black text-transparent md:text-6xl lg:text-7xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text">
            Get In Touch
          </h2>
          <div className="w-40 h-1 mx-auto rounded-full shadow-lg bg-gradient-to-r from-pink-400 to-blue-400"></div>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">

          {/* LEFT SIDE SAME */}
          <motion.div className="space-y-8">
            <div className="p-10 shadow-2xl glass rounded-3xl shadow-black/20">
              <h3 className="mb-8 text-3xl font-bold text-white">
                Let's Connect!
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div key={info.label}
                      className="flex items-center gap-4 p-6 glass rounded-2xl">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white">{info.label}</p>
                        <a href={info.link} className="text-white">
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM SAME */}
          <motion.div className="p-10 shadow-2xl glass rounded-3xl shadow-black/20">
            <h3 className="mb-8 text-3xl font-bold text-center text-white">
              Send a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full p-4 text-white rounded-xl bg-black/40"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full p-4 text-white rounded-xl bg-black/40"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full p-4 text-white rounded-xl bg-black/40"
              />

              <button type="submit" className="w-full py-4 bg-purple-500 rounded-xl">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && <p className="text-green-400">Sent ✅</p>}
              {status === "error" && <p className="text-red-400">{errorMsg}</p>}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;