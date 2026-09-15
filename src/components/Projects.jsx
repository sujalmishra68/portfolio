import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import stockflowImage from "../assets/stockflow.png";
import productBrowsingImage from "../assets/product-browsing.png";
import volunteerImage from "../assets/volunteer-management.png";

gsap.registerPlugin(ScrollTrigger);

/*
  PROJECTS
  ------------------------------------------------------------
  Selected work for Sujal Kumar Mishra

  Projects:
  01. StockFlow — Inventory Management System
  02. Product Browsing Platform — Cursor Pagination API
  03. Volunteer Management System
*/

const PROJECTS = [
  {
    number: "01",

    title: "StockFlow",

    subtitle: "Inventory Management System",

    description:
      "A full-stack inventory management application built with React.js and Spring Boot, following a layered backend architecture for maintainable application development.",

    details: [
      "Implemented secure JWT-based authentication and role-based authorization using Spring Security to control access to protected application resources.",

      "Developed RESTful backend services using Spring Boot, Spring Data JPA, and Hibernate for inventory-related data and business operations.",

      "Designed a relational PostgreSQL database schema with entity relationships for products, categories, suppliers, inventory, purchases, and sales.",

      "Integrated the React frontend with Spring Boot REST APIs and developed responsive dashboard interfaces for inventory management.",
    ],

    tags: [
      "React.js",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "JPA",
      "Hibernate",
      "REST API",
    ],

    github: null,

    live: null,

    /*
      No project screenshot was supplied.
      Therefore we intentionally use a typographic preview instead
      of inventing a fake screenshot.
    */
    image: stockflowImage,

    imageAlt: "StockFlow inventory management system",
  },

  {
    number: "02",

    title: "Product Browsing Platform",

    subtitle: "Cursor Pagination API",

    description:
      "A full-stack product browsing platform engineered to efficiently serve a dataset containing over 200K product records using stable cursor-based pagination.",

    details: [
      "Implemented cursor-based pagination using updated_at and id composite ordering to provide stable sequential browsing while preventing duplicate and skipped records.",

      "Optimized PostgreSQL data retrieval using composite database indexes and efficient SQL queries for filtering and pagination workloads.",

      "Developed RESTful APIs supporting product browsing and category filtering and integrated the APIs with a responsive React.js frontend.",

      "Deployed the full-stack application using Render and Neon PostgreSQL for cloud-based access.",
    ],

    tags: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "React.js",
      "REST API",
      "Cursor Pagination",
      "Neon",
      "Render",
    ],

    github:
      "https://github.com/sujalmishra68/product-pagination-api",

    live:
      "https://product-catalog-dashboard.onrender.com",

    image: productBrowsingImage,

    imageAlt: "Product browsing platform with cursor pagination",
  },

  {
    number: "03",

    title: "Volunteer Management System",

    subtitle: "VolunteerHub",

    description:
      "A full-stack volunteer management platform built with React, Spring Boot, and PostgreSQL for managing volunteer activities and application workflows.",

    details: [
      "Built a React frontend integrated with Spring Boot REST APIs for volunteer management workflows.",

      "Implemented JWT-based authentication and role-based access control to protect application resources.",

      "Designed backend services with Spring Boot and PostgreSQL for structured volunteer and event-related data management.",

      "Implemented event management, attendance tracking, and automated PDF certificate generation.",
    ],

    tags: [
      "React.js",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Spring Security",
      "REST API",
    ],

    github:
      "https://github.com/sujalmishra68/volunteerhub",

    live: null,

    image: volunteerImage,

    imageAlt: "Volunteer management system",
  },
];


/* ================================================================
   PROJECT PREVIEW
   ================================================================ */

const ProjectPreview = ({ project }) => {
  return (
    <div className="proj-image-wrap">
      <div className="proj-image-inner">

        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            className="proj-image"
            loading="lazy"
            decoding="async"
            width="1200"
            height="675"
          />
        ) : (
          <div
            className="proj-preview-placeholder"
            aria-label={`${project.title} project preview`}
          >
            <span className="proj-preview-number">
              {project.number}
            </span>

            <span className="proj-preview-title">
              {project.title}
            </span>

            <span className="proj-preview-subtitle">
              {project.subtitle}
            </span>

            <span className="proj-preview-stack">
              {project.tags.slice(0, 4).join(" · ")}
            </span>
          </div>
        )}

      </div>
    </div>
  );
};


/* ================================================================
   SINGLE PROJECT CARD
   ================================================================ */

