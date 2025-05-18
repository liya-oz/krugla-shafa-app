import React from "react";
import { Link } from "react-router-dom";
import "../styles/Catalogue.css";
import { 
  Home, 
  User, 
  Box, 
  Layout, 
  Coffee, 
  Eye, 
  Archive, 
  Sun, 
  Tv, 
  Activity 
} from "lucide-react";

const categories = [
  "sofa",
  "chair",
  "stool",
  "table",
  "desk",
  "kitchen",
  "vanitory",
  "matress",
  "mirror",
  "shelf",
  "lamp",
  "tv table",
  "garden",
];

const categoryIcons = {
  sofa: Home,
  chair: User,
  stool: Box,
  table: Layout,
  desk: Archive,
  kitchen: Coffee,
  vanitory: Archive,
  matress: Box,
  mirror: Eye,
  wardrove: Archive,
  lamp: Sun,
  "tv table": Tv,
  garden: Activity,
};

const Catalogue = () => {
  return (
    <div className="catalogue-container">
      <h1>Catalogue</h1>
      <div className="categories-grid">
        {categories.map((category) => {
          const IconComponent = categoryIcons[category] || Box;
          return (
            <Link
              key={category}
              to={`/store?category=${encodeURIComponent(category)}`}
              className="category-card"
              title={category.charAt(0).toUpperCase() + category.slice(1)}
            >
              <IconComponent size={32} />
              <span>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </Link>
          );
        })}
      </div>
      <Link to="/" className="back-home">
        Back to Home
      </Link>
    </div>
  );
};

export default Catalogue;
