import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import videoBgDesktop from "../../assets/video_ae02A.mp4";
import videoBgIpad from "../../assets/video_ae_ipad.mp4";
import videoBgIpadAir from "../../assets/video_ae_ipadair.mp4";
import videoBgMobile from "../../assets/video_ae_mobile.mp4";

export const MainVideo = () => {
  const [videoSource, setVideoSource] = useState(videoBgDesktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 635) {
        setVideoSource(videoBgMobile); // Troca o vídeo para celular (635px)
      } else if (window.innerWidth <= 820) {
        setVideoSource(videoBgIpadAir); // Troca o vídeo para iPad Air (820px)
      } else if (window.innerWidth <= 768) {
        setVideoSource(videoBgIpad); // Troca o vídeo para iPad (768px)
      } else {
        setVideoSource(videoBgDesktop); // Vídeo padrão para desktop
      }
    };

    handleResize(); // Verifica o tamanho da janela quando o componente é montado
    window.addEventListener("resize", handleResize); // Adiciona o evento de redimensionamento

    return () => {
      window.removeEventListener("resize", handleResize); // Remove o listener ao desmontar o componente
    };
  }, []);

  return (
    <div id="MainVideo" className={styles.main}>
      <video src={videoSource} autoPlay loop muted />
    </div>
  );
};
