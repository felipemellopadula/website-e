import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import logoImage from "../../assets/LogoUnity3dB.png";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.style.overflow = isNavOpen ? "auto" : "hidden";
  };

  const getTargetComponentFromPath = (path: string) => {
    switch (path) {
      case "/":
        return "MainVideo";
      case "/servicos":
        return "Servicos";
      case "/trabalhos":
        return "Portfolio";
      case "/agencia":
        return "Agencia";
      case "/contato":
        return "Contato";
      default:
        return null;
    }
  };

  const scrollToComponent = (componentName: string) => {
    const component = document.getElementById(componentName);
    if (component) {
      component.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link to="/" onClick={() => scrollToComponent("MainVideo")}>
              <img src={logoImage} alt="Logo" />
            </Link>
          </div>
          <nav className={`${styles.nav} ${isNavOpen ? styles.open : ""}`}>
            <ul>
              <li>
                <Link
                  to="/servicos"
                  onClick={() => scrollToComponent("Servicos")}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/trabalhos"
                  onClick={() => scrollToComponent("Portfolio")}
                >
                  Trabalhos
                </Link>
              </li>
              <li>
                <Link
                  to="/agencia"
                  onClick={() => scrollToComponent("Agencia")}
                >
                  Agência
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  onClick={() => scrollToComponent("Contato")}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className={`${styles.burgerIcon} ${isNavOpen ? styles.open : ""}`}
            onClick={toggleNav}
          >
            {isNavOpen ? null : <FaBars />}
          </div>
        </div>
      </header>

      {isNavOpen && (
        <div className={styles.menuOverlay}>
          <div
            className={`${styles.burgerIcon} ${isNavOpen ? styles.open : ""}`}
            onClick={toggleNav}
            style={{ top: "2rem" }}
          >
            <FaTimes />
          </div>
          <nav className={styles.mobileNav}>
            <ul>
              <li>
                <Link
                  to="/servicos"
                  onClick={() => {
                    scrollToComponent("Servicos");
                    toggleNav();
                  }}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/trabalhos"
                  onClick={() => {
                    scrollToComponent("Portfolio");
                    toggleNav();
                  }}
                >
                  Trabalhos
                </Link>
              </li>
              <li>
                <Link
                  to="/agencia"
                  onClick={() => {
                    scrollToComponent("Agencia");
                    toggleNav();
                  }}
                >
                  Agência
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  onClick={() => {
                    scrollToComponent("Contato");
                    toggleNav();
                  }}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
