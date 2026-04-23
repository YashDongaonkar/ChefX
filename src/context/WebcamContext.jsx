import { createContext, useRef, useEffect, useState } from "react";

export const WebcamContext = createContext();

export default function WebcamProvider({ children }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
            setIsReady(true);
          };
        }
      } catch (err) {
        console.error("Camera error:", err);
      }
    };

    setupCamera();
  }, []);

  return (
    <WebcamContext.Provider
      value={{
        videoRef,
        canvasRef,
        isReady,
      }}
    >
      {children}
    </WebcamContext.Provider>
  );
}