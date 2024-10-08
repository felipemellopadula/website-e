import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/LogoUnity3dB.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
      if (window.innerWidth > 500) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (index: any) => {
    setSelectedItem(index);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo Unity" />
      </div>

      {isMobile && (
        <div className={styles.burgerIcon} onClick={handleToggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}

      <nav
        className={`${styles.nav} ${isMobile && isOpen ? styles.navOpen : ""} ${
          !isMobile ? styles.navDesktop : ""
        }`}
      >
        <ul>
          {["SERVIÇOS", "TRABALHOS", "AGÊNCIA", "CONTATO"].map(
            (item, index) => (
              <li
                key={index}
                onClick={() => handleMenuItemClick(index)}
                className={selectedItem === index ? styles.active : ""}
              >
                <a>{item}</a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};
