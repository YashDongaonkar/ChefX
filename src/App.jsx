import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetail from "./pages/RecipeDetail";

import FloatingWebcam from "./components/FloatingWebcam";
import VisionEngine from "./components/VisionEngine";

import WebcamProvider from "./context/WebcamContext";
import VisionProvider from "./context/VisionContext";

import { Toaster } from "react-hot-toast";


export default function App() {
  return (
    <WebcamProvider>
      <VisionProvider>
        <Toaster />
        <FloatingWebcam />
        <VisionEngine />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </VisionProvider>
    </WebcamProvider>
  );
}