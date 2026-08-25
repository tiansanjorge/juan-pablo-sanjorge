import { Link } from "react-router-dom";

export const ArticleCard = ({ articulo }) => {
  const articleId = articulo.titulo
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "");

  return (
    <Link
      to={`/${articleId}`}
      className="article-card card-surface h-100 text-decoration-none"
    >
      <h3 className="article-card-title">{articulo.titulo}</h3>
      <span className="badge-pill mt-3">{articulo.fecha}</span>
    </Link>
  );
};

export default ArticleCard;
