import { Link } from "react-router-dom";
import { slugify } from "../utils/slug";

export const ArticleCard = ({ articulo }) => {
  const articleId = slugify(articulo.titulo);

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
