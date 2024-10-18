// Header.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Importando react-scroll para rolagem suave
import styles from "./Header.module.scss";
import logoImage from "../../assets/LogoUnity3dB.png";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header: React.FC = () => {
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

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link to="MainVideo" smooth={true} duration={500}>
              <img src={logoImage} alt="Logo" />
            </Link>
          </div>
          <nav className={`${styles.nav} ${isNavOpen ? styles.open : ""}`}>
            <ul>
              <li>
                <Link to="Servicos" smooth={true} duration={500}>
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="Portfolio" smooth={true} duration={500}>
                  Trabalhos
                </Link>
              </li>
              <li>
                <Link to="Agencia" smooth={true} duration={500}>
                  Agência
                </Link>
              </li>
              <li>
                <Link to="Contato" smooth={true} duration={500}>
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className={`${styles.burgerIcon} ${isNavOpen ? styles.open : ""}`}
            onClick={toggleNav}
          >
            {isNavOpen ? <FaTimes /> : <FaBars />}
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
                  to="Servicos"
                  smooth={true}
                  duration={500}
                  onClick={toggleNav}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="Portfolio"
                  smooth={true}
                  duration={500}
                  onClick={toggleNav}
                >
                  Trabalhos
                </Link>
              </li>
              <li>
                <Link
                  to="Agencia"
                  smooth={true}
                  duration={500}
                  onClick={toggleNav}
                >
                  Agência
                </Link>
              </li>
              <li>
                <Link
                  to="Contato"
                  smooth={true}
                  duration={500}
                  onClick={toggleNav}
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
