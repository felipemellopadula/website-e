import { useState } from "react";
import styles from "./styles.module.scss";

export const AboutUs = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const items = [
    {
      id: 3,
      title: "SOCIAL MEDIA",
      videoSrc: "/videos/social_media.mp4",
    },
    {
      id: 4,
      title: "GESTÃO DE TRÁFEGO",
      videoSrc: "/videos/gestao_trafego.mp4",
    },
    {
      id: 5,
      title: "TIME DE CRIATIVOS",
      videoSrc: "/videos/time_criativos.mp4",
    },
    {
      id: 6,
      title: "WEB DESIGN - LANDING PAGES",
      videoSrc: "/videos/web_design.mp4",
    },
    {
      id: 7,
      title: "FILMES PARA MÍDIAS DIGITAIS E TV",
      videoSrc: "/videos/filmes_midias_digitais.mp4",
    },
    {
      id: 8,
      title: "PEÇAS PUBLICITÁRIAS",
      videoSrc: "/videos/pecas_publicitarias.mp4",
    },
    {
      id: 9,
      title: "LOJA ONLINE",
      videoSrc: "/videos/loja_online.mp4",
    },
    {
      id: 10,
      title: "COPY E REDAÇÃO",
      videoSrc: "/videos/copy_redacao.mp4",
    },
  ];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.item1}></div>
      <div className={styles.item2}>
        <h3>SOMOS UMA AGÊNCIA DE COMUNICAÇÃO QUE INOVA A CADA DIA.</h3>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className={styles[`item${item.id}`]}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <h3>{item.title}</h3>
          {hoveredItem === item.id && (
            <div className={styles.videoContainer}>
              <video src={item.videoSrc} autoPlay loop muted playsInline />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};
