import React, { useState } from "react";
import styles from "./styles.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/LogoUnity3dB.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Estado para o item selecionado

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (index: number | React.SetStateAction<null>) => {
    setSelectedItem(index); // Define o item clicado como selecionado
    setIsOpen(false); // Fecha o menu ao clicar em um item
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo Unity" />
      </div>
      <div className={styles.burgerIcon} onClick={handleToggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
        <ul>
          {["TRABALHOS", "AGÊNCIA", "CONTATO"].map((item, index) => (
            <li
              key={index}
              onClick={() => handleMenuItemClick(index)}
              className={selectedItem === index ? styles.active : ""}
            >
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
