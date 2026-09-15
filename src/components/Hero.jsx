import { useEffect, useRef } from "react";
import gsap from "gsap";
import portrait from "../assets/professional-image1.png";

/*
  HERO
  ------------------------------------------------------------
  Sujal Kumar Mishra
  Java Backend / Full Stack Developer

  Layout:
  - Left: typography + introduction
  - Right: editorial portrait image
  - Image remains contained
  - White image background visually blends into page
*/

const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (!section) return;

  section.scrollIntoView({
    behavior: "auto",
    block: "start",
  });
};

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set("[data-hero]", {
          opacity: 1,
          x: 0,
          y: 0,
          clipPath: "none",
        });

        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      /* Hero */
      timeline.fromTo(
        heroRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.45,
        }
      );

      /* Availability */
      timeline.fromTo(
        "[data-hero='badge']",
        {
          opacity: 0,
          y: -14,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
        },
        "-=0.15"
      );

      /* Name */
      timeline.fromTo(
        "[data-hero='name-line']",
        {
          opacity: 0,
          y: 45,
          clipPath: "inset(0 0 100% 0)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.75,
          stagger: 0.12,
        },
        "-=0.20"
      );

      /* Role */
      timeline.fromTo(
        "[data-hero='role']",
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
        },
        "-=0.32"
      );

      /* Description */
      timeline.fromTo(
        "[data-hero='description']",
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
        },
        "-=0.28"
      );

      /* Portrait */
      timeline.fromTo(
        "[data-hero='portrait']",
        {
          opacity: 0,
          x: 35,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
        },
        "-=0.65"
      );

      /* CTA */
      timeline.fromTo(
        "[data-hero='ctas']",
        {
          opacity: 0,
          y: 16,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.35"
      );

      /* Scroll */
      timeline.fromTo(
        "[data-hero='scroll']",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.45,
        },
        "-=0.10"
      );
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-section"
      aria-labelledby="hero-title"
    >
      {/* Top editorial rule */}
      <div
        className="hero-top-rule"
        aria-hidden="true"
      />

      <div className="hero-container">

        {/* ====================================================
            LEFT — TEXT
        ==================================================== */}

        <div className="hero-text-col">

          {/* Availability */}
          <div
            data-hero="badge"
            className="hero-badge"
            aria-label="Currently available for opportunities"
          >
            <span
              className="hero-badge-dot"
              aria-hidden="true"
            />

            <span>
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          {/* Name */}
          <h1
            id="hero-title"
            className="hero-name"
          >
            <span
              data-hero="name-line"
              className="hero-name-line"
            >
              SUJAL
            </span>

            <span
              data-hero="name-line"
              className="hero-name-line"
            >
              KUMAR
            </span>

            <span
              data-hero="name-line"
              className="hero-name-line hero-name-line--accent"
            >
              MISHRA
            </span>
          </h1>

          {/* Role */}
          <p
            data-hero="role"
            className="hero-role"
          >
            JAVA BACKEND
            <span aria-hidden="true">&nbsp;/&nbsp;</span>

            <br className="hero-role-break" />

            FULL STACK DEVELOPER
          </p>

          {/* Description */}
          <p
            data-hero="description"
            className="hero-description"
          >
            Computer Science undergrad at Arya College, Jaipur —
            building production-grade backends with Spring Boot and
            Java, and full-stack products with React, Node.js and
            PostgreSQL. Currently training in cloud reliability
            through Infosys Springboard.
          </p>

          {/* CTAs */}
          <div
            data-hero="ctas"
            className="hero-ctas"
          >
            <button
              type="button"
              className="hero-cta-primary"
              onClick={() => scrollToSection("projects")}
              aria-label="View my work and go to the Projects section"
            >
              <span>VIEW MY WORK</span>

              <span
                className="hero-cta-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </button>

            <button
              type="button"
              className="hero-cta-secondary"
              onClick={() => scrollToSection("contact")}
              aria-label="Let's talk and go to the Contact section"
            >
              <span>LET&apos;S TALK</span>

              <span
                className="hero-cta-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </button>
          </div>
        </div>

        {/* ====================================================
            RIGHT — PORTRAIT
        ==================================================== */}

        <div
          data-hero="portrait"
          className="hero-portrait-col"
        >
          <div className="hero-portrait-frame">
            <img
              src={portrait}
              alt="Sujal Kumar Mishra"
              className="hero-portrait-img"
            />
          </div>
        </div>

      </div>

      {/* ====================================================
          SCROLL INDICATOR
          ==================================================== */}

      <div
        data-hero="scroll"
        className="hero-scroll"
        aria-hidden="true"
      >
        <div className="hero-scroll-line" />

        <span className="hero-scroll-label">
          SCROLL
        </span>
      </div>
    </section>
  );
};

export default Hero;