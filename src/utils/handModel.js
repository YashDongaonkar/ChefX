import * as handpose from "@tensorflow-models/handpose";
import * as tf from "@tensorflow/tfjs";

let model = null;

export const loadHandModel = async () => {
  if (model) return model;
  await tf.ready();
  model = await handpose.load();
  return model;
};

export const getHandModel = () => model;