const ProjectCard = ({ project, idx }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set("[data-proj]", {
          opacity: 1,
          x: 0,
          y: 0,
          clipPath: "none",
        });

        return;
      }

      const base = {
        trigger: card,
        start: "top 82%",
        toggleActions: "play none none none",
      };


      /* Project number */

      gsap.fromTo(
        card.querySelector("[data-proj='number']"),

        {
          opacity: 0,
          x: -16,
        },

        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: base,
        }
      );


      /* Project title */

      gsap.fromTo(
        card.querySelector("[data-proj='title']"),

        {
          opacity: 0,
          y: 28,
          clipPath: "inset(0 0 100% 0)",
        },

        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.75,
          ease: "power3.out",

          scrollTrigger: {
            ...base,
            start: "top 80%",
          },
        }
      );


      /* Project preview */

      gsap.fromTo(
        card.querySelector("[data-proj='image']"),

        {
          opacity: 0,
          y: 22,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",

          scrollTrigger: {
            ...base,
            start: "top 78%",
          },
        }
      );


      /* Description */

      gsap.fromTo(
        card.querySelector("[data-proj='desc']"),

        {
          opacity: 0,
          y: 18,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",

          scrollTrigger: {
            ...base,
            start: "top 74%",
          },
        }
      );


      /* Technology tags */

      gsap.fromTo(
        card.querySelector("[data-proj='tags']"),

        {
          opacity: 0,
          y: 14,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",

          scrollTrigger: {
            ...base,
            start: "top 70%",
          },
        }
      );


      /* Links */

      gsap.fromTo(
        card.querySelector("[data-proj='links']"),

        {
          opacity: 0,
          y: 12,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",

          scrollTrigger: {
            ...base,
            start: "top 66%",
          },
        }
      );

    }, cardRef);

    return () => ctx.revert();
  }, []);


  const isLast = idx === PROJECTS.length - 1;


  return (
    <article
      ref={cardRef}
      className="proj-card"
      aria-labelledby={`proj-title-${project.number}`}
    >

      {/* ====================================================
          PROJECT NUMBER
      ==================================================== */}

      <div className="proj-number-row">

        <span
          data-proj="number"
          className="proj-number"
          aria-hidden="true"
        >
          {project.number}
        </span>

        <span
          className="proj-number-total"
          aria-hidden="true"
        >
          / {String(PROJECTS.length).padStart(2, "0")}
        </span>

      </div>


      {/* ====================================================
          PROJECT TITLE
      ==================================================== */}

      <h3
        id={`proj-title-${project.number}`}
        data-proj="title"
        className="proj-title"
      >
        {project.title}
      </h3>


      {/* ====================================================
          PROJECT BODY
      ==================================================== */}

      <div className="proj-body">

        {/* ------------------------------------------------
            PROJECT PREVIEW
        ------------------------------------------------ */}

        <div data-proj="image">
          <ProjectPreview project={project} />
        </div>


        {/* ------------------------------------------------
            PROJECT INFORMATION
        ------------------------------------------------ */}

        <div className="proj-meta">

          {/* Description */}

          <p
            data-proj="desc"
            className="proj-desc"
          >
            {project.description}
          </p>


          {/* Detailed points */}

          {project.details?.length > 0 && (
            <ul className="proj-details">
              {project.details.map((detail, index) => (
                <li key={index}>
                  {detail}
                </li>
              ))}
            </ul>
          )}


          {/* Technology stack */}

          <ul
            data-proj="tags"
            className="proj-tags"
            aria-label={`Technologies used in ${project.title}`}
            role="list"
          >
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="proj-tag"
              >
                {tag}
              </li>
            ))}
          </ul>


          {/* Links */}

          <div
            data-proj="links"
            className="proj-links"
          >

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <span>
                  GITHUB
                </span>

                <span
                  className="proj-link-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            )}


            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
                aria-label={`Open ${project.title} live demo`}
              >
                <span>
                  LIVE DEMO
                </span>

                <span
                  className="proj-link-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            )}

          </div>

        </div>

      </div>


      {/* ====================================================
          PROJECT SEPARATOR
      ==================================================== */}

      {!isLast && (
        <div
          className="proj-separator"
          aria-hidden="true"
        />
      )}

    </article>
  );
};


/* ================================================================
   PROJECTS SECTION
   ================================================================ */

const Projects = () => {
  const sectionRef = useRef(null);


  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


    const ctx = gsap.context(() => {

      if (reduced) {
        gsap.set("[data-proj-hdr]", {
          opacity: 1,
          x: 0,
          y: 0,
        });

        return;
      }


      const base = {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      };


      /* Section label */

      gsap.fromTo(
        "[data-proj-hdr='label']",

        {
          opacity: 0,
          x: -18,
        },

        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: base,
        }
      );


      /* Main heading */

      gsap.fromTo(
        "[data-proj-hdr='heading']",

        {
          opacity: 0,
          y: 32,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",

          scrollTrigger: {
            ...base,
            start: "top 78%",
          },
        }
      );


      /* GitHub CTA */

      gsap.fromTo(
        "[data-proj-hdr='cta']",

        {
          opacity: 0,
          y: 12,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",

          scrollTrigger: {
            ...base,
            start: "top 74%",
          },
        }
      );

    }, sectionRef);


    return () => ctx.revert();

  }, []);


  return (
    <section
      id="projects"
      ref={sectionRef}
      className="proj-section"
      aria-labelledby="proj-main-heading"
    >

      {/* ====================================================
          TOP RULE
      ==================================================== */}

      <div
        className="proj-top-rule"
        aria-hidden="true"
      />


      {/* ====================================================
          SECTION HEADER
      ==================================================== */}

      <div className="proj-section-header">

        <aside
          data-proj-hdr="label"
          className="proj-label-col"
          aria-hidden="true"
        >
          <span className="proj-label-number">
            02
          </span>

          <span className="proj-label-text">
            Selected Work
          </span>
        </aside>


        <div className="proj-heading-col">

          <h2
            id="proj-main-heading"
            data-proj-hdr="heading"
            className="proj-main-heading"
          >
            SELECTED
            <br aria-hidden="true" />
            WORK
          </h2>


          {/* GitHub */}

          <a
            data-proj-hdr="cta"
            href="https://github.com/sujalmishra68?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="proj-github-cta"
            aria-label="View all projects on GitHub"
          >
            <span>
              ALL PROJECTS ON GITHUB
            </span>

            <span
              className="proj-link-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

        </div>

      </div>


      {/* ====================================================
          PROJECT LIST
      ==================================================== */}

      <div className="proj-list">

        {PROJECTS.map((project, idx) => (
          <ProjectCard
            key={project.number}
            project={project}
            idx={idx}
          />
        ))}

      </div>

    </section>
  );
};

export default Projects;