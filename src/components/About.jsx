import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ─────────────────────────────────────────────────────────────
   ABOUT  ·  Sujal Kumar Mishra
   Uses GSAP + ScrollTrigger for scroll-triggered reveals.
   Section ID "about" preserved — Navbar.jsx targets it.
   All content sourced directly from the existing portfolio.
───────────────────────────────────────────────────────────── */

gsap.registerPlugin(ScrollTrigger);

/* Metadata sourced exclusively from existing portfolio content */
const META = [
  { label: "Location",  value: "Jaipur, Rajasthan" },
  { label: "Focus",     value: "Java / Full Stack"  },
  { label: "Education", value: "B.Tech — CSE"       },
  { label: "Status",    value: "Available"          },
];

/* Primary technologies — from existing About.jsx + Skills.jsx */
const STACK = [
  "Java", "Spring Boot", "REST APIs",
  "React", "JavaScript", "Node.js",
  "MySQL", "PostgreSQL", "Git",
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Honour prefers-reduced-motion */
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduced) {
        gsap.set("[data-about]", { opacity: 1, y: 0, x: 0 });
        return;
      }

      /* Common ScrollTrigger config */
      const st = {
        trigger:     sectionRef.current,
        start:       "top 78%",
        toggleActions: "play none none none",
      };

      /* 1 — Section number / label */
      gsap.fromTo(
        "[data-about='label']",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.7, ease: "power3.out", scrollTrigger: st }
      );

      /* 2 — Large section heading */
      gsap.fromTo(
        "[data-about='heading']",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { ...st, start: "top 76%" } }
      );

      /* 3 — Divider line grows */
      gsap.fromTo(
        "[data-about='rule']",
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { ...st, start: "top 74%" } }
      );

      /* 4 — Main statement */
      gsap.fromTo(
        "[data-about='statement']",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { ...st, start: "top 72%" } }
      );

      /* 5 — Supporting paragraph */
      gsap.fromTo(
        "[data-about='body']",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out",
          scrollTrigger: { ...st, start: "top 68%" } }
      );

      /* 6 — Stack tags */
      gsap.fromTo(
        "[data-about='stack']",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { ...st, start: "top 64%" } }
      );

      /* 7 — Metadata strip */
      gsap.fromTo(
        "[data-about='meta']",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { ...st, start: "top 60%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-section"
      aria-labelledby="about-heading"
    >
      {/* ── Top rule ──────────────────────────────────────── */}
      <div className="about-top-rule" data-about="rule" aria-hidden="true" />

      <div className="about-container">

        {/* ── Column A — Section label ───────────────────── */}
        <aside className="about-label-col" data-about="label" aria-hidden="true">
          <span className="about-number">01</span>
          <span className="about-label-text">About Me</span>
        </aside>

        {/* ── Column B — Content ────────────────────────── */}
        <div className="about-content-col">

          {/* Large section heading */}
          <h2
            id="about-heading"
            className="about-heading"
            data-about="heading"
          >
            ABOUT
          </h2>

          {/* ── Main two-column prose block ─────────────── */}
          <div className="about-prose-grid">

            {/* Main statement — large */}
            <p className="about-statement" data-about="statement">
              I build reliable backend systems and full-stack web
              applications — primarily with Java, Spring Boot, and React.
            </p>

            {/* Supporting detail — smaller */}
            <div className="about-body-col">
              <p className="about-body" data-about="body">
                Currently a Computer Science undergraduate at Arya College of
                Engineering &amp; IT, Jaipur (2023–2027, CGPA 8.14). I have
                hands-on experience designing REST APIs, working with relational
                databases, and building responsive front-ends with React and
                Tailwind CSS. Beyond coursework, I am deepening my cloud
                knowledge through an Infosys Springboard cloud reliability
                internship and have competed in events including the SKIT
                Hackathon 2025 and EXERGIE'24 Blind Coding Contest.
              </p>

              {/* Technology stack */}
              <div className="about-stack" data-about="stack" aria-label="Core technologies">
                <p className="about-stack-label">CORE STACK</p>
                <ul className="about-stack-list" role="list">
                  {STACK.map((tech) => (
                    <li key={tech} className="about-stack-item">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Horizontal rule ─────────────────────────── */}
          <div className="about-mid-rule" aria-hidden="true" />

          {/* ── Metadata strip ──────────────────────────── */}
          <dl className="about-meta" data-about="meta">
            {META.map(({ label, value }) => (
              <div key={label} className="about-meta-item">
                <dt className="about-meta-label">{label}</dt>
                <dd className="about-meta-value">{value}</dd>
              </div>
            ))}
          </dl>

        </div>
      </div>
    </section>
  );
};

export default About;
