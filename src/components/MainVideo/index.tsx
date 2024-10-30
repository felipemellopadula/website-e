import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import videoBgDesktop from "../../assets/video_desk.mp4";
import videoBgIpad from "../../assets/video_ipad_menor.mp4";
import videoBgIpadAir from "../../assets/video_ipad_air_menor.mp4";
import videoBgMobile from "../../assets/video_mobile_menor.mp4";

export const MainVideo = () => {
  const [videoSource, setVideoSource] = useState(videoBgDesktop);
  const [isAppleDevice, setIsAppleDevice] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const videoRef = useRef(null);

  // Função para detectar dispositivos Apple
  const checkIfAppleDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod|mac/.test(userAgent);
    return isIOS;
  };

  useEffect(() => {
    // Detecta se é dispositivo Apple ao montar o componente
    const isApple = checkIfAppleDevice();
    setIsAppleDevice(isApple);
    setShowPlayButton(isApple);

    const handleResize = () => {
      if (window.innerWidth <= 635) {
        setVideoSource(videoBgMobile);
      } else if (window.innerWidth <= 820) {
        setVideoSource(videoBgIpadAir);
      } else if (window.innerWidth <= 768) {
        setVideoSource(videoBgIpad);
      } else {
        setVideoSource(videoBgDesktop);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Função para iniciar o vídeo manualmente
  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlayButton(false);
    }
  };

  return (
    <div id="MainVideo" className={styles.main}>
      {isAppleDevice ? (
        // Renderização para dispositivos Apple
        <>
          <video
            ref={videoRef}
            src={videoSource}
            loop
            muted
            playsInline // Importante para iOS
          />
          {showPlayButton && (
            <div className={styles.playButton} onClick={handlePlayVideo}>
              Toque para iniciar o vídeo
            </div>
          )}
        </>
      ) : (
        // Renderização para outros dispositivos
        <video src={videoSource} autoPlay loop muted />
      )}
    </div>
  );
};
