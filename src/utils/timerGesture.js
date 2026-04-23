export async function runTimerGesture({ model, video, refs }) {
  if (!model || !video || video.readyState !== 4) return;

  const prediction = await model.predict(video);

  const best = prediction.reduce((prev, curr) =>
    prev.probability > curr.probability ? prev : curr
  );

  const now = Date.now();

  if (now - (refs.lastGestureTime || 0) < 2000) return;

  if (best.className === "idle") return;

  if (best.probability > 0.9) {
    switch (best.className) {
      case "reset":
        window.dispatchEvent(new Event("timerStart"));
        break;
        case "stop":
          window.dispatchEvent(new Event("timerStop"));
        break;
      // case "start":
      //   window.dispatchEvent(new Event("timerReset"));
      //   break;
    }

    refs.lastGestureTime = now;
  }
}