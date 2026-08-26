import { Navigate, useParams } from "react-router-dom";
import ArticlesArray from "../components/Article";
import { slugify } from "../utils/slug";

export const ArticleRedirect = () => {
  const { articleId } = useParams();

  const article = ArticlesArray.find(
    (articulo) => slugify(articulo.titulo) === articleId
  );

  return (
    <Navigate
      to={article ? `/articles?articulo=${articleId}` : "/articles"}
      replace
    />
  );
};

export default ArticleRedirect;
