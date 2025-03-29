import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import "../styles/Scrollbar.css";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const sections = ["ABOUT", "EXPERIENCE", "PROJECTS"];
const typingText = "Mamadou BA"; // Texte animé du titre

const Home = () => {
  const [active, setActive] = useState("ABOUT");
  const [gradientPosition, setGradientPosition] = useState({ x: "50%", y: "50%" });
  const [typedTitle, setTypedTitle] = useState("");

  // Effet de typing pour le titre
  useEffect(() => {
    setTypedTitle(""); // Réinitialise avant de commencer
    let index = 0;

    const interval = setInterval(() => {
      if (index < typingText.length) {
        setTypedTitle(typingText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Effet de dégradé qui suit la souris
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = `${(event.clientX / window.innerWidth) * 100}%`;
      const y = `${(event.clientY / window.innerHeight) * 100}%`;
      setGradientPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Détection de la section active via IntersectionObserver + Scroll manuel
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0.2,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Détection manuelle en cas d'échec de IntersectionObserver
  const handleScroll = () => {
    let newActive = "ABOUT"; // Par défaut

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const { top, height } = section.getBoundingClientRect();
        if (top < window.innerHeight / 2 && top + height > window.innerHeight / 2) {
          newActive = id;
        }
      }
    });

    setActive(newActive);
  };

  return (
    <div className="container">
      {/* Effet de gradient qui suit la souris */}
      <div
        className="gradient-effect"
        style={{
          background: `radial-gradient(600px at ${gradientPosition.x} ${gradientPosition.y}, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>

      {/* Sidebar */}
      <div className="sidebar">
        <div>
          <h1 className="title">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              {typedTitle}
            </motion.span>
          </h1>
          <p className="fs-5">Developpeur Web en alternance</p>
        </div>
        <nav className="nav-links">
          {sections.map((section) => (
            <div
              key={section}
              className={`nav-item ${active === section ? "active" : ""}`}
              onClick={() => {
                document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {section}
            </div>
          ))}
        </nav>
      </div>

      {/* Scrollable Content */}
      <motion.div className="scrollable-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onScroll={handleScroll}>
        <About />
        <Experience />
        <Projects />
        <footer className="footer mt-5">
          <p className="footer-text">© {new Date().getFullYear()} Mamadou BA. Site réalisé en React (JSX/TSX).</p>
        </footer>
      </motion.div>
      
    </div>
  );
};

export default Home;
