// Header.tsx
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const targetComponent = getTargetComponentFromPath(pathname);
    if (targetComponent) {
      scrollToComponent(targetComponent);
    }
  }, [pathname]);

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
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Main Video</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/trabalhos">Portfólio</Link>
          </li>
          <li>
            <Link to="/agencia">Agência</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
