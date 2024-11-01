import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import videoBgDesktop from "../../assets/video_desk_locucao.mp4";
import videoBgIpad from "../../assets/video_ipad_menor_audio.mp4";
import videoBgIpadAir from "../../assets/video_ipad_air_menor.mp4";
import videoBgMobile from "../../assets/video_mobile_menor_audio.mp4";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";

export const MainVideo = () => {
  const [videoSource, setVideoSource] = useState<string>(videoBgDesktop);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 635) {
        setVideoSource(videoBgMobile);
      } else if (window.innerWidth <= 768) {
        setVideoSource(videoBgIpad);
      } else if (window.innerWidth <= 820) {
        setVideoSource(videoBgIpadAir);
      } else {
        setVideoSource(videoBgDesktop);
      }
    };

    // Chama a função uma vez para definir o vídeo inicial
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpa o listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);

      // Se estiver desmutando, tenta iniciar a reprodução se necessário
      if (!newMutedState) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Erro ao iniciar áudio:", error);
            // Se houver erro, mantém o vídeo mudo
            setIsMuted(true);
          });
        }
      }
    }
  };

  return (
    <div id="MainVideo" className={styles.main} onClick={handleToggleMute}>
      {/* Ícone do estado atual de som */}
      <div className={styles.icon}>
        {isMuted ? (
          <HiVolumeOff size={24} color="#fff" />
        ) : (
          <HiVolumeUp size={24} color="#fff" />
        )}
      </div>

      {/* Elemento de vídeo */}
      <video
        ref={videoRef}
        src={videoSource}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className={styles.video}
      />
    </div>
  );
};
