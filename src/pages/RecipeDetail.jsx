import { useState, useEffect, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { VisionContext } from "../context/VisionContext";

import Timer from "../components/Timer";

import "../css/recipeDetail.css";
import recipes from "../data/recipes";

export default function RecipeDetail() {
  const { setActiveModes } = useContext(VisionContext);

  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) return <p>Recipe not found</p>;
  
  const [stepIndex, setStepIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [resetFlag, setResetFlag] = useState(false);

  const step = recipe.steps[stepIndex];

  const timerDuration = useMemo(() => {
    return recipe.steps.find((s) => s.type === "timer")?.duration || 0;
  }, [recipe]);

  useEffect(() => {
    const currentStep = recipe.steps[stepIndex];

    if (currentStep.type === "timer") {
      setActiveModes(["timerGesture", "handSwipe"]);
    } else {
      setActiveModes(["handSwipe"]);
    }

    return () => setActiveModes([]);
  }, [stepIndex, recipe, setActiveModes]);

  useEffect(() => {
    const handleSwipeLeft = () => {
      setStepIndex((prev) =>
        Math.min(prev + 1, recipe.steps.length - 1)
      );
    };

    const handleSwipeRight = () => {
      setStepIndex((prev) =>
        Math.max(prev - 1, 0)
      );
    };

    const onStart = () => setIsRunning(true);
    const onStop = () => setIsRunning(false);

    const onReset = () => {
      setIsRunning(false);
      setResetFlag((prev) => !prev);
    };

    window.addEventListener("swipeLeft", handleSwipeLeft);
    window.addEventListener("swipeRight", handleSwipeRight);
    window.addEventListener("timerStart", onStart);
    window.addEventListener("timerStop", onStop);
    window.addEventListener("timerReset", onReset);

    return () => {
      window.removeEventListener("swipeLeft", handleSwipeLeft);
      window.removeEventListener("swipeRight", handleSwipeRight);
      window.removeEventListener("timerStart", onStart);
      window.removeEventListener("timerStop", onStop);
      window.removeEventListener("timerReset", onReset);
    };
  }, [recipe]);

  return (
    <div className="container recipe-detail">
      <h1>{recipe.title}</h1>

      <p>{recipe.description}</p>

      <div className="step-box">
        <h2>Step {stepIndex + 1}</h2>

        {step.type === "text" && (<p className="step-text">{step.content}</p>)}

        <div style={{ display: step.type === "timer" ? "block" : "none" }}>
          <Timer
            duration={timerDuration}
            isRunning={isRunning}
            resetFlag={resetFlag}
          />
        </div>

        <div className="step-nav">
          {stepIndex > 0 && (
            <button
              onClick={() =>
                setStepIndex((prev) => Math.max(prev - 1, 0))
              }
            >
              Previous
            </button>
          )}

          {stepIndex < recipe.steps.length - 1 && (
            <button
              onClick={() =>
                setStepIndex((prev) =>
                  Math.min(prev + 1, recipe.steps.length - 1)
                )
              }
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}