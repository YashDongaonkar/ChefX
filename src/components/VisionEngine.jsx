import { useContext, useEffect, useRef } from "react";
import { WebcamContext } from "../context/WebcamContext";
import { VisionContext } from "../context/VisionContext";

import { loadHandModel, getHandModel } from "../utils/handModel";
import { loadTimerModel, getTimerModel } from "../utils/timerModel";
import { runHandScroll } from "../utils/handScroll";
import { runHandSwipe } from "../utils/handSwipe";
import { runTimerGesture } from "../utils/timerGesture";

import toast from "react-hot-toast";

export default function VisionEngine() {
  const { videoRef, isReady } = useContext(WebcamContext);
  const { activeModes } = useContext(VisionContext);

  const refs = useRef({
  lastSwipeTime: 0,
  lastZone: null,
  readyForNext: true,
  lastGestureTime: 0,
  lastScrollTime: 0,
  lastY: null,
  lastTime: null
});

  useEffect(() => {
    loadHandModel();
    toast.success("Hand Model loaded successfully!");
    loadTimerModel();
    toast.success("Timer Model loaded successfully!");
  }, []);

  useEffect(() => {
    if (!isReady) return;

    let isRunning = true;

    const loop = async () => {
      while (isRunning) {
        const handModel = getHandModel();
        const timerModel = getTimerModel();

        if (activeModes.includes("handScroll") && handModel) {
          await runHandScroll({
            model: handModel,
            video: videoRef.current,
            refs: refs.current
          });
        }

        if (activeModes.includes("handSwipe") && handModel) {
          await runHandSwipe({
            model: handModel,
            video: videoRef.current,
            refs: refs.current
          });
        }

        if (activeModes.includes("timerGesture") && timerModel) {
          await runTimerGesture({
            model: timerModel,
            video: videoRef.current,
            refs: refs.current
          });
        }

        await new Promise((r) => setTimeout(r, 100));
      }
    };

    loop();

    return () => {
      isRunning = false;
    };
  }, [isReady, activeModes]);

  return null;
}