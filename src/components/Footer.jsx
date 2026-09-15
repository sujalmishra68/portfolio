import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set("[data-footer]", {
          opacity: 1,
          y: 0,
        });

        return;
      }

      gsap.fromTo(
        "[data-footer]",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
            once: true,
          },
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="footer-editorial"
    >
      <div className="footer-container">

        {/* ==================================================
            MAIN FOOTER
        ================================================== */}

        <div className="footer-main">

          {/* BRAND */}
          <div
            data-footer
            className="footer-brand"
          >
            <div className="footer-brand-label">
              JAVA BACKEND / FULL STACK DEVELOPER
            </div>

            <h2 className="footer-name">
              SUJAL
              <br />
              <span>MISHRA.</span>
            </h2>

            <p className="footer-description">
              Building practical software with Java,
              Spring Boot and modern web technologies.
            </p>
          </div>

          {/* NAVIGATION */}
          <nav
            data-footer
            className="footer-navigation"
            aria-label="Footer navigation"
          >
            <span className="footer-column-label">
              EXPLORE
            </span>

            <div className="footer-links">

              <a href="#hero">
                <span>HOME</span>
                <ArrowUpRight size={14} />
              </a>

              <a href="#about">
                <span>ABOUT</span>
                <ArrowUpRight size={14} />
              </a>

              <a href="#projects">
                <span>PROJECTS</span>
                <ArrowUpRight size={14} />
              </a>

              <a href="#experience">
                <span>EXPERIENCE</span>
                <ArrowUpRight size={14} />
              </a>

              <a href="#skills">
                <span>SKILLS</span>
                <ArrowUpRight size={14} />
              </a>

              <a href="#contact">
                <span>CONTACT</span>
                <ArrowUpRight size={14} />
              </a>

            </div>
          </nav>

          {/* SOCIAL */}
          <div
            data-footer
            className="footer-social"
          >
            <span className="footer-column-label">
              CONNECT
            </span>

            <div className="footer-social-links">

              <a
                href="https://github.com/sujalmishra68"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={17} strokeWidth={1.5} />
                <span>GITHUB</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href="https://www.linkedin.com/in/sujalkumarmishra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={17} strokeWidth={1.5} />
                <span>LINKEDIN</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href="mailto:sujalmishra68@gmail.com"
              >
                <Mail size={17} strokeWidth={1.5} />
                <span>EMAIL</span>
                <ArrowUpRight size={13} />
              </a>

            </div>
          </div>

        </div>

        {/* ==================================================
            LARGE CTA
        ================================================== */}

        <div
          data-footer
          className="footer-cta"
        >
          <span>HAVE A PROJECT?</span>

          <a href="#contact">
            LET&apos;S TALK
            <ArrowUpRight
              size={22}
              strokeWidth={1.3}
            />
          </a>
        </div>

        {/* ==================================================
            BOTTOM BAR
        ================================================== */}

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} SUJAL KUMAR MISHRA
          </span>

          <button
            type="button"
            onClick={scrollTop}
            className="footer-top-button"
          >
            BACK TO TOP
            <ArrowUpRight
              size={14}
              strokeWidth={1.4}
            />
          </button>

          <span>
            JAIPUR, INDIA
          </span>

        </div>

      </div>
    </footer>
  );
};

export default Footer;