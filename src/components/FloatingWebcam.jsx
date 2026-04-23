import WebcamCanvas from "./WebcamCanvas";
import "../css/webcam.css";

export default function FloatingWebcam() {
  return (
    <div className="webcam-overlay">
      <WebcamCanvas />
    </div>
  );
}