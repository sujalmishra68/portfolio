import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Github, Linkedin, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /*
   * Smooth section navigation.
   * Lenis, when initialized in App.jsx, will take over the
   * scrolling behavior through the native scroll call.
   */
  const scrollToSection = (id) => {
    const target = document.getElementById(id);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsOpen(false);
  };

  /*
   * Navbar scroll state
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Initial navbar entrance
   */
  useEffect(() => {
    if (!navRef.current) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      gsap.set(navRef.current, {
        opacity: 1,
        y: 0,
      });

      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        {
          opacity: 0,
          y: -24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  /*
   * Mobile menu animation
   */
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      gsap.set(mobileMenuRef.current, {
        opacity: isOpen ? 1 : 0,
        height: isOpen ? "auto" : 0,
      });

      return;
    }

    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        {
          opacity: 0,
          height: 0,
        },
        {
          opacity: 1,
          height: "auto",
          duration: 0.45,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        height: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  /*
   * Close mobile navigation when switching to desktop
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`site-navbar ${scrolled ? "site-navbar-scrolled" : ""}`}
    >
      <div className="navbar-inner">
        {/* ─────────────────────────────────────────────
            LOGO
        ───────────────────────────────────────────── */}
        <button
          type="button"
          className="navbar-logo"
          onClick={() => scrollToSection("hero")}
          aria-label="Go to homepage"
        >
          <span className="navbar-logo-first">Sujal</span>
          <span className="navbar-logo-last">Mishra</span>
        </button>

        {/* ─────────────────────────────────────────────
            DESKTOP NAVIGATION
        ───────────────────────────────────────────── */}
        <div className="navbar-desktop">
          <div className="navbar-links">
            {NAV_ITEMS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="navbar-link"
              >
                <span className="navbar-link-number">
                  0{index + 1}
                </span>

                <span className="navbar-link-text">
                  {item.name}
                </span>
              </button>
            ))}
          </div>

          {/* Social links */}
          <div className="navbar-socials">
            <a
              href="https://github.com/sujalmishra68"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="navbar-social"
            >
              <Github size={17} strokeWidth={1.7} />
            </a>

            <a
              href="https://www.linkedin.com/in/sujalkumarmishra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="navbar-social"
            >
              <Linkedin size={17} strokeWidth={1.7} />
            </a>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            MOBILE MENU BUTTON
        ───────────────────────────────────────────── */}
        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <X size={21} strokeWidth={1.6} />
          ) : (
            <Menu size={21} strokeWidth={1.6} />
          )}
        </button>
      </div>

      {/* ─────────────────────────────────────────────
          MOBILE NAVIGATION
      ───────────────────────────────────────────── */}
      <div
        id="mobile-navigation"
        ref={mobileMenuRef}
        className="navbar-mobile"
        aria-hidden={!isOpen}
      >
        <div className="navbar-mobile-inner">
          {NAV_ITEMS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="navbar-mobile-link"
              tabIndex={isOpen ? 0 : -1}
            >
              <span className="navbar-mobile-number">
                0{index + 1}
              </span>

              <span>{item.name}</span>
            </button>
          ))}

          <div className="navbar-mobile-socials">
            <a
              href="https://github.com/sujalmishra68"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              tabIndex={isOpen ? 0 : -1}
            >
              <Github size={19} strokeWidth={1.6} />
            </a>

            <a
              href="https://www.linkedin.com/in/sujalkumarmishra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              tabIndex={isOpen ? 0 : -1}
            >
              <Linkedin size={19} strokeWidth={1.6} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;