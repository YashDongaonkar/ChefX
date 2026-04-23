let model;

export async function loadTimerModel() {
  const URL = "/model/";

  if (!window.tmImage) {
    console.error("tmImage not loaded ❌");
    return;
  }

  model = await window.tmImage.load(
    URL + "model.json",
    URL + "metadata.json"
  );
}

export function getTimerModel() {
  return model;
}