import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logoImage from "../../assets/LogoUnity3dB-menor.webp";
import scrolledLogoImage from "../../assets/logo3D.png";
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
            <RouterLink to="/">
              <img
                src={isScrolled ? scrolledLogoImage : logoImage}
                alt="Logo"
              />
            </RouterLink>
          </div>
          <nav className={`${styles.nav} ${isNavOpen ? styles.open : ""}`}>
            <ul>
              <li>
                <RouterLink to="/#servicos">Serviços</RouterLink>
              </li>
              <li>
                <RouterLink to="/#portfolio">Trabalhos</RouterLink>
              </li>
              <li>
                <RouterLink to="/#agencia">Agência</RouterLink>
              </li>
              <li>
                <RouterLink to="/#contato">Contato</RouterLink>
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
                <RouterLink to="/#servicos" onClick={toggleNav}>
                  Serviços
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/#portfolio" onClick={toggleNav}>
                  Trabalhos
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/#agencia" onClick={toggleNav}>
                  Agência
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/#contato" onClick={toggleNav}>
                  Contato
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
