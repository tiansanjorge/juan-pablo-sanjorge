import { Link } from "react-router-dom";
import { slugify } from "../utils/slug";

export const ArticleCard = ({ articulo, isActive, onSelect }) => {
  const content = (
    <>
      <h3 className="article-card-title">{articulo.titulo}</h3>
      <span className="badge-pill mt-3">{articulo.fecha}</span>
    </>
  );

  if (onSelect) {
    return (
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={isActive}
        className={`article-card card-surface h-100 text-decoration-none${
          isActive ? " active" : ""
        }`}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      to={`/articles?articulo=${slugify(articulo.titulo)}`}
      className="article-card card-surface h-100 text-decoration-none"
    >
      {content}
    </Link>
  );
};

export default ArticleCard;
