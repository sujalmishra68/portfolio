import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  ArrowUpRight,
  CheckCircle,
  XCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "sujalmishra68@gmail.com",
    link: "mailto:sujalmishra68@gmail.com",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+91 6205302730",
    link: "tel:+916205302730",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Jaipur, Rajasthan, India",
  },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  /* ============================================================
     EMAILJS
     ============================================================ */

  useLayoutEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  /* ============================================================
     GSAP REVEAL
     ============================================================ */

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set(
          [
            "[data-contact-label]",
            "[data-contact-heading]",
            "[data-contact-copy]",
            "[data-contact-info]",
            "[data-contact-form]",
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
          }
        );

        return;
      }

      gsap.fromTo(
        "[data-contact-label]",
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        "[data-contact-heading]",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        "[data-contact-copy]",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 74%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        "[data-contact-info]",
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-contact-details]",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        "[data-contact-form]",
        {
          opacity: 0,
          x: 25,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-contact-form]",
            start: "top 82%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  /* ============================================================
     FORM
     ============================================================ */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status === "error") {
      setStatus("idle");
      setErrorMsg("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus("sending");
    setErrorMsg("");

    try {
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

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus("error");

      setErrorMsg(
        error?.text ||
          "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ============================================================
     RENDER
     ============================================================ */

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact-editorial"
      aria-labelledby="contact-heading"
    >
      <div className="contact-container">

        {/* ======================================================
            TOP
        ====================================================== */}

        <div className="contact-top">

          <div
            data-contact-label
            className="contact-label"
          >
            <span>05</span>
            <span>/</span>
            <span>GET IN TOUCH</span>
          </div>

          <div className="contact-top-line" />

        </div>

        {/* ======================================================
            HEADING
        ====================================================== */}

        <div className="contact-heading-row">

          <h2
            id="contact-heading"
            data-contact-heading
            className="contact-heading"
          >
            LET&apos;S
            <br />
            <span>TALK.</span>
          </h2>

          <p
            data-contact-copy
            className="contact-copy"
          >
            Have a project, internship opportunity, or
            something interesting to build together?
            Send me a message and let&apos;s start a
            conversation.
          </p>

        </div>

        {/* ======================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="contact-main">

          {/* LEFT */}
          <div
            data-contact-details
            className="contact-details"
          >

            <div className="contact-details-heading">
              CONTACT DETAILS
            </div>

            <div className="contact-details-list">

              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;

                return (
                  <div
                    key={info.label}
                    data-contact-info
                    className="contact-detail"
                  >
                    <div className="contact-detail-icon">
                      <Icon
                        size={17}
                        strokeWidth={1.4}
                      />
                    </div>

                    <div className="contact-detail-content">
                      <span className="contact-detail-label">
                        {info.label}
                      </span>

                      {info.link ? (
                        <a
                          href={info.link}
                          className="contact-detail-value"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="contact-detail-value">
                          {info.value}
                        </span>
                      )}
                    </div>

                    {info.link && (
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.4}
                        className="contact-detail-arrow"
                      />
                    )}
                  </div>
                );
              })}

            </div>

            {/* Social */}
            <div className="contact-social-section">

              <span className="contact-social-label">
                ELSEWHERE
              </span>

              <div className="contact-socials">

                <a
                  href="https://github.com/sujalmishra68"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="contact-social-link"
                >
                  <Github
                    size={18}
                    strokeWidth={1.5}
                  />

                  <span>GITHUB</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.4}
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/sujalkumarmishra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="contact-social-link"
                >
                  <Linkedin
                    size={18}
                    strokeWidth={1.5}
                  />

                  <span>LINKEDIN</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.4}
                  />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT — FORM */}
          <div
            data-contact-form
            className="contact-form-area"
          >

            <div className="contact-form-title">
              SEND A MESSAGE
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >

              {/* NAME */}
              <div className="contact-field">

                <label htmlFor="contact-name">
                  01 — NAME
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  disabled={isSubmitting}
                />

              </div>

              {/* EMAIL */}
              <div className="contact-field">

                <label htmlFor="contact-email">
                  02 — EMAIL
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  autoComplete="email"
                  required
                  disabled={isSubmitting}
                />

              </div>

              {/* MESSAGE */}
              <div className="contact-field">

                <label htmlFor="contact-message">
                  03 — MESSAGE
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  disabled={isSubmitting}
                />

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="contact-submit"
                disabled={isSubmitting}
              >
                <span>
                  {status === "sending"
                    ? "SENDING..."
                    : "SEND MESSAGE"}
                </span>

                <Send
                  size={17}
                  strokeWidth={1.4}
                />
              </button>

              {/* SUCCESS */}
              {status === "success" && (
                <div
                  className="contact-message contact-success"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle
                    size={17}
                    strokeWidth={1.5}
                  />

                  <span>
                    Message sent successfully.
                    I&apos;ll get back to you soon.
                  </span>
                </div>
              )}

              {/* ERROR */}
              {status === "error" && (
                <div
                  className="contact-message contact-error"
                  role="alert"
                >
                  <XCircle
                    size={17}
                    strokeWidth={1.5}
                  />

                  <span>{errorMsg}</span>
                </div>
              )}

            </form>

          </div>

        </div>

        {/* ======================================================
            FOOTER STRIP
        ====================================================== */}

        <div className="contact-footer">

          <span>
            SUJAL KUMAR MISHRA
          </span>

          <span>
            JAVA BACKEND / FULL STACK DEVELOPER
          </span>

          <span>
            © {new Date().getFullYear()}
          </span>

        </div>

      </div>
    </section>
  );
};

export default Contact;