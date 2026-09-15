import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SKILL_GROUPS = [
  {
    number: "01",
    title: "BACKEND",
    description:
      "Building server-side applications, APIs and business logic.",
    skills: ["Java", "Spring Boot", "Node.js", "Express.js"],
    dark: false,
  },
  {
    number: "02",
    title: "FRONTEND",
    description:
      "Creating responsive interfaces and component-based web applications.",
    skills: ["React.js", "JavaScript", "HTML / CSS", "Tailwind CSS"],
    dark: true,
  },
  {
    number: "03",
    title: "DATABASES",
    description:
      "Working with relational and document-oriented data storage.",
    skills: ["MySQL", "MongoDB", "JDBC"],
    dark: false,
  },
  {
    number: "04",
    title: "TOOLS & WORKFLOW",
    description:
      "Tools I use to build, manage and maintain software projects.",
    skills: ["Git / GitHub", "VS Code", "Eclipse"],
    dark: false,
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

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
            "[data-skill-label]",
            "[data-skill-heading]",
            "[data-skill-copy]",
            "[data-skill-card]",
            "[data-core]",
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
          }
        );

        return;
      }

      /* Header */
      gsap.fromTo(
        "[data-skill-label]",
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        "[data-skill-heading]",
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
        "[data-skill-copy]",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        }
      );

      /* Cards */
      gsap.fromTo(
        "[data-skill-card]",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-skills-grid]",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* Core stack */
      gsap.fromTo(
        "[data-core]",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-core]",
            start: "top 88%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="skills-editorial"
      aria-labelledby="skills-heading"
    >
      <div className="skills-editorial-container">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="skills-editorial-top">

          <div
            data-skill-label
            className="skills-editorial-label"
          >
            <span>03</span>
            <span>/</span>
            <span>TECHNICAL STACK</span>
          </div>

          <div className="skills-editorial-line" />

        </div>

        <div className="skills-editorial-heading-row">

          <h2
            id="skills-heading"
            data-skill-heading
            className="skills-editorial-heading"
          >
            WHAT I
            <br />
            <span>WORK WITH.</span>
          </h2>

          <p
            data-skill-copy
            className="skills-editorial-copy"
          >
            A practical stack focused on Java backend
            development, modern frontend technologies,
            databases and the tools that bring applications
            together.
          </p>

        </div>

        {/* ==================================================
            SKILL GRID
        ================================================== */}

        <div
          data-skills-grid
          className="skills-editorial-grid"
        >

          {SKILL_GROUPS.map((group) => (
            <article
              key={group.number}
              data-skill-card
              className={`skills-editorial-card ${
                group.dark
                  ? "skills-editorial-card-dark"
                  : ""
              }`}
            >

              {/* Card top */}
              <div className="skills-card-header">

                <div className="skills-card-index">
                  <span>{group.number}</span>
                  <span className="skills-card-line" />
                </div>

                <ArrowUpRight
                  size={21}
                  strokeWidth={1.4}
                  className="skills-card-arrow"
                />

              </div>

              {/* Title */}
              <h3 className="skills-card-title">
                {group.title}
              </h3>

              {/* Description */}
              <p className="skills-card-description">
                {group.description}
              </p>

              {/* Technologies */}
              <div className="skills-card-technologies">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skills-tech-pill"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </article>
          ))}

        </div>

        {/* ==================================================
            CORE STACK
        ================================================== */}

        <div
          ref={undefined}
          data-core
          className="skills-core-stack"
        >

          <div className="skills-core-label">
            <span>CORE STACK</span>
            <span className="skills-core-small-line" />
          </div>

          <div className="skills-core-main">
            <span>JAVA</span>

            <span className="skills-core-plus">
              +
            </span>

            <span>SPRING BOOT</span>
          </div>

          <div className="skills-core-divider" />

          <p className="skills-core-description">
            My primary development focus — building
            backend services, REST APIs and full-stack
            applications.
          </p>

          <button
            type="button"
            className="skills-core-button"
            onClick={scrollToProjects}
          >
            <span>VIEW PROJECTS</span>

            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
            />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Skills;