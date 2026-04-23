import { useContext, useEffect } from "react";
import { WebcamContext } from "../context/WebcamContext";

export default function WebcamCanvas() {
  const { videoRef, canvasRef, isReady } = useContext(WebcamContext);

  useEffect(() => {
    if (!isReady) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      ctx.drawImage(video, 0, 0);

      requestAnimationFrame(draw);
    };

    draw();
  }, [isReady]);

  return (
    <div style={{ position: "relative" }}>
      <video
        ref={videoRef}
        style={{ display: "none" }}
        playsInline
      />
      <canvas ref={canvasRef} />
    </div>
  );
}