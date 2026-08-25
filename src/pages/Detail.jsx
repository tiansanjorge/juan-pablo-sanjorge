import { useParams, Link } from "react-router-dom";
import ArticlesArray from "../components/Article";
import { Reveal } from "../components/Reveal";
import { Helmet } from "react-helmet-async";
import { slugify } from "../utils/slug";

export const Detail = () => {
  const { articleId } = useParams();

  const article = ArticlesArray.find(
    (article) => slugify(article.titulo) === articleId
  );

  if (!article) {
    return (
      <main className="topFiller">
        <Helmet>
          <title>Artículo no encontrado | Lic. Juan Pablo Sanjorge</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <section className="container-fluid py-5 text-center">
          <p className="section-title mb-4">Artículo no encontrado</p>
          <Link to="/articles" className="btn-pill btn-pill-outline">
            Volver a artículos
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="topFiller">
      <Helmet>
        <title>{article.titulo} | Lic. Juan Pablo Sanjorge</title>
        <meta name="title" content={article.titulo} />
        <meta
          name="description"
          content={`Juan Pablo Sanjorge, licenciado en psicología (UBA). Artículo: ${article.titulo}`}
        />
        <link
          rel="canonical"
          href={`https://psicologosanjorge.com.ar/${articleId}`}
        />
        <meta
          property="og:title"
          content={`${article.titulo} | Lic. Juan Pablo Sanjorge`}
        />
        <meta
          property="og:description"
          content={`Juan Pablo Sanjorge, licenciado en psicología (UBA). Artículo: ${article.titulo}`}
        />
        <meta
          property="og:url"
          content={`https://psicologosanjorge.com.ar/${articleId}`}
        />
      </Helmet>

      <section className="container-fluid py-5">
        <div className="col-11 col-md-8 mx-auto">
          <Reveal>
            <span className="badge-pill mb-3 d-inline-block">
              {article.fecha}
            </span>
            <h1 className="section-title mb-4">{article.titulo}</h1>

            <div
              className="card-surface article-body"
              dangerouslySetInnerHTML={{ __html: article.contenido }}
            />
            <p className="article-signature mt-4">
              <b>{article.firma}</b>
            </p>

            <div className="mt-5">
              <Link to="/articles" className="btn-pill btn-pill-outline">
                ← Volver a artículos
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Detail;
