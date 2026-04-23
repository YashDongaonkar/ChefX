import { getIndexPosition } from "./thumbUtil";

const BASE_SCROLL = 20;
const MAX_SCROLL = 100;
const DEAD_ZONE = 40;

export const runHandScroll = async ({ model, video, refs }) => {
  if (!video || !model || refs.isProcessing) return;

  refs.isProcessing = true;

  const predictions = await model.estimateHands(video);

  refs.isProcessing = false;

  if (predictions.length === 0) {
    refs.targetScroll = 0;
    return;
  }

  const landmarks = predictions[0].landmarks;
  const { y } = getIndexPosition(landmarks);

  const midPoint = video.videoHeight / 2;

  let direction = "none";

  if (y < midPoint - DEAD_ZONE) direction = "up";
  else if (y > midPoint + DEAD_ZONE) direction = "down";

  const now = Date.now();

  let velocity = 0;

  if (refs.lastY && refs.lastTime) {
    const dy = y - refs.lastY;
    const dt = now - refs.lastTime;

    const instantVelocity = Math.abs(dy / dt);

    velocity = refs.velocity
      ? 0.7 * refs.velocity + 0.3 * instantVelocity
      : instantVelocity;

    refs.velocity = velocity;
  }

  refs.lastY = y;
  refs.lastTime = now;

  let scrollAmount = BASE_SCROLL + velocity * 400;
  scrollAmount = Math.min(scrollAmount, MAX_SCROLL);

  // 🎯 Set target instead of scrolling directly
  if (direction === "up") {
    refs.targetScroll = -scrollAmount;
  } else if (direction === "down") {
    refs.targetScroll = scrollAmount;
  } else {
    refs.targetScroll = 0;
  }
};