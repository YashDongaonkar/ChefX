import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { VisionContext } from "../context/VisionContext";

import recipes from "../data/recipes";
import "../css/recipes.css";

export default function RecipesPage() {
  const { setActiveModes } = useContext(VisionContext);

  useEffect(() => {
    setActiveModes(["handScroll"]);
    return () => setActiveModes([]);
  }, []);

  return (
    <div className="recipes-page">
      <h2 className="recipes-title">Recipes</h2>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="card-link"
          >
            <div className="recipe-card">
              <div className="recipe-card-content">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}