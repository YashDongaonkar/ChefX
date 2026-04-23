import { Link } from "react-router-dom";
import "../css/landingPage.css";

export default function LandingPage() {
  return (
    <div className = "page">

      <section className="hero">
        <h1 className="title">ChefX</h1>
        <p className="subtitle">Cook without touching your screen.</p>
        <Link to="/recipes" className="button">
          Explore Recipes →
        </Link>
      </section>

      <footer className="footer">
        <p>
          Built by <span>Chitkala</span> & <span>Yash</span>
        </p>
      </footer>
    </div>
  );
}