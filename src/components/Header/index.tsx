import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logoImage} alt="Logo" />
        </Link>
      </div>
      <div className={styles.burgerIcon} onClick={toggleNav}>
        <FaBars />
      </div>
      {isNavOpen && (
        <div className={styles.menuOverlay}>
          <nav className={styles.mobileNav}>
            <div className={styles.closeIcon} onClick={toggleNav}>
              <FaTimes />
            </div>
            <ul>
              <li>
                <Link to="/servicos" onClick={toggleNav}>
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/trabalhos" onClick={toggleNav}>
                  Trabalhos
                </Link>
              </li>
              <li>
                <Link to="/agencia" onClick={toggleNav}>
                  Agência
                </Link>
              </li>
              <li>
                <Link to="/contato" onClick={toggleNav}>
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
