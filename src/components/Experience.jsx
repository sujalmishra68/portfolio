import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronDown, Briefcase, GraduationCap } from "lucide-react";

import { cn } from "../utils.js";

const EXPERIENCES = [
  {
    number: "01",
    company: "Infosys Springboard",
    role: "Java Developer",
    period: "2025",
    type: "Virtual Internship",
    description:
      "Hands-on development experience with Java, Spring Boot, REST APIs, databases, and full-stack development.",
    details: [
      "Building and improving web applications using Java and Spring Boot.",
      "Developing RESTful APIs and working with relational databases.",
      "Applying software-development practices through practical project work.",
      "Currently working on a Volunteer Management System.",
    ],
    icon: Briefcase,
  },
  {
    number: "02",
    company: "GRRAS Solutions",
    role: "Java Intern",
    period: "2026",
    type: "Internship",
    description:
      "Working with Java, Spring Boot, REST APIs, databases, and full-stack development in a practical development environment.",
    details: [
      "Developing and improving web applications using Java and Spring Boot.",
      "Working with REST APIs and backend application architecture.",
      "Working with databases and integrating backend services.",
      "Gaining practical experience with full-stack software development.",
    ],
    icon: Briefcase,
  },
  {
    number: "03",
    company: "Salesforce",
    role: "Salesforce Developer",
    period: "2025",
    type: "Virtual Internship",
    description:
      "Hands-on learning and project-based experience with the Salesforce platform, CRM concepts, Apex, and Lightning development.",
    details: [
      "Working with Salesforce CRM concepts and platform fundamentals.",
      "Learning and applying Apex for Salesforce development.",
      "Exploring Lightning components and Salesforce development tools.",
      "Building practical knowledge through hands-on and project-based learning.",
    ],
    icon: Briefcase,
  },
  {
    number: "04",
    company: "Arya College of Engineering & IT",
    role: "B.Tech — Computer Science",
    period: "2023 — 2027",
    type: "Education",
    description:
      "Pursuing a Bachelor of Technology in Computer Science with a focus on programming, software development, and computer science fundamentals.",
    details: [
      "Current CGPA: 8.14",
      "Building a strong foundation in programming and data structures.",
      "Developing practical knowledge of software engineering concepts.",
    ],
    icon: GraduationCap,
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

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
            "[data-exp-label]",
            "[data-exp-heading]",
            "[data-exp-item]",
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
          }
        );

        return;
      }

      /* Section label */
      gsap.fromTo(
        "[data-exp-label]",
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        }
      );

      /* Main heading */
      gsap.fromTo(
        "[data-exp-heading]",
        {
          opacity: 0,
          y: 40,
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

      /* Experience rows */
      gsap.fromTo(
        "[data-exp-item]",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-exp-list]",
            start: "top 82%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const toggleExperience = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="exp-section"
      aria-labelledby="experience-heading"
    >
      <div className="exp-top-rule" aria-hidden="true" />

      <div className="exp-container">
        {/* ─────────────────────────────────────────────
            HEADER
        ───────────────────────────────────────────── */}

        <header className="exp-header">
          <div
            data-exp-label
            className="exp-header-label"
            aria-hidden="true"
          >
            <span className="exp-header-num">04</span>

            <span className="exp-header-lbl">
              Experience & Education
            </span>
          </div>

          <h2
            id="experience-heading"
            data-exp-heading
            className="exp-main-heading"
          >
            EXPERIENCE
            <br />
            <span>&amp; EDUCATION</span>
          </h2>
        </header>

        {/* ─────────────────────────────────────────────
            EXPERIENCE LIST
        ───────────────────────────────────────────── */}

        <div
          data-exp-list
          className="exp-list"
        >
          {EXPERIENCES.map((experience, index) => {
            const Icon = experience.icon;
            const isOpen = openIndex === index;

            return (
              <article
                key={experience.number}
                data-exp-item
                className={cn(
                  "exp-item",
                  isOpen && "exp-item-open"
                )}
              >
                {/* Main row */}
                <button
                  type="button"
                  className="exp-trigger"
                  onClick={() => toggleExperience(index)}
                  aria-expanded={isOpen}
                  aria-controls={`experience-details-${index}`}
                >
                  {/* Number */}
                  <span className="exp-number">
                    {experience.number}
                  </span>

                  {/* Company */}
                  <span className="exp-company">
                    {experience.company}
                  </span>

                  {/* Role */}
                  <span className="exp-role">
                    {experience.role}
                  </span>

                  {/* Period */}
                  <span className="exp-period">
                    {experience.period}
                  </span>

                  {/* Arrow */}
                  <span
                    className="exp-arrow"
                    aria-hidden="true"
                  >
                    <ChevronDown
                      size={20}
                      strokeWidth={1.4}
                    />
                  </span>
                </button>

                {/* Accordion content */}
                <div
                  id={`experience-details-${index}`}
                  className="exp-details"
                  hidden={!isOpen}
                >
                  <div className="exp-details-inner">
                    {/* Icon */}
                    <div
                      className="exp-icon"
                      aria-hidden="true"
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content */}
                    <div className="exp-description">
                      <div className="exp-meta">
                        <span>{experience.type}</span>
                        <span className="exp-meta-dot">•</span>
                        <span>{experience.period}</span>
                      </div>

                      <p className="exp-summary">
                        {experience.description}
                      </p>

                      <ul className="exp-details-list">
                        {experience.details.map(
                          (detail) => (
                            <li key={detail}>
                              {detail}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="exp-footer-note">
          <span className="exp-footer-line" />

          <p>
            Building practical experience across backend
            development, full-stack applications, and
            cloud-oriented technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;