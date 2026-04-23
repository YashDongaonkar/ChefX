import toast from "react-hot-toast";

export async function runHandSwipe({ model, video, refs }) {
  if (!video || video.readyState !== 4) return;

  const predictions = await model.estimateHands(video);
  if (!predictions.length) return;

  const now = Date.now();
  const hand = predictions[0];

  const x = hand.landmarks[8][0];
  const width = video.videoWidth;

  if (!width) return;

  const normX = x / width;

  let zone = "center";
  if (normX < 0.10) zone = "left";
  else if (normX > 0.90) zone = "right";

  const COOLDOWN = 100;
  if (now - (refs.lastSwipeTime || 0) < COOLDOWN) return;

  if (zone === "center") {
    refs.readyForNext = true;
    return;
  }

  if (!refs.readyForNext) return;

  if (zone === "left") {
    window.dispatchEvent(new CustomEvent("swipeLeft"));
  }

  if (zone === "right") {
    window.dispatchEvent(new CustomEvent("swipeRight"));
  }

  refs.lastSwipeTime = now;
  refs.readyForNext = false;
